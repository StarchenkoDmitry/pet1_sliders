'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import images from '../ImageList'


function Slider1() {    
    const [index,setIndex] = useState(0);

    const handlerNext = ()=>{    
        setIndex((prevIndex)=>{
            if(prevIndex + 1 < images.length){
            return prevIndex + 1;
            }else{
            return 0;
            }
        })
    }
    
    const handlerBack = ()=>{    
        setIndex((prevIndex)=>{
            if(prevIndex - 1 >= 0){
            return prevIndex - 1;
            }else{
            return images.length -1;
            }
        })
    }

    return (
        <div className="relative flex justify-center overflow-hidden rounded-2xl h-[350px] border-4 bg-slate-100  border-slate-600">
            <Image
                className={`object-contain`}
                src={images[index]}
                alt="image"
                width={1000}
                height={1000}
                sizes='10%'
            />
            <button className='absolute left-0 w-1/3 h-full flex items-center bob:hover:bg-gradient-to-r from-[rgba(0,0,0,0.8)]' onClick={handlerBack}>
                <span className='ml-4 p-2 text-sm sm:text-lg bg-white text-black rounded-xl shadow-md'>Back</span>
            </button>
            <button className='absolute right-0 w-1/3 h-full flex items-center justify-end bob:hover:bg-gradient-to-l from-[rgba(0,0,0,0.8)]' onClick={handlerNext}>
                <span className='mr-4 p-2 text-sm sm:text-lg bg-white text-black rounded-xl shadow-md'>Next</span>
            </button>
        </div>
    )
}

export default Slider1
