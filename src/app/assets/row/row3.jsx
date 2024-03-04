import React from 'react'
import Image from 'next/image'
import Pic1 from '../img/h4-img-1.jpg'
import Pic2 from '../img/h4-img-2.jpg'
import Pic3 from '../img/h4-img-3.jpg'
import Ic2 from '../img/h4-icon-2-x2.png'
import Ic3 from '../img/h4-icon-3-x2.png'
export default function Row3() {
  return (
    <section className=' w-full *:w-full '>
      <section className=' *:lg:w-1/2 *:w-full flex flex-wrap '>
        <section>
          <Image className=' h-full object-cover w-full' src={Pic1}></Image>
        </section>
        <section className=' flex justify-center content-center *:w-full flex-wrap py-24 lg:py-0  '>
          <section className=' w-full *:w-full flex flex-wrap lg:px-28 px-12'>
            <h6 className=' text-white lg:text-3xl'>BEST FROM MADAGASCAR</h6>
            <p className=' text-white py-5 '>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.</p>
            <div className=' cursor-pointer'>
              <span className=' text-[#A78957]  border border-[#A78957]  text-sm w-[180px] uppercase justify-center  flex py-2'>shop gift</span>
            </div>

          </section>
        </section>
      </section>
      <section className=' *:lg:w-1/2 *:w-full flex flex-wrap items-center '>
        <section className='  *:my-5 text-white px-10 lg:px-28  flex flex-wrap justify-center *:w-full py-24 lg:py-0 h-full w-full  content-center *:h-full'>
          <section className=' flex justify-center '>
            <figure >
              <Image src={Ic3}></Image>
            </figure>
            <div className=' px-5 *:w-2/3 *:lg:w-full  flex md:justify-center items-center'>
              <p className=''>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
            </div>
          </section>

          <section className=' flex justify-center'>
            <figure>
              <Image src={Ic2}></Image>
            </figure>
            <div className=' px-5 *:w-2/3 *:lg:w-full flex md:justify-center items-center'>
              <p className='' >
                Deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non

              </p>
            </div>
          </section>

          <section className=' flex justify-center'>
            <figure>
              <Image src={Ic3}></Image>
            </figure>
            <div className=' px-5 *:w-2/3 *:lg:w-full flex md:justify-center items-center'>
              <p className='' >Corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa</p>
            </div>
          </section>

        </section>
        <section className=' order-first lg:order-last'>
          <Image className=' h-full object-cover w-full' src={Pic2}></Image>
        </section>
      </section>
      <section className=' *:lg:w-1/2 *:w-full flex flex-wrap items-center'>
        <section>
          <Image className=' w-full h-full object-cover' src={Pic3}></Image>
        </section>
        <section className=' px-10 lg:px-28 py-14 md:py-0  '>
          <p className=' w-full text-white py-7 md:text-3xl text-xl '>MADE FROM FINEST INGREDIENTS BY BEST FRANCE CHOCOLATE MASTERS. DISCOVER ALL PRODUCTS.</p>
          <div className=' cursor-pointer'>
            <span className=' text-[#A78957]  border border-[#A78957]  text-sm w-[180px] uppercase justify-center  flex py-2'>shop gift</span>
          </div>
        </section>
      </section>
    </section>
  )
}
