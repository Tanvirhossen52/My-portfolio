import { useRef, useState } from "react";
import profile1 from "../assets/Profile1.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MdArrowOutward } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

import { FaFacebookF, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Landing = () => {
  const topRef = useRef();
  const bottomRef = useRef();
 

  useGSAP(() => {
    gsap.from(topRef.current.children ,{
      y: 80,
      opacity: 0,
      duration: 0.3,
      delay: 0.1,
      stagger: 0.1,
      repeat:-1,
      repeatDelay:3,
      yoyo:true,
    });
  }, []);

  const top = "Tanvir Hossen";
  

  return (
    <div className=" w-full h-fit  mt-16 md:mt-8 pt-8  px-4 md:px-10 dark:bg-primary-dark bg-background">
      <div className="flex flex-col md:flex-row  gap-6 md:gap-0 justify-between items-center  ">
        {/* Left side continer */}
        <div className=" space-y-6 ">
          <h5 className=" text-primary font-Lora   text-5xl md:text-6xl">
            Hello,I'm
          </h5>

          <h2 className="relative h-20 ">


            <h3
            
             className="bg-linear-to-b from-primary/60 to-transparent bg-clip-text text-transparent    font-bold text-4xl md:text-5xl">
              Web Developer
             
            </h3>
            <div ref={topRef} className=" overflow-hidden text-primary   font-bold text-4xl md:text-5xl">
              {top.split("").map((char, i) => (
                <span className="inline-block" key={i}>
                  {char}
                </span>
              ))}{" "}
            </div>
          </h2>

          <p className=" text-md text-gray-600">
            "I build modern and scalable web application  using <br /> React and Tailwind css.I focus on creating responsive ,user <br /> friendly interfaces that provide a seamless experience."{" "}
          </p>
     
  

            <button className=" flex gap-2 items-center px-4 py-2 bg-primary font-medium text-white  border border-primary hover:bg-[#0e5659] hover:border-[#0e5659] transition-color duration-300 rounded-md">
              Contact Me <MdArrowOutward size={20}/>
            </button>
           
           <div className=" flex items-center gap-4">
            <p className="flex gap-2 items-center  text-primary font-semibold">Chack Out My Protfolio  <BsArrowRight/></p>
             <div className=" flex items-center gap-2">
              <button className="  h w-8 h-8 flex justify-center items-center text-white bg-primary hover:bg-[#0e5659] hover:scale-105 transition-all duration-300  ho rounded-full "><FaGithub size={20}/></button>
              <button className=" w-8 h-8 flex justify-center items-center text-white bg-primary hover:bg-[#0e5659] hover:scale-105 transition-all duration-300 rounded-full "><FaFacebookF size={20}/></button>
              <button className=" w-8 h-8 flex justify-center items-center text-white bg-primary hover:bg-[#0e5659] hover:scale-105 transition-all duration-300 rounded-full "><FaLinkedin size={20}/></button>
              <button className=" w-8 h-8 flex justify-center items-center text-white bg-primary hover:bg-[#0e5659] hover:scale-105 transition-all duration-300 rounded-full "><FaYoutube size={20}/></button>
             </div>
            <div>

            </div>
           </div>
          
        </div>

        {/* Right side continer */}
        <div className="">
          <img src={profile1} className="w-xl" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
