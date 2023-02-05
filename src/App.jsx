import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Description from './Components/Desctription'
import Navbar from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Description />
    </div>
  )
}

export default App
