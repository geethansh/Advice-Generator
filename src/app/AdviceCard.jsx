"use client";
import React, { useState } from "react";
import dice from './icon-dice.svg'
import pd from './pattern-divider-desktop.svg'
import Image from 'next/image';




const AdviceCard = () => {
  const [count, setCount] = useState(0);
  const [advice, setAdvice] = useState('');

  const fetchRandomAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center flex-col mt-52 relative">
        <div className="flex flex-col bg-bg-card items-center justify-center w-[34rem] h-[22rem] rounded-lg">
            <div className=" absolute top-1"><p className=" text-adv text-sm mb-16 mt-10 ">A D V I C E # {count}</p></div>
          
         <div><p className=" text-white text-28 ml-7 mr-7 justify-center text-center">"{advice}"</p></div> 
          <div className=" mt-24 mb-16 absolute bottom-3 ">
            <Image src={pd} alt="divider" width="52rem" height='20rem'/>

          </div>
        </div>

        <div className=" flex flex-row items-center absolute top-44 -bottom-96">
          <button
             onClick={()=>{fetchRandomAdvice(), setCount(count+1)}}
            className=" w-20 h-20 rounded-full mb-52 z-10 overflow-auto  bg-butn flex items-center justify-center"
          >
            <Image className='' src={dice} alt="dice" width={30} height={30}/>
          </button>
        </div>
      </div>
    </>
  );
};

export default AdviceCard;
