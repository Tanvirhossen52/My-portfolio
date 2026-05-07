
import Navbar from "../layout/Navbar";
import Landing from "../Component/Landing";
import Contact from "../layout/Contact";
import Myprofile from "../Component/Myprofile";
import MyWork from "../Component/MyWork";
import WhatIDo from "../Component/WhatIDo";
import MyTack from "../Component/MyTack";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger ,ScrollSmoother)



const Home = () => {


  useGSAP(()=>{

  ScrollSmoother.create({
    wrapper:"#smooth-wrapper",
    content:"#smooth-content",
    smooth:1.5,
    effects:true,
  })

    
    
  },[])
 

  

 
  return (
    < >
    <div className="  dark:bg-primary-dark dark:text-white" id="smooth-wrapper">
      <Navbar />
      <div id="smooth-content" >
      
      <section className=" md:h-screen" id="Landing"><Landing /></section>
      <section className=" md:h-screen" id="Myprofile"><Myprofile/></section>
      {/* <section className="h-screen" id="MyTack"> <MyTack/></section> */}
      <section className=" md:h-screen" id="MyWork"><MyWork/></section>
      <section className="" id="WhatIDo"><WhatIDo/></section>
      <section className="md:h-screen" id="Contact"><Contact /></section>
      </div>
    </div>
    </>
  );
};

export default Home;
