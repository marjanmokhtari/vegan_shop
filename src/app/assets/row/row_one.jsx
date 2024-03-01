import React from 'react'
import deco1 from '../img/h4-deco-img-1-x2 (1).webp'
import deco2 from '../img/h4-deco-img-1-x2.webp'
import Image from 'next/image'
import '../../globals.css'
export default function row_one() {
  return (
    <section className=' w-full flex justify-center my-32'>
        <section className=' my-10 bg-[#16301f] mx-7 relative text-sm md:w-2/3 md:mx-28  p-20 text-center text-white'>
            <p className=' leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis. Luctus venenatis lectus magna fringilla urna. Integer malesuada nunc vel risus commodo viverra. Turpis nunc eget lorem dolor. Aliquet nibh praesent tristique magna sit amet.</p>
            
            <Image src={deco2} className=' absolute w-[200px] myabs'></Image>
            <Image src={deco1} className=' absolute w-[200px] left-[50%] translate-x-[-50%] bottom-1 '></Image>
           
        </section>
      
    </section>
  )
}
