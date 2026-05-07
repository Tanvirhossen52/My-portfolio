import { BiArrowToLeft } from "react-icons/bi";
import {  CgArrowTopRight, CgCopyright } from "react-icons/cg";

const Contact = () => {
  return (
    <div>
      <div className="px-4 md:px-10 py-20  ">
        <div className=" ">

          <h3 className=" text-3xl font-semibold mb-4  text-primary">Contact</h3>

          <div className=" flex gap-4 flex-col md:flex-row  justify-between">

            <div className=" space-y-1.5">
              <h4 className=" font-medium text-primary">Email</h4>
              <p>
                <a
                  href="mailto:rajeshchittyal21@gmail.com"
                  data-cursor="disable"
                >
                  Tanvirevan565291c@gmail.com
                </a>{" "}
              </p>

              <h4>Education</h4> 
              <p>BSc in Computer Science</p>
            </div>

            <div className=" text-left space-y-1.5">
              <h4 className="font-medium text-primary ">Social</h4>
              <a
                href="https://github.com/raxx21"
                target="_blank"
                data-cursor="disable"
                className=" flex hover:scale-105 transition-all duration-100 border-b-primary/80 border-b  items-center un gap-2"
                
              >
                Github <CgArrowTopRight />
              </a>
              <a
                href="https://www.linkedin.com/in/rajesh-chityal-2a70141b3"
                target="_blank"
                data-cursor="disable"
                className="flex hover:scale-105 transition-all duration-100   border-b-primary/80 border-b items-center gap-2"
              >
                Linkedin
                <CgArrowTopRight />
              </a>{" "}
              <a
                href="https://x.com/raxx21_official"
                target="_blank"
                data-cursor="disable"
                className="flex hover:scale-105 transition-all duration-100 border-b-primary/80 border-b items-center gap-2"
              >
                Twitter <CgArrowTopRight />
              </a>{" "}
              <a
                href="https://www.instagram.com/therajeshchityal"
                target="_blank"
                data-cursor="disable"
                className="flex hover:scale-105 transition-all duration-100  border-b-primary/80 border-b items-center gap-2"
              >
                Instagram <CgArrowTopRight />
              </a>
            </div>

            <div className="contact-box">
              <h2 className="font-medium ">
                Designed and Developed <br /> by
                <span className="text-primary text-xl ml-2">Tanvir Hossen</span>
              </h2>
              <h5 className=" mt-3 flex items-center gap-2">
                <CgCopyright /> 2025
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
