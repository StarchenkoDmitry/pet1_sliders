'use client'
import { useState } from 'react'
import Image from 'next/image'

import images from '../ImageList'


function Slider2() {
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
        <div className="relative flex justify-center overflow-hidden rounded-2xl h-[400px] border-4 bg-slate-100  border-slate-600">
            <Image
                className={`object-contain`}
                src={images[index]}
                alt="image"
                quality={50}
                width={1000}
                height={1000}
                sizes='100%'
            />
            <div className='absolute left-0 flex flex-col h-full inset-0'>
                <button className='flex-1 p-4 w-1/5 min-w-[4rem] group' onClick={handlerNext}>
                    <span className='block text-2xl bg-white rounded-full w-10 h-10 select-none group-hover:scale-125 group-active:scale-150 transition-all shadow-[0_0px_12px_6px_rgba(0,0,0,0.2)]'>^</span>
                </button>
                <button className='flex-1 p-4 w-1/5 min-w-[4rem] group' onClick={handlerBack}>
                    <span className='block text-2xl bg-white rounded-full w-10 h-10 select-none rotate-180 group-hover:scale-125 group-active:scale-150 transition-all shadow-[0_0px_12px_6px_rgba(0,0,0,0.2)]'>^</span>
                </button>
            </div>
        </div>
    )
}

export default Slider2
