import { useState } from 'react'
import './App.css'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [counter, setCounter] = useState(20);

  return (
    <div >
      <Navbar />
      <h2>counter in the app {counter}</h2>
      {/* <Page1 /> */}
      {/* <Page2 description={"hola chico "}/> */}
      {/* <Page3 changeOuterState={setCounter} originalOuterState={counter}/> */}

      <Outlet />

    </div>
  )
}

export default App
