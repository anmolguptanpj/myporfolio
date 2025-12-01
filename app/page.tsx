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
import gmailImg from "@/public/svgviewer-output.svg"
import githubImg from "@/public/github-svgrepo-com.svg"
import linkedImg from "@/public/linkedin-svgrepo-com.svg"


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
        "Proper management of Todo creation and delete  with CRUD        ",
        "Implementation of Access token and Refresh token"],
      "Tech Stack":["MongoDB","React","Express","UseContext"],
      "links":["https://todo-v2-frontend.vercel.app/"]
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
      "links":[""],
    }
  },
  "about":`I’m Anmol Gupta, originally from Nepal and currently in Delhi for higher studies and a tech-focused career.
  
  Before entering development, I spent 3.5 years running a food wholesale business and operated a cloud-kitchen for 6 months. After March 2025, I shifted fully into software development to build a long-term career in technology.`
  ,
  contact: {
  Gmail: {"mailto:anmolguptanpj282@gmail.com":gmailImg},
  Github: {"https://github.com/anmolguptanpj":githubImg},
  Linkedin:{"https://www.linkedin.com/in/itheanmolgupta/":linkedImg}
}

   }

  return (
  <div>
  <header className="flex flex-row w-full  border-b h-16 pl-10 pr-10  ">
    <div className="lg:w-[20vw] w-full font-bold text-3xl shadow-amber-200 flex flex-row justify-center items-center">{portfolio.name}</div>
    <div className=" lg:flex hidden flex-row items-center justify-end w-[80vw]">
      <ul className=" flex font-bold flex-row gap-5">
          <li><Link href={"#skills"}>Skills</Link></li>
          <li><Link href={"#projects"}>Projects</Link></li>
          <li><Link href={"#about"}>About</Link></li>
          <li><Link href={"#contacts"}>Contact Me</Link></li>
      </ul>
    </div>
  </header>

  <section className="text-center mb-5 mt-16 px-5">
        <h1 className="text-4xl font-bold">Hi, I’m {portfolio.name}</h1>
        <p className="mt-3 text-gray-300 text-lg">
          Full Stack Developer • MERN • Next.js 
        </p>
      </section>
  

  <div id="skills" className="w-full text-center text-2xl border-t pt-10 ">Skills</div>
  <div className="flex flex-row flex-wrap justify-center ">
          {Object.entries(portfolio.skills).map(([key,value])=>(
            <div className=" flex flex-col lg:m-5 p-5 m-2  bg-white justify-center items-center border-2  pt-5  rounded-xl " key={key}>
            <div className=" lg:w-20 w-20 h-20   lg:h-20"><Image src={value} className="object-contain" alt={`${key}`}/></div>
            <div className="flex justify-baseline flex-wrap items-baseline text-xs text-black mt-2">{key}</div>
        </div>
        ))}
  </div>
  
  <div className="flex border-t flex-col pt-10 items-center justify-center text-xs lg:text-[1rem]  ">
    <p id="projects" className="text-2xl">Projects</p>
    {Object.entries(portfolio.projects).map(([key,p])=>(
     <div className="lg:w-[80%] p-3 justify-center items-center  mb-10  flex flex-col  w-full">
      <div className="  rounded-xl border-2 w-full p-5 lg:w-[60%] flex justify-center items-center  " key={key}>
     <div className="">
     <div><p className=" font-bold text-center">{p.Title}</p></div>
     
     <div className="pt-5 pb-5">   <p className="font-bold">Features</p><ul className=" pl-6 list-disc">{(p.Features).map((f)=>(<li key={f}>{f}</li>))}</ul></div>
     <div className="">
     <p>Tech stack : </p>
      <ul className=" list-disc  list-inside ">{(p["Tech Stack"]).map((l)=>(<li className="pl-3" key={l}>{l}</li>))}</ul></div>
      <p className="mt-6">Link:</p>
     <div className="flex flex-col"><ul className="pl-6 list-disc">{(p.links).map((k)=>(<Link href={k} key={k}><li>{k}</li></Link>))}</ul></div>
     </div>
       
     </div>
     </div>
    ))}
  </div>


       <div className="flex flex-col justify-center border-t pt-10 items-center ">
        <p id="about" className="text-2xl">About</p>
    
       <div className="lg:w-[47%] mt-5 text-xs pt-5 lg:text-[1rem] w-[93vw] mb-10 border-2 justify-center  rounded-xl flex flex-col   p-5">
        
        <p  className="">  {portfolio.about}</p>
        </div>
       </div>

  <footer id="contacts" className="border-t gap-2 p-10 flex flex-col lg:flex-row justify-center items-center">
    <p className="lg:text-3xl " >Contact me :</p>
  <div  className="flex gap-10 flex-col  lg:flex-row  ">{Object.entries(portfolio.contact).map(([platform,details])=>
  {const[[link,icon]] = Object.entries(details);
    return(<div className="border-2 w-auto text-black bg-slate-300  h-10 p-3 hover:bg-white  rounded-xl text-xl flex flex-col  lg:flex-row justify-center items-center  " key={platform}>
     
      <div ><Link href={link}> 
      <div className="flex justify-center items-center gap-2"><Image  className="w-10 h-5 object-contain" src={icon} alt={`${icon}`}/>
      <div className="">{platform}</div>
      
      </div>
      </Link></div>
    </div>)
  })}</div>
</footer>

  
  </div>

  );
}
