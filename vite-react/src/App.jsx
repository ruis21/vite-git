
import './App.css'
// import Box1 from './components/Box1'
// import Box2 from './components/Box2'
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {


  return (
    <>
      {/* <Box1 />
      <br />
      <br />
      <Box2 /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
