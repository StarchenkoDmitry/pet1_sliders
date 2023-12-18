'use client'

import { useState } from 'react';
import Image from 'next/image'

import images from './ImageList';
import Slider1 from './components/Slider1';


export default function Home() {

  const [currentIndex,setCurrentIndex] = useState(0);

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

  const prevImageIndex = images[currentIndex >0 ? currentIndex-1 : images.length-1];
  const nextImageIndex = images[currentIndex + 1 <images.length ? currentIndex+1 : 0];

  return (
    <main className='bg-slate-300 min-h-screen'>
      <header className='px-4 flex justify-between bg-slate-900'>
        <div className='flex flex-1 justify-between m-auto max-w-[var(--max-width)]'>
          <ul className='flex [&>*]:p-2 text-xl select-none [&>*:hover]:bg-slate-600 text-white'>
            <li>sliders</li>
            <li>pop</li>
          </ul>
        </div>
      </header>

      <div className="m-auto max-w-[var(--max-width)]">
        <p className='m-2 mt-4 p-2 bg-slate-500 text-white rounded-2xl'>
          В данном примере я создал кастомный slider без использования сторонних библиотек.
        </p>

        <div className='m-2 bg-slate-600 rounded-2xl'>
          <p className='px-2 pt-2 text-white'>№1 протостой slider</p>
          <Slider1/>
        </div>



      </div>

      <footer>

      </footer>
    </main>
  )
}
