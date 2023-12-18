'use client'
import Image from 'next/image'
import { useState } from 'react';


const images = [
  "/img/1.png",
  "/img/2.png",
  "/img/3.png",
  "/img/4.jpg",
  "/img/5.jpg",
  "/img/6.jpg",
];

export default function Home() {

  const [currentIndex,setCurrentIndex] = useState(0);

  const [acalss, setAclass] = useState("left")


  const btnNext = ()=>{    
    setCurrentIndex((prevIndex)=>{
      if(prevIndex + 1 < images.length){
        return prevIndex + 1;
      }else{
        return 0;
      }
    })
  }

  const btnBack = ()=>{    
    setCurrentIndex((prevIndex)=>{
      if(prevIndex - 1 >= 0){
        return prevIndex - 1;
      }else{
        return images.length -1;
      }
    })
  }


  const handleActiv = ()=>{
    setAclass("")
  }

  return (
    <main className=''>
      <header className='px-4 bg-slate-800'>
        <ul className='flex [&>*]:p-2 text-xl select-none [&>*:hover]:bg-slate-600 text-white'>
          <li onClick={handleActiv}>sliders</li>
          <li>pop</li>
        </ul>
      </header>
      <div className="relative rounded-3xl overflow-hidden h-[300px]">

        <Image
          className={`block ${acalss} image`}
          src={images[currentIndex]}
          alt="image"
          width={1000}
          height={1000}
          sizes='100%'
        />

        <div className='absolute inset-0 flex justify-between'>
          <button className='p-4 basis-1/3 flex items-center' onClick={btnBack}>
            <span className='p-2 text-black text-sm sm:text-2xl bg-white rounded-2xl'>BACK</span>
          </button>
          <button className='p-4 basis-1/3 flex items-center justify-end' onClick={btnNext}>
            <span className='p-2 text-black text-sm sm:text-2xl bg-white rounded-2xl'>NEXT</span>
          </button>
        </div>
      </div>
    </main>
  )
}
