import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef} from "react";
import { BsChevronDown, BsFillCaretDownFill } from "react-icons/bs";
gsap.registerPlugin(SplitText)

const WhatIDo = () => {
  
 

  return (
    <div className=" bg-primary px-4 md:px-10 p-6 mt-10 md:mt-0 text-white">
      <div className="flex flex-col md:flex-row justify-between md:items-center ">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-semibold md:text-6xl">
            What <br />I <span className=" text-background">Do</span>
          </h2>
        </div>

        <div className=" flex flex-col w-full md:w-2/4">
          {/* top */}
          <div className=" relative  p-4  ">
            {/* icom */}

            <div className="  ">
              <BsFillCaretDownFill
                size={16}
                className=" top-0  absolute  left-0 text-amber-500 rotate-270"
              />
              <BsFillCaretDownFill
                size={16}
                className=" top-0  absolute  right-0 text-amber-500 rotate-90"
              />
            </div>

            <h2 className=" uppercase font-semibold">Frontend</h2>
            <p className=" text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ut
              eos nam sit, numquam aliquam distinctio,{" "}
            </p>

            <button
              onClick={() => {
                setOpen(false);
              }}
              className=" border border-gray-200 rounded-full p-1 right-0 absolute "
            >
              <BsChevronDown className="" />
            </button>

            <div className="  gap-1 mt-2 flex  flex-wrap">
              <span className=" border-gray-400 border mt-2 text-xs  py-1 px-3 rounded-full ">
                HTML
              </span>
              <span className=" border-gray-400 border mt-2 text-xs  py-1 px-3 rounded-full ">
                Tailwind Css
              </span>
              <span className=" border-gray-400 border mt-2 text-xs  py-1 px-3 rounded-full ">
                React
              </span>
              <span className=" border-gray-400 border mt-2 text-xs  py-1 px-3 rounded-full ">
                Next Js
              </span>
            </div>
          </div>

          {/* down */}
          <div className=" relative  group p-4  ">
            {/* icom */}

            <div className=" ">
              <BsFillCaretDownFill
                size={16}
                className=" bottom-0  absolute  left-0 text-amber-500 rotate-270"
              />
              <BsFillCaretDownFill
                size={16}
                className=" bottom-0  absolute  right-0 text-amber-500 rotate-90"
              />
            </div>

            <h2 className=" uppercase font-semibold">Backend</h2>
            <p className=" text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ut
              eos nam sit, numquam aliquam distinctio,{" "}
            </p>
 
            <button
             
              className=" border border-gray-200 rounded-full p-1 right-0 absolute "
            >
              <BsChevronDown className="" />
            </button>

            <div
          

           
            
             className=" gap-1 transition-all duration-300 mt-2 opacity-0  group-hover:opacity-100  flex-wrap">
              <span className=" border-gray-400 border mt-2 text-xs  py-1 px-3 rounded-full ">
                React
              </span>
              <span className=" border-gray-400 border mt-2 text-xs  py-1 px-3 rounded-full ">
                React
              </span>
              <span className=" border-gray-400 border mt-2 text-xs  py-1 px-3 rounded-full ">
                React
              </span>
              <span className=" border-gray-400 border mt-2 text-xs  py-1 px-3 rounded-full ">
                React
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
