"use client"
import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='m-2 flex flex-col gap-2 lg:flex-row xl:flex-row lg:py-28 lg:m-8 '>
      <div className=''>
      <div className='m-1'>
        <Image src={"/camp.jpg"} width={60} height={40} alt='camp_img'/>
      </div>
        <div className="bold-52 ">
            HiSAURABH'S FAVORITE PLACE?
        </div>
        <br/>
        <div className=''>
        We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </div>
        <br/>
        <div className='flex justify-center'>
          {Array(5).fill(1).map((_,i)=>(
            <Image src="/starrating.jpg" height={30} width={30} alt='rating_star' key={i} />
          ))
          //this is used for maping ek photo 5 times
          }  
        </div>
        <div className='text-center'>
        198kExcellent Reviews
        </div>
        <div className='m-3 w-full flex justify-center'>
       <Button title={"Download App"} variant={"btn_green"}/>
       </div>
      </div>
       
       {/* rhs for lg  */}
      <div>
    
       <div className='flex justify-center relative text-black'>
        <Image src="/distance.png" height={380} width={320} alt='balck'/>
      <div className='absolute flex flex-col m-2'>
    
        <h2 className='absolute  font-bold  p-2'>Varanasi</h2>
      </div>
      <div className='flex absolute text-gray-20 mb-2'>
        <h2>Distance</h2>
        <h1>25KM</h1>
      </div>
       </div>
      </div>
    </div>
  )
}

export default Hero