import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type ViewStore = {
  total: number;
  updatedAt: string;
  visitors: string[];
};

const LOCAL_STORE = path.join(process.cwd(), "data", "views.json");
const REDIS_VISITOR_SET = "portfolio:unique-visitors";

function normalizeVisitorId(value: unknown) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return /^[a-zA-Z0-9_-]{8,96}$/.test(trimmed) ? trimmed : null;
}

async function redisPipeline(commands: string[][]) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) return null;

  const response = await fetch(`${url}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
  });

  if (!response.ok) {
    throw new Error(`Redis request failed with ${response.status}`);
  }

  return response.json() as Promise<Array<{ result: number }>>;
}

async function readLocalStore(): Promise<ViewStore> {
  try {
    const raw = await readFile(LOCAL_STORE, "utf8");
    const parsed = JSON.parse(raw) as Partial<ViewStore>;
    return {
      total: Number(parsed.total) || 0,
      updatedAt: parsed.updatedAt || new Date().toISOString(),
      visitors: Array.isArray(parsed.visitors) ? parsed.visitors : [],
    };
  } catch {
    return { total: 0, updatedAt: new Date().toISOString(), visitors: [] };
  }
}

async function writeLocalStore(store: ViewStore) {
  await mkdir(path.dirname(LOCAL_STORE), { recursive: true });
  await writeFile(LOCAL_STORE, JSON.stringify(store, null, 2), "utf8");
}

export async function GET() {
  try {
    const redis = await redisPipeline([["SCARD", REDIS_VISITOR_SET]]);
    if (redis) {
      return NextResponse.json({ total: redis[0]?.result ?? 0 });
    }

    const store = await readLocalStore();
    return NextResponse.json({ total: store.total });
  } catch {
    return NextResponse.json({ total: 0 }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as { visitorId?: unknown };
    const visitorId = normalizeVisitorId(body.visitorId);

    if (!visitorId) {
      return NextResponse.json({ error: "Invalid visitor id" }, { status: 400 });
    }

    const redis = await redisPipeline([
      ["SADD", REDIS_VISITOR_SET, visitorId],
      ["SCARD", REDIS_VISITOR_SET],
    ]);

    if (redis) {
      return NextResponse.json({
        isNew: Boolean(redis[0]?.result),
        total: redis[1]?.result ?? 0,
      });
    }

    const store = await readLocalStore();
    const knownVisitors = new Set(store.visitors);
    const isNew = !knownVisitors.has(visitorId);

    if (isNew) {
      knownVisitors.add(visitorId);
      store.visitors = [...knownVisitors];
      store.total = store.visitors.length;
      store.updatedAt = new Date().toISOString();
      await writeLocalStore(store);
    }

    return NextResponse.json({ isNew, total: store.total });
  } catch {
    return NextResponse.json({ error: "Unable to update view count" }, { status: 500 });
  }
}
