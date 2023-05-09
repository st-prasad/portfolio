
import Contact from './components/Contact'
import HeroPage from './components/HeroPage'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
// import Card from './projectComponents/Card'
// import Projects from './projectComponents/Projects'
import ProjectsMainPage from './projectComponents/ProjectsMainPage'


function App() {


  return (
    <div className="App">
      <Navbar />
      <HeroPage />

      <ProjectsMainPage/>
      <Skills />
      <Contact />
    </div>
  )
}

export default App
