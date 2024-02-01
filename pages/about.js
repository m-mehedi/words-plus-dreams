/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
// import { Autocomplete } from "@mui/material";
import { useState } from "react";

const About = () => {
  const [color, setColor] = useState("gray-900")
  const [opacity, setOpacity] = useState("0")
  const [hidden, setHidden] = useState("")
  return(
    
    <div className='dark:bg-gray-900 dark:text-gray-100 p-12 pb-20 md:pb-14 md:p-24 text-justify '>
      <div className='text-3xl text-center font-black dark:text-green-500 pb-8 '>About Us</div>
      
    <div className='py-4'>
      <p className='text-3xl font-bold dark:text-green-300'>About</p>
      <p className='text-[#595959] font-semibold pt-2 dark:text-gray-400'>Words and Dreams</p>
      <p className='pt-6'>I’ll admit it: I love communicating. Not necessarily talking or gossiping or nattering on about something. Nope. I love communicating ideas; whether in stories, blogs, books, or any of the other myriad other ways we humans have developed to entertain, frighten, and amuse. This is my new site, so, let’s play together.</p>
    </div>
    </div>
  )
    
};

export default About;
