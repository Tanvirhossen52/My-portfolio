
import Contact from './Contact';
import Navbar from './Navbar'
import { Outlet } from "react-router";



const Layout = () => {
  return (
    <div>
       <>
    <Navbar/>
    <Outlet/>
      
    <Contact/>  
    </>
    </div>
  )
}

export default Layout

