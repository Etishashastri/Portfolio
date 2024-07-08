import React, { useState } from 'react';
import pic  from "../../public/final.jpeg";
import { RiMenuSearchLine } from "react-icons/ri";
import { LuShieldClose } from "react-icons/lu";
import { Link } from 'react-scroll';
function Navbar() {
  const[menu,setMenu] = useState(false);
  const navItems=[
  {
    id:1,
    text:'Home'
  },
  /*} {
    id:2,
    text:'About'
  },*/
  {
    id:3,
    text:'Pojects'
  },
  {
    id:4,   
    text:'Skill Set'
  },
  {
    id:5,
    text:'Contact'
  },

  ]
  return (
    <>
    <div className="max-w-screen-3xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0">  
      <div className='flex justify-between  items-center h-16'>
        <div className=' flex space-x-2'>
          <img src={pic} className='h-12 w-12 rounded-full' alt=' ' />
          <h1 className='font-semibold text-3xl cursor-pointer text-black'>Etish<span className='text-pink-600 text-3xl'>a</span>
          <p className='text-sm' >Full Stack Developer</p>
          </h1>
        </div>
        {/* desktop nav bar*/}
        <div>
          <ul className=' hidden md:flex space-x-8' >
         {
          navItems.map(({id,text}) =>(
            <li className='hover:scale-125 duration-200 cursor-pointer ' key={id} >  
            <Link to={text}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass='active'>
               
 {text} </Link>
            </li>
          ))
         }
          </ul>
          <div onClick={()=>setMenu(!menu)} className='md:hidden'>  {menu?<LuShieldClose size={24}/> :<RiMenuSearchLine   size={24} />} </div>
          
        </div>
      </div>
        {/* mobile  nav bar*/}
        {
          menu &&(<div className='bg-white' >
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4  '>
           { navItems.map(({id,text}) =>(
            <li className='hover:scale-125 duration-200 cursor-pointer font-bold space-y-3 text-xl text-black' key={id} > 
            <Link 
            onClick={()=>setMenu(!menu)}
            to={text}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass='active'>
               
 {text} </Link>
            </li>
          ))}
            </ul>
          </div>
          )
        }
     
    </div>
    </>
  );
}

export default Navbar;
