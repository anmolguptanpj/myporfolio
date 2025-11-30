import Image from "next/image";



export default function Home() {
   const portfolio = {
    name:"Anmol Gupta",
    education: "BCA First Semester running",
    skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "React.js",
    "MongoDB",
    "Next.js",
    "Tailwind CSS",
    "Express.js",
    "Mongoose"
  ],
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
  <header>
    <div></div>
    <div></div>
  </header>
  
  </div>
  );
}
