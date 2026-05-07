import Slider1 from "../assets/Slider1.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MySlider = [
  {
    id: "01",
    SliderImg: Slider1,
    SliderTitale: "Admin Dashbord",
    SliderSubTitale: "Love-Codir Platfrom ",
    SliderDitals: " Tools & Features",
    SliderSubDitals: "React,Tailwind css,Gsap",
  },
  {
    id: "02",
    SliderImg: Slider1,
    SliderTitale: "Admin Dashbord",
    SliderSubTitale: "Love-Codir Platfrom ",
    SliderDitals: " Tools & Features",
    SliderSubDitals: "React,Tailwind css,Gsap",
  },
  {
    id: "03",
    SliderImg: Slider1,
    SliderTitale: "Admin Dashbord",
    SliderSubTitale: "Love-Codir Platfrom ",
    SliderDitals: " Tools & Features",
    SliderSubDitals: "React,Tailwind css,Gsap",
  },
  {
    id: "04",
    SliderImg: Slider1,
    SliderTitale: "Admin Dashbord",
    SliderSubTitale: "Love-Codir Platfrom ",
    SliderDitals: " Tools & Features",
    SliderSubDitals: "React,Tailwind css,Gsap",
  },
];

const MyWork = () => {
  return (
    <div className=" px-4 md:px-10 mt-10 md:mt-0">
      <h2 className=" text-4xl font-semibold">
        My <span className="text-primary">Work</span>{" "}
        
      </h2>


 <div >
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
        }}
      
         
       
        modules={[Pagination, Navigation]}
        
      >
        {MySlider.map((items,indx) => (
          

            <SwiperSlide key={indx}>
              <main className="flex flex-col md:flex-row gap-4  mt-6 justify-between  items-left md:items-center text-left py-8 px-10 md:px-16">
                <div className="flex  flex-row   gap-6">
                  <span className=" text-4xl md:text-6xl font-semibold text-gray-400">
                    {items.id}
                  </span>
                  <div className=" text-sm text-gray-600">
                    <h4 className=" text-primary text-xl font-medium">
                      {items.SliderTitale}
                    </h4>
                    <h5>{items.SliderSubTitale}</h5>
                    <h5 className="mt-4 uppercase">{items.SliderDitals}</h5>
                    <h5>{items.SliderSubDitals}</h5>
                  </div>
                </div>
                <div className="md:w-1/2 w-full">
                  <img
                    className="full rounded-xl"
                    src={items.SliderImg}
                    alt=""
                  />
                </div>
              </main>
            </SwiperSlide>
        
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default MyWork;
