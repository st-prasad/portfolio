// import { FaReact } from 'react-icons/fa';
import { FaBootstrap, FaCss3, FaDatabase, FaGithub, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiCanva, SiCsharp, SiFramer, SiJavascript, SiMicrosoftazure, SiSvelte, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';



import image1 from "/src/assets/srcavatar.png";
// import { renderToStaticMarkup } from 'react-dom/server';




export const projectsdata = [
  {
    authorImg: "images/vite.svg",
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: "myavatar2.png",
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: "images/vite.svg",
    // authorImg: myavatar2.png,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// temp
export const about = [
  {
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
    desc1: "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
    cover: "myAvatar.png",
  },
]


export const projectstempdata = [
  {
    id: 1,
    category: 'uiux',
    image: image1,
    title: "Project Title One (UIUX)",
    desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
    demo: 'http://egatortutorials.com',
    github: 'https://github.com/egattor'
  },
  {
    id: 2,
    category: 'frontend',
    image: "images/vite.svg",
    title: "Project Title Two (Frontend)",
    desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
    demo: 'http://egatortutorials.com',
    github: 'https://github.com/egattor'
  },
  {
    id: 3,
    category: 'frontend',
    image: "images/vite.svg",
    title: "Project Title three",
    desc: "Provident simil",
    demo: 'http://egatortutorials.com',
    github: 'https://github.com/egattor'
  },
  {
    id: 4,
    category: 'frontend',
    image: "images/vite.svg",
    title: "Project Title three",
    desc: "Provident similProvident similProvident simil",
    demo: 'http://egatortutorials.com',
    github: 'https://github.com/egattor'
  },
  {
    id: 5,
    category: 'uiux',
    image: "images/vite.svg",
    title: "Project Title three",
    desc: "Provident simil",
    demo: 'http://egatortutorials.com',
    github: 'https://github.com/egattor'
  },
  {
    id: 6,
    category: 'uiux',
    image: image1,
    title: "Project Title six (UIUX)",
    desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
    demo: 'http://egatortutorials.com',
    github: 'https://github.com/egattor'
  },
  {
    id: 7,
    category: 'uiux',
    image: image1,
    title: "Project Title six (UIUX)",
    desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
    demo: 'http://egatortutorials.com',
    github: 'https://github.com/egattor'
  },
]

export const skillsArray = [
  {
    name: 'css',
    image: "images/download.jpg",
    level: 80,
    icon: FaCss3,
  },
  {
    name: 'react',
    // ** got error here - icon: <FaReact/>,
    // Uncaught SyntaxError: Unexpected token '<' error 
    // was because Using jsx on a non-jsx file, renaming file name to .jsx fixed it
    // icon: FaMusic,
    // image: "/images/vite.svg",
    level: 65,
    icon: FaReact,
  },
  {
    name: 'next.js',
    // ** got error here - icon: <FaReact/>,
    // Uncaught SyntaxError: Unexpected token '<' error 
    // was because Using jsx on a non-jsx file, renaming file name to .jsx fixed it
    // icon: FaMusic,
    // image: "/images/vite.svg",
    level: 65,
    icon: TbBrandNextjs,
  },
  {
    name: 'Svelte',
    image: "images/download.jpg",
    level: 40,
    icon: SiSvelte,
  },
  // {
  //   name: 'Next.js',
  //   image: "images/download.jpg",
  //   level: 70,
  //   icon: SiNextDotJs,
  // },
  {
    name: 'Tailwind',
    image: "images/download.jpg",
    level: 75,
    icon: SiTailwindcss,
  },
  {
    name: 'JavaScript',
    image: "images/download.jpg",
    level: 65,
    icon: SiJavascript,
  },
  {
    name: 'TypeScript',
    image: "images/download.jpg",
    level: 50,
    icon: SiTypescript,
  },
  {
    name: 'MS Azure',
    image: "images/download.jpg",
    level: 35,
    icon: SiMicrosoftazure,
  },
  {
    name: 'Framer.js',
    image: "images/download.jpg",
    level: 55,
    icon: SiFramer,
  },
  {
    name: 'C#',
    image: "images/download.jpg",
    level: 45,
    icon: SiCsharp,
  },
  {
    name: 'Canva',
    image: "images/download.jpg",
    level: 55,
    icon: SiCanva,
  },
  {
    name: 'Java',
    image: "images/download.jpg",
    level: 45,
    icon: FaJava,
  },
  {
    name: 'Node.js',
    image: "images/download.jpg",
    level: 30,
    icon: FaNodeJs,
  },
  {
    name: 'MySQL',
    image: "images/download.jpg",
    level: 60,
    icon: FaDatabase,
  },
  {
    name: 'Bootstrap',
    image: "images/download.jpg",
    level: 65,
    icon: FaBootstrap,
  },
  {
    name: 'GitHub',
    image: "images/download.jpg",
    level: 65,
    icon: FaGithub,
  },
  {
    name: 'Python',
    image: "images/download.jpg",
    level: 25,
    icon: FaPython,
  },
  
];


// export default projectstempdata