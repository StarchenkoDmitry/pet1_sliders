'use client'

import Slider1 from './components/Slider1';
import Slider2 from './components/Slider2';


export default function Home() {
  return (
    <main className='flex flex-col min-h-screen bg-slate-300'>
      <header className='px-4 flex justify-between bg-slate-900'>
        <div className='flex flex-1 justify-between m-auto max-w-[var(--max-width)]'>
          <ul className='flex [&>*]:p-2 text-xl select-none [&>*:hover]:bg-slate-600 text-white  [&>li]:m-1 [&>li]:mr-0 '>
            <li className='bg-cyan-500'>Простые</li>
            <li className='bg-amber-300'>Стороние</li>
          </ul>
        </div>
      </header>

      <div className="mx-auto max-w-[var(--max-width)] flex flex-col flex-1">
        <p className='m-2 mt-4 p-2 bg-slate-500 text-white rounded-2xl'>
          В данном примере я создал кастомный slider без использования сторонних библиотек.
        </p>

        <div className='m-2 bg-slate-600 rounded-2xl'>
          <p className='px-2 pt-2 text-white'>№1 протостой slider</p>
          <Slider1/>
        </div>

        <div className='m-2 bg-slate-600 rounded-2xl'>
          <p className='px-2 pt-2 text-white'>№2 протостой slider с вертикальными кнопками</p>
          <Slider2/>
        </div>
      </div>


      <footer className='mt-4 p-4 h-16 bg-slate-400 bottom-0'>
        <span className='text-xl'>This is footer</span>
      </footer>

    </main>
  )
}
