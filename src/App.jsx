// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import Contact from './components/Contact'
import HeroPage from './src/components/HeroPage'
import Navbar from './src/components/Navbar'
import Contact from '/src/components/Contact'
// import Projects from './Components/Projects'
import Card from './projectComponents/Card'
import Skills from './src/components/Skills'
// import SkillBars from './Components/Skillbars'
// import About from './Components/testing'
// import Tempbutton from './testprojectscomp/ProjectsCategories'
// import Card from './testprojectscomp/Card'
import ProjectsMainPage from './projectComponents/ProjectsMainPage'


function App() {
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, [])

  return (
    <div className="App">
      <Navbar />
      <HeroPage />
      {/* <Projects/> */}
      {/* <SkillBars/> */}
      {/* <About /> */}
      {/* <Tempbutton /> */}
      {/* <Tempbutton /> */}
      {/* <Card/> */}
      <ProjectsMainPage/>
      <Skills />
      <Contact />
    </div>
  )
}

export default App
