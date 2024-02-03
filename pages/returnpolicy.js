/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
// import { Autocomplete } from "@mui/material";
import { useState } from "react";

const Returnpolicy = () => {
  const [color, setColor] = useState("gray-900")
  const [opacity, setOpacity] = useState("0")
  const [hidden, setHidden] = useState("")
  return(
    
    <div className='dark:bg-gray-900 dark:text-gray-100 p-12 pb-20 md:pb-14 md:p-24 text-justify '>
      <div className='text-3xl text-center font-black dark:text-green-500 pb-8 '>Return Policy</div>
      
    
    <div className='text-2xl text-center font-bold py-8 text-gray-600 dark:text-gray-300 '> For returns, please see <a href="https://amazon.com/">Amazon.</a>
    </div>
    <div>
    &nbsp;
    </div>
    <div>
    &nbsp;
    </div>
    <div>
    &nbsp;
    </div>
    <div>
    &nbsp;
    <br></br>

    &nbsp;
    </div>
    <div>
    &nbsp;
    </div>
    <div>
    &nbsp;
    </div>
    <div>
    &nbsp;
    </div>
    <div>
    &nbsp;
    <br></br>

    &nbsp;
    </div>
    </div>
  )
    
};

export default Returnpolicy;
