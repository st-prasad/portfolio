// import AOS from 'aos'
// import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Contact from './Components/Contact'
import HeroPage from './Components/HeroPage'
import Navbar from './Components/Navbar'
// import Projects from './Components/Projects'
import Skills from './Components/Skills'
// import SkillBars from './Components/Skillbars'
// import About from './Components/testing'
// import Tempbutton from './testprojectscomp/ProjectsCategories'
// import Card from './testprojectscomp/Card'
import Testingprojcomp from './testprojectscomp/Testingprojcomp'


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
      <Testingprojcomp/>
      <Contact />
      <Skills />
    </div>
  )
}

export default App
