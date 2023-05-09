// import { FaReact } from 'react-icons/fa';
import { FaBootstrap, FaCss3, FaDatabase, FaGithub, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiCanva, SiCsharp, SiFramer, SiJavascript, SiMicrosoftazure, SiSvelte, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';



// import image1 from "/src/assets/srcavatar.png";
// import { renderToStaticMarkup } from 'react-dom/server';




// export const projectsdata = [
//   {
//     authorImg: "images/vite.svg",
//     authorText:
//       'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
//     authorName: 'Olivia Doe',
//     authorPosition: 'Head of Design, Google',
//   },
//   {
//     authorImg: "myavatar2.png",
//     authorText:
//       'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
//     authorName: 'Olivia Doe',
//     authorPosition: 'Head of Design, Google',
//   },
//   {
//     authorImg: "images/vite.svg",
//     // authorImg: myavatar2.png,
//     authorText:
//       'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
//     authorName: 'Olivia Doe',
//     authorPosition: 'Head of Design, Google',
//   },
// ];

// temp
// export const about = [
//   {
//     desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
//     desc1: "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
//     cover: "myAvatar.png",
//   },
// ]


export const ProjectData = [
  {
    id: 1,
    category: ['backend', 'frontend'],
    image: "/images/recipeapp.PNG",
    title: "recipe app with spoonacular api",
    desc: "The application is built using ReactJS and styled using styled-components. React Router is used to handle navigation within the application. The application allows users to search for recipes, and provides a list of results. Users can click on a recipe to view its details. Hosted on github pages.",
    demo: 'https://st-prasad.github.io/recipe-app/',
    github: 'https://github.com/st-prasad/recipe-app'
  },
  {
    id: 2,
    category: ['frontend', 'ui/ux'],
    image: "/images/mygym.PNG",
    title: "landing page for a gym",
    desc: "The project is a gym website/landing page that consists of two pages. The first page is a homepage that introduces the gym and its services, while the second page is a contact form for users to get in touch with the gym. Hosted with continuous development",
    demo: 'https://gymnation.quest/',
    github: 'https://github.com/st-prasad/gym-site'
  },
  {
    id: 3,
    category: ['backend', 'frontend', 'ui/ux'],
    image: "/images/bootstrapCart.PNG",
    title: "E-Commerse web app with stripe payment gateway",
    desc: "This project is an e-commerce store with a backend built using Node.js, Express, and Stripe.The frontend is built using ReactJS and styled using Bootstrap. The application allows users to add items to their cart and checkout using Stripe",
    github: 'https://github.com/st-prasad/react-stripe-store-frontend'
  },
  {
    id: 4,
    category: ['frontend', 'ui/ux'],
    image: "images/vite.svg",
    title: "portfolio website",
    desc: "Built using minimum ammount of libraries. The portfolio features a modern and responsive design, css animations, and a dynamic project gallery with category filtering. The contact form is integrated with EmailJS.",
    github: 'https://github.com/ftu'
  },
  {
    id: 5,
    category: ['backend', 'frontend', 'sql'],
    // image: "images/vite.svg",
    title: "Project Title three",
    desc: "Provident simil",
    demo: 'http://.com',
    github: 'https://github.com/y'
  },
  {
    id: 6,
    category: ['backend', 'frontend', 'sql'],
    // image: image1,
    title: "Project Title six (UIUX)",
    desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
    demo: 'http://.com',
    github: 'https://github.com/yrd'
  },
  {
    id: 7,
    category: ['backend', 'frontend', 'sql'],
    // image: image1,
    title: "Project Title six (UIUX)",
    desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
    demo: 'http://.com',
    github: 'https://github.com/yrd'
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