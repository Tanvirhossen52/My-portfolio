import profile2 from '../assets/Profile2.png'

const Myprofile = () => {
  return (
     <div className=' w-full px-4 md:px-10  pt-20 '>
    
            <div className='flex flex-col md:flex-row  gap-6 md:gap-0 justify-between items-center  '>
                {/* Left side continer */}
                 <div className=' md:w-2/4 w-full' >
               <img src={profile2} className='w-md' alt="img"  /> 
            </div>
    
           
    
            {/* Right side continer */}
           
             <div className=' space-y-4  w-full md:w-2/4 '>
             <h3 className=' text-xl font-medium flex items-center gap-2  '><div className='w-6 h-0.5 bg-primary'></div>About</h3>
             <div>
                <h2 className=' font-Lora text-3xl md:text-4xl text-primary'>Who Am I </h2>
                 <p className='mt-4 text-md text-gray-600'>"I am a passionate Frontend Developer dedicated to building visually stunning and highly functional web applications. My expertise lies in creating seamless user experiences using React.js, Tailwind CSS, and modern JavaScript practices. I love turning complex problems into simple, beautiful, and intuitive designs."</p>
             </div>

             <div>
                <h2 className='  text-xl md:text-2xl font-semibold text-primary'>I Can Develop Anything You Want </h2>
                 <p className='mt-4 text-md text-gray-600'>"Whether it's a personal portfolio or a complex dashboard, I have the skills to bring your ideas to life. I specialize in building interactive UIs with GSAP for smooth animations and integrating Firebase for secure authentication and real-time data. I also ensure robust form validation for a bug-free experience."</p>
             </div>
             <div>
                <h2 className='text-xl md:text-2xl font-semibold text-primary'>I Can follow digital Trends </h2>
                 <p className='mt-4 text-md text-gray-600'>"I stay updated with the latest UI/UX trends to ensure your website looks modern and professional. From responsive layouts to implementing Dark Mode, I focus on delivering designs that are not only beautiful but also stay ahead of the competition."</p>
             </div>
             
               
    
            </div>
    
            </div>
    
            
          
        </div>
  )
}

export default Myprofile
