import { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import("./pages/Home/Home"));
const NavLink = lazy(() => import('./components/Navlink/Navlink'));



function App() {

  return (
    <>
    <Suspense>
      <Router>
        <NavLink /> 
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </Suspense>
    </>
  )
}

export default App
