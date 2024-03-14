import { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const What = lazy(() => import("./pages/What/What"));
const Media = lazy(() => import("./pages/Media/Media"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Donate = lazy(() => import('./pages/Donate/Donate'));
const Project = lazy(() => import("./pages/Project/Project"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const Events = lazy(() => import("./pages/Event/Events"));
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
          <Route path='/contact' element={<Contact />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/project' element={<Project />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/events' element={<Events />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
    </>
  )
}

export default App
