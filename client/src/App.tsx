import { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const What = lazy(() => import("./pages/What/What"));
const Media = lazy(() => import("./pages/Media/Media"));
const NavLink = lazy(() => import('./components/Navlink/Navlink'));
const Footer = lazy(() => import('./components/footer/Footer'));


function App() {


  return (
    <>
    <Suspense>
      <Router>
        <NavLink /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/what' element={<What />} />
          <Route path='/media' element={<Media />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
    </>
  )
}

export default App
