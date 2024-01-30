"use client"
import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='m-2 flex flex-col gap-2 lg:flex  '>
      <div className='m-1'>
        <Image src={"/camp.jpg"} width={60} height={40} alt='camp_img'/>
      </div>
        <div className="bold-52 ">
            HiSAURABH'S FAVORITE
            
            TRAVEL PLACE
        </div>
        <br/>
        <div className=''>
        We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </div>
        <br/>
        <div className='flex'>
          {Array(5).fill(1).map((_,i)=>(
            <Image src="/starrating.jpg" height={30} width={30} alt='rating_star' key={i} />
          ))
          //this is used for maping ek photo 5 times
          }  
        </div>
        <div>
        198kExcellent Reviews
        </div>

       <div className='m-3 w-full'>
       <Button title={"Download App"} variant={"btn_green"}/>
       </div>
    </section>
  )
}

export default Hero