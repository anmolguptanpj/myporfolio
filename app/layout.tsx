import "./globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 w-full h-full overflow-y-auto">
          {children}
      </body>
    </html>
  );
}