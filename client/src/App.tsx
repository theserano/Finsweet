import { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import("./pages/Home/Home"));
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
        </Routes>
        <Footer />
      </Router>
    </Suspense>
    </>
  )
}

export default App
