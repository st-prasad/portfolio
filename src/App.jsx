// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
import Contact from './components/Contact'
import HeroPage from './components/HeroPage'
import Navbar from './components/Navbar'
// import Projects from './Components/Projects'
import Skills from './components/Skills'
import Card from './projectComponents/Card'
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
