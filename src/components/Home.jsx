import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { ReactTyped} from "react-typed";
import pic1 from "../../public/profile5.png";


function Home() {
  return (
    <>
    <div name="Home" className='max-w-screen-3xl container mx-auto px-4 md:px-20 my-20'
    >
       <div className='flex flex-col md:flex-row'> 
       <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'> 
         <span className='text-xl '>Welcome to my Portfolio</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
        <h1> Hello,   </h1>
        {/*<span className='text-pink-700 font-extrabold'>Developer</span>*/}
       <div className='text-pink-600 font-extrabold '>
       <  ReactTyped
          
          strings={[" I am  a Developer" , "  I am Innovative", "  I am  Creative", " I am Driven"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
       </div>
        </div>
        <br />
        <p  className=' text-justify'>
         I am in my 4th year of Computer Science  Engineering at Ramdeobaba College of Engineering and Management. With strong skills in 
         coding, problem-solving, and project management, I combine technical expertise with a love for learning and a collaborative
          spirit. I'm excited about the endless possibilities for innovation in the tech industry.
         </p>
        <br />

        {/*Social media icons*/}
        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
        <div className='space-y-2'>
            <h1 className='font-bold '>Availbale on </h1>
           <ul className='flex space-x-5 '>
           <li>
            {" "}
            <FaLinkedin className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full' /></li>
            <li>
                <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"

                target="_blank">
                <FaTelegramPlane className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full' /></a></li>

            <li>
                <a href="https://www.instagram.com/"
                target="_blank">
                <FaSquareInstagram className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full' /></a></li>
           </ul>
        </div>
        
        <div className='space-y-2'>
            <h1 className='font-bold'>Currently Working  on </h1>
           <ul className='flex space-x-5 '>
           <li>
            {" "}
            <SiMongodb  className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full' /></li>
            <li>
                {" "}
                <SiExpress className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full' /></li>

            <li>
                {" "}
                <SiReact className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full' /></li>
                <li>
                    {" "}
                    <RiNodejsLine  className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full' />
                </li>
           </ul>
        </div>
        </div>
         </div>
        
       <div className='md:w-1/2 md:ml-48 md:mt-20 order-1'>
       <img src={pic1} className='rounded-xl w=[500px] md:h=[500px] ' alt="" />
       </div>
       </div>
    </div>
     <br />
     <br />
     <br />
    <hr style={{ 
  width: '80%',
  borderColor: 'black',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  height: '1px',
  margin: '0 auto'
}} />
<br />

    </>
  )
}

export default Home;
