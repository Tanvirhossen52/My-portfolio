import  { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png"
import logoWhite from "../assets/logoWhite.png"
import { Link } from "react-router";
import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { BiMoon, BiSun } from "react-icons/bi";
import { GiMoon } from "react-icons/gi";
gsap.registerPlugin(ScrollToPlugin)





const Navbar = () => {

    const [menu, setmenu] = useState(true);
    const [isdark, setIsdark] = useState(()=>{return localStorage.getItem("theme")==="dark"});
    const navRef = useRef(null);

 useEffect(()=>{
  if (isdark) {
    document.documentElement.classList.add("dark")
    
  } else {
    document.documentElement.classList.remove("dark")
    
  }
  localStorage.setItem("theme", isdark? "dark":"light")

 },[isdark])

    const scrollToSection=(id)=>{
      gsap.to(window,{
        duration:1,
        scrollTo:{
          y:`#${id}`,
          offsetY:70,
        },
        ease:"power2.out"
      })


    }

    useGSAP(()=>{
      gsap.from(navRef.current,{
        y:-100,
        opacity:0,
        duration:1,
        ease:"power3.in",
      })
    })


    
    
 
  return (
  
       

      <section  ref={navRef}   className="bg-white/60 z-10 top-0 left-0 w-full backdrop-blur-xl fixed py-6">
        <div className="flex justify-between px-4 md:px-10   items-center">
          <div>
           
            <button
              onClick={()=>{
                scrollToSection("Landing")
              }}
             className=" cursor-pointer">
             
              <img className="w-20 block dark:hidden " src={logo} alt="logo" />

              <img className="w-20 hidden dark:block " src={logoWhite} alt="logo" />
              
            
              
            </button>
            
          </div>

          <div><p className=" hover:text-primary hidden md:block transition-colors duration-300 ">Tanvirhossen565291@gmail.com</p></div>
          {/* Dextop menu */}
          <div className=" hidden md:flex justify-center items-center gap-4 font-semibold">
            <div  className="flex gap-4">
              
              <button
              onClick={()=>{
                scrollToSection("Myprofile")
              }}
               className=" hover:text-primary transition-colors duration-300" >About me</button>
              <button
               onClick={()=>{
                scrollToSection("MyWork")
              }}
                className=" hover:text-primary transition-colors duration-300" >Work</button>
             
              <button
               onClick={()=>{
                scrollToSection("Contact")
              }}
              
              className=" hover:text-primary transition-colors duration-300" >Contact</button>
              
            </div>
             <button onClick={()=>setIsdark(!isdark)}>{ isdark ? <BiSun size={20}/>:<BiMoon size={20}/>}</button>

          
          </div>

          {/* Mobile Menu */}
          <div className="flex flex-col  md:hidden">
            <div className="relative mr-4 mb-4">
              {menu ? (
                <AiOutlineAlignRight
                  onClick={() => setmenu(false)}
                  className="size-5 absolute"
                />
              ) : (
                <AiOutlineClose
                  onClick={() => setmenu(true)}
                  className="size-5 absolute "
                />
              )}
            </div>
          </div>
        </div>
        {!menu && (
          <div className="p-10 absolute w-full bg-background text-md font-semibold md:hidden">
            <div className="flex flex-col gap-4">
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>

              <p className=" hover:text-primary block md:hidden transition-colors duration-300 ">Tanvirhossen565291@gmail.com</p>
              
            </div>

            
          </div>
        )}

       
      </section>

    
    
    
  )
}

export default Navbar
