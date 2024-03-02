import React from 'react'
import Image from 'next/image'
import Pic1 from '../img/h4-img-1.jpg'
export default function Row3() {
  return (
    <section className=' w-full  '>
      <section className=' *:md:w-1/2 *:w-full flex flex-wrap '>
        <section>
            <Image className=' h-full object-cover w-full' src={Pic1}></Image>
        </section>
        <section className=' flex justify-center content-center *:w-full flex-wrap py-14 '>
            <section className=' w-full *:w-full flex flex-wrap md:px-28 px-12'>
            <h6 className=' text-white text-3xl'>BEST FROM MADAGASCAR</h6>
            <p className=' text-white py-5'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.</p>
            <div className=' cursor-pointer'>
                <span className=' text-[#A78957]  border border-[#A78957]  text-sm w-[180px] uppercase justify-center py-3 flex'>shop gift</span>
            </div>

            </section>
        </section>
      </section>
      <section></section>
      <section></section>
    </section>
  )
}
