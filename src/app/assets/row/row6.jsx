import React from 'react'
import img1 from '../img/h4-gallery-img-1-650x650.jpg'
import img2 from '../img/h4-gallery-img-2-650x650.jpg'
import img3 from '../img/h4-gallery-img-5.jpg'
import img4 from '../img/h4-gallery-img-6.jpg'
import img5 from '../img/h4-gallery-img-7.jpg'
import img6 from '../img/h4-gallery-img-3-650x650.jpg'
import img7 from '../img/h4-gallery-img-4-650x650.jpg'
import img8 from '../img/h4-gallery-img-8-650x650.jpg'
import img9 from '../img/h4-gallery-img-9.jpg'
import Image from 'next/image'
import '../../globals.css'
export default function row6() {
  return (
    <section className=' w-full'>
      <section className=' my-10 w-full *:md:w-1/3 *:w-full flex-wrap flex px-10 md:px-0'>
        <section className=' flex  *:p-3 flex-wrap *:w-full *:md:w-1/2'>
          <figure className=' w-full '>
            <Image src={img1} alt="" />
          </figure>
          <figure className='  '>
            <Image src={img2} alt="" />
          </figure>
          <figure >
            <Image src={img6} alt="" />
          </figure>
          <figure className=' '>
            <Image src={img7}></Image>
          </figure>
        </section>
        <section className=' w-full h-full'>
          <figure className=' w-full p-3'>
            <Image src={img3}></Image>
          </figure>
        </section>
        <section className=' flex  flex-wrap *:w-full *:md:w-1/2 *:p-3'>
          <figure >
            <Image src={img4}></Image>
          </figure>
          <figure >
            <Image src={img5}></Image>
          </figure>
          <figure >
            <Image src={img8}></Image>
          </figure>
          <figure >
            <Image src={img9}></Image>
          </figure>
        </section>
      </section>
    </section>
  )
}
