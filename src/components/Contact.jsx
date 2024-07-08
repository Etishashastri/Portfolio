import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async(data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      message:data.message
    }

   try{
      axios.post("https://getform.io/f/apjmmepa",userInfo);
      toast.success("Your message has been sent");
   } catch(error){
    console.log(error);
    toast.error("Something went wrong,try again later")
   }

  };
  return (
   <>
   <div  name="Contact"
    className='max-w-screen-3xl container mx-auto px-4 md:px-20 my-16'>
      <div className='flex flex-col items-center'>
      <h1 className='text-3xl font-bold mb-4 underline'>Contact me</h1>
        <span className='  block mb-4'>Feel free to reach out </span></div>
        <div className='flex flex-col items-center justify-center mt-5 '>
      <form 
      onSubmit={handleSubmit(onSubmit)}
     // action="https://getform.io/f/apjmmepa"
     // method="POST"
      className='bg-slate-200  w-96  px-8 py-6 rounded-xl'>
        <h1 className=' text-xl font-semibold mb-4 '> Please Fill the form Below </h1>

      <div className='flex flex-col mb-4'>
        <label 
            className='block text-gray-700'
            >
            Full Name
        </label>
        <input
        {...register("name", { required: true })}
        className='shadow appearance-none border rounded-lg py-2 px-3  text-gray-700  leading-tight focus:outline-none focus: shadow-outline' 
            id='name'
            name="name"
            type='text'
            placeholder='Enter your full Name'
         />
         {errors.name && <span>This field is required</span>}
        </div>    
        
      <div className='flex flex-col mb-4'>
        <label 
            className='block text-gray-700'
            >
           Email address
        </label>
        <input 
         {...register("email", { required: true })}
        className='shadow appearance-none border rounded-lg py-2 px-3  text-gray-700  leading-tight focus:outline-none focus: shadow-outline' 
            id='name'
            name="email"
            type='text'
            placeholder='Enter your Email Address'
         />
          {errors.email && <span>This field is required</span>}
        </div>  
        <div className='flex flex-col mb-4'>
        <label 
            className='block text-gray-700'
            >
           Message
        </label>
        <textarea 
         {...register("message", { required: true })}
        className='shadow appearance-none border rounded-lg py-2 px-3  text-gray-700  leading-tight focus:outline-none focus: shadow-outline' 
            id='message'
            name="message"
            type='text'
            placeholder='Enter your query'
         />
          {errors.message && <span>This field is required</span>}
        </div>
        <div className='flex  justify-center text-l'>
           
        <button 
        type='submit'
        className=' bg-black text-white rounded-md px-3 py -2 hover:bg-slate-700 duration-300  '>Send</button>
        </div>
      </form>
     </div>
   </div>
   </>
  )
}

export default Contact
