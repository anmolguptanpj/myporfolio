import Image from "next/image";
import Link from "next/link";
import htmlImg from "@/public/html5-01-svgrepo-com.svg"
import cssImg from"@/public/css-3-svgrepo-com.svg"
import nodeImg from"@/public/node-js-svgrepo-com.svg"
import reactImg from"@/public/react-logo-svgrepo-com.svg"
import jsImg from"@/public/javascript-svgrepo-com.svg"
import mongoImg from"@/public/mongodb-logo-svgrepo-com.svg"
import nextImg from"@/public/nextjs-fill-svgrepo-com.svg"
import tailImg from"@/public/tailwind-svgrepo-com.svg"
import expressImg from"@/public/express-svgrepo-com.svg"
import mongooseImg from"@/public/Mongoose.js.svg"


export default function Home() {
   const portfolio = {
    name:"Anmol Gupta",
    education: "BCA First Semester running",
    skills: {
    "HTML":htmlImg,
    "CSS": cssImg,
    "JavaScript":jsImg,
    "Node.js":nodeImg,
    "React.js":reactImg,
    "MongoDB":mongoImg,
    "Next.js":nextImg,
    "Tailwind CSS":tailImg,
    "Express.js":expressImg,
    "Mongoose":mongooseImg
    },
  projects:{
    "projectOne":{
      "Title":"TODO With Authentication ",
      "Features":["Used JWT tokens for authentication",
        "Proper management of Todo management with CRUD",
        "Implementation of Access token and Refresh token"],
      "Tech Stack":["MongoDB","React","Express","UseContext"],
      "Links":"https://todo-v2-frontend.vercel.app/"
    },
    "projectTwo":{
      "Title":"FULL STACK ECOMMERCE MULTI-SELLER APP",
      "Features":["Three frontend App:Admin,Supplier,Customer",
        "Role based Authentication",
        "Through Email default Account Activation for suppliers and staffs",
        "Creating,Editing and Managing Products and Supplier and other staff level accounts",
        "JWT Authentication",
        "Implementation of Access token and Refresh token",
        "Mongo DB indexing,Virtualization and population",
        "Cloudinary,MongoDB atlas",
        "Next js based sales frontend App",
        "Focused on Real life day to day business needs"
      ],
      "Tech Stack":["MongoDB","React","Express.js","Redux.js","Next.js"],
      "Links":[],
    }
  },
  "about":`I’m Anmol Gupta, originally from Nepal and currently in Delhi for higher studies and a tech-focused career.
  
  Before entering development, I spent 3.5 years running a food wholesale business and operated a cloud-kitchen for 6 months. After March 2025, I shifted fully into software development to build a long-term career in technology.`
  ,
  contact: {
  email: "anmolguptanpj282@gmail.com",
  github: "https://github.com/anmolguptanpj",
  linkedin:"https://www.linkedin.com/in/itheanmolgupta/"
}

   }

  return (
  <div>
  <header className="flex flex-row w-full h-15 pl-10 pr-10  ">
    <div className="lg:w-[20vw] w-screen flex flex-row justify-center items-center">{portfolio.name}</div>
    <div className=" lg:flex hidden flex-row items-center justify-end w-[80vw]">
      <ul className=" flex  flex-row gap-5">
          <li><Link href={""}>Skills</Link></li>
          <li><Link href={""}>Projects</Link></li>
          <li><Link href={""}>About</Link></li>
          <li><Link href={""}>Contact Me</Link></li>
      </ul>
    </div>
  </header>

  <div className="w-screen text-center pt-10 ">Skills</div>
  <div className="flex flex-row flex-wrap justify-center lg:m-10  m-10">
          {Object.entries(portfolio.skills).map(([key,value])=>(
            <div className=" flex flex-col lg:m-5 p-5 m-2  bg-white justify-center items-center border-2  pt-5  rounded-xl " key={key}>
            <div className=" lg:w-20 w-20 h-20   lg:h-20"><Image src={value} className="object-contain" alt={`${key}`}/></div>
            <div className="flex justify-baseline flex-wrap items-baseline text-xs text-black mt-2">{key}</div>
        </div>
        ))}
  </div>
  
  <div>
    {Object.entries(portfolio.projects).map(([key,p])=>(
      <div></div>
    ))}
  </div>
  
  </div>
  );
}
