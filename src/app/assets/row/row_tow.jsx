"use client"
import React, { useEffect, useState } from 'react'
import localFont from 'next/font/local'
import Image from 'next/image';
import { FiPlus } from "react-icons/fi";
import { PiHeartStraightLight } from "react-icons/pi";
import useStore from '../../store';
const myFont = localFont({
  src: "../font/DancingScript-Regular.ttf",
  display: "swap",
});
import '../../globals.css'

export default function row_tow() {

  return (

    <section className=' w-full mb-32 '>
      <section className='my-10 flex justify-center flex-wrap '>
        <h6 className=' text-4xl font-bold text-white -tracking-tighter relative'>CHOCOLATE BARSE
          <section className={myFont.className}>
            <span className='text-[#d1b17b] font-normal text-4xl absolute -bottom-8 tracking-normal -right-5 uppercase'>enjoy</span>
          </section>
        </h6>
        <Ftch_data></Ftch_data>
      </section>
    </section>

  )
}

function Ftch_data() {
  const [mydata, SetMydata] = useState([])


  const cartState = useStore((state) => state);
  if (!cartState) {
    return null;
  }
  const { cart, AddToCart } = cartState;



  useEffect(() => {
    async function fetchData() {
      let x = await fetch('https://65cdd5b0c715428e8b3f363d.mockapi.io/chocolot ')
      let y = await x.json()
      SetMydata(y)

    }
    fetchData()
  }, [])


  function Addcart(id, avatar, price, name) {
    AddToCart(id, avatar, price, name)

  }
  

  return (
    <section className=' w-full mt-20 flex justify-center'>
      <section className='w-full lg:mx-28 mx-8 *:flex *:w-1/2 flex-wrap *:px-2 flex *:lg:w-1/4 *:my-7  '>
        {mydata && mydata.map((val) => {
          return (
            <section className=' w-full  flex flex-wrap  justify-center text-white *:w-full *:text-center'>
              <figure className=' relative myhover mx-2'>
                <Image width={1000} height={1000} src={val.avatar} alt="" style={{width:"100%",height:"100%"}} />
                <div className=' absolute top-[50%]  left-[50%] text-3xl myicon flex overflow-hidden z-20 p-3'>
                  <FiPlus onClick={() => Addcart(val.id, val.avatar, val.price, val.name)} className='oneicon bg-[#a78957] border text-3xl mx-1 p-1'></FiPlus>
                  <PiHeartStraightLight className='towicon bg-[#a78957] border mx-1 p-1  text-3xl' />
                </div>
              </figure>
              <h6 className=' mt-4 uppercase'>{val.name}</h6>
              <span className=' my-1'>{val.Category}</span>
              <span className=' '>${val.price}.00</span>
            </section>
          )
        })}
      </section>

    </section>
  )
}