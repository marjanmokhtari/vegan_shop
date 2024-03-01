import React from 'react'
import localFont from 'next/font/local'

const myFont = localFont({
  src: "../font/DancingScript-Regular.ttf",
  display: "swap",
});


export default function row_tow() {
  return (

    <section className=' w-full mb-32 '>
      <section className='my-10 flex justify-center '>
        <h6 className=' text-4xl font-bold text-white -tracking-tighter relative'>CHOCOLATE BARSE
          <section className={myFont.className}>
            <span className='text-[#d1b17b] font-normal text-4xl absolute -bottom-8 tracking-normal -right-5 uppercase'>enjoy</span>
          </section>
        </h6>

      </section>
    </section>

  )
}
