import { FaReact } from 'react-icons/fa';


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
    name: 'react',
    // ** got error here - icon: <FaReact/>,
    // Uncaught SyntaxError: Unexpected token '<' error 
    // was because Using jsx on a non-jsx file, renaming file name to .jsx fixed it
    icon: FaReact,
    // icon: FaMusic,
    image: "/images/vite.svg",
    level: 75,
  },
  {
    name: 'javascript',
    image: "images/vite.svg",
    level: 5,
    icon: FaReact,

  },
  {
    name: 'java',
    image: "images/download.jpg",
    level: 7,
    icon: FaReact,

  },
  {
    name: 'css',
    image: "images/download.jpg",
    level: 70,
    icon: FaReact,

  }
];


// export default projectstempdata