import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaPaperPlane, FaGithub, FaLinkedin, FaBootstrap, FaGit, FaNode } from "react-icons/fa";
import {  DiMysql } from "react-icons/di";
import { SiExpress, SiJavascript, SiTypescript } from "react-icons/si";


import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";
import work7 from "./assets/work7.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]


export const bios = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+34671373294",
    link: "https://wa.me/34671373294/"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "serodinonela@gmail.com",
    link: "mailto:serodinonela@gmail.com"
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    key: "Linkedin",
    value: "in/marianela-serodino-runco",
    link: "https:/www.linkedin.com/in/marianela-serodino-runco"
  },
  {
    id: 4,
    icon: <FaGithub />,
    key: "Github",
    value: "https:/github.com/Nelaserodino",
    link: "https:/github.com/Nelaserodino"
  }
]

export const iconsFront = [
  { name: "HTML5",
    icon:<FaHtml5 color="#D65302"/>, 
    color:"#D65302"
   },
    {name: "CSS3",
     icon:<FaCss3 color="#2762EA"/>,
     color:"#2762EA"
    },
    {name: "Javascript",
     icon:<SiJavascript color="#EFD81D"/>,
     color:"#EFD81D"
    },
    {name: "React",
     icon:<FaReact color="#61DAFB"/>,
     color:"#61DAFB"
    },
    {name: "TypeScript",
     icon:<SiTypescript color="#3074BF"/>,
     color:"#3074BF"
    },
    {name: "Bootstrap",
     icon:<FaBootstrap color="#802AF3" />,
     color:"#802AF3"
    },
    {name: "SASS",
     icon:<FaSass color="#CE7EA6"/>,
     color:"#CE7EA6"
    }
]
export const iconsBack = [
  { name: "Node.js",
    icon:<FaNode color="#126E00"/>,
    color:"#126E00"
  }, 
    {name: "Express.js",
     icon:<SiExpress color="#303030"/>,
     color:"#303030"
    },
    {name: "MySQL",
     icon:<DiMysql color="#EA8C11"/>,
     color:"#EA8C11"
    }
]
export const iconsVersionControl = [
  { name: "Git",
    icon:<FaGit color="#E84C30"/>,
    color:"#E84C30"
  }, 
    {name: "GitHub",
     icon:<FaGithub color="#5C1AB0"/>,
     color:"#5C1AB0"
  },
  {name: "Figma",
  icon:<FaFigma color="#9D56F7"/>,
  color:"#9D56F7"
}
]

export const experiences = [
  {
    id: 1,
    year: "2023",
    position: "Junior Full-stack Web Developer",
    company: "Development of the web app for HousIA",
    jobPicture:"housia.jpg",
    skills: [<FaHtml5 color="#D65302"/>, <FaCss3 color="#2762EA"/>, <FaBootstrap color="#802AF3" />,<FaSass color="#CE7EA6"/>,<FaReact color="#61DAFB"/>,<FaNodeJs color="#126E00"/>, <DiMysql color="#EA8C11"/>, <FaFigma color="#9D56F7"/>, <SiExpress color="#303030"/>, <FaGithub color="#5C1AB0"/>]
  },
  {
    di: 2,
    year: "2022",
    position: "Junior Front-End Web Developer",
    company: "Development of the web page for IELTSforOZ",
    jobPicture:"ieltsforoz.jpg",
    skills: [<FaHtml5 color="#D65302"/>, <FaCss3 color="#2762EA"/>,<FaBootstrap color="#802AF3" />,<FaSass color="#CE7EA6"/>]
  },
  {
    id: 3,
    year: "2022",
    position: "Web Developer Student",
    company: "Socratech Bootcamp",
    jobPicture: "socratech.jpg",
    skills: [<FaHtml5 color="#D65302"/>, <FaCss3 color="#2762EA"/>,<FaBootstrap color="#802AF3" />,<FaSass color="#CE7EA6"/>, <FaReact color="61DAFB"/>, <FaNodeJs color="#126E00"/>, <DiMysql color="#EA8C11"/>, <FaFigma color="#9D56F7"/>, <SiTypescript color="#3074BF"/>,<SiExpress color="#303030"/>, <FaGithub color="#5C1AB0"/> ]
  }
]

export const workImages = [
  {
    id: 1,
    img: work1,
    name: "HousIA",
    description:"MVP development for HousIA. The app allows users to obtain a property valuation using artificial intelligence. It provides accurate results by analyzing market trends, property features, and location data.",
    category: "All",
    link:"https://www.youtube.com/watch?v=jCA8dnz_zPY",
    github:""
  },
  {
    id: 2,
    img: work2,
    name: "Play-Back",
    description: "My solo project for Socratech school is a web application that enables collectors to showcase their collections. Users can create profiles, upload photos and descriptions of their items, and connect with other collectors to share their passion.",
    category: "All",
    link:"",
    github:"https://github.com/Nelaserodino/Socratech_mid_project"
  },
  {
    id: 3,
    img: work3,
    name: "IELTS for Oz",
    description: "This is the first website that I created and has its own domain on the internet. Students can easily find information about the teacher's experience, the exam, and reviews.",
    category: "All",
    link: "https://ieltsforoz.com",
    github:"https://github.com/Nelaserodino/IELTS_for_oz"
  },
  {
    id: 4,
    img: work4,
    name: "Movie Time",
    description: "A Netflix clone made with React and Tailwind",
    category: "All",
    link:"https://nelaserodino-movie-time.vercel.app",
    github:"https://github.com/Nelaserodino/netflix_clone"
  },
  {
    id: 5,
    img: work5,
    name: "Calculator",
    description: "A simple calculator made with Javascript Vainilla",
    category: 'All',
    link:"https://nelaserodino-calculator.vercel.app",
    github:"https://github.com/Nelaserodino/Calculator"
  },
  {
    id: 6,
    img: work6,
    name: "Mapty App",
    description: "An app to track running and cycling workouts made with Javascript",
    category: "All",
    link:"https://nelaserodino-mapty-app.vercel.app",
    github:"https://github.com/Nelaserodino/Mapty_App"
  },
  {
    id: 7,
    img: work7,
    name: "Guess my Number",
    description: "A fun game made with Javascript",
    category: "All",
    link:"https://nelaserodino-guess-my-number.vercel.app",
    github:"https://github.com/Nelaserodino/Guess_my_number"
  },
]


export const workNavs = [
  "All", "Web", "App", "Design"
]


