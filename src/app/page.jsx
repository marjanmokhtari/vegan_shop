"use client"
import Image from "next/image";
import './globals.css'
import Bg from '../app/assets/img/layer.webp'
import Bg2 from '../app/assets/img/layer-overlay.png'
import pic1 from '../app/assets/img/pic1.webp'

export default function Home() {
  return (
    <>
      <section className=" w-full  absolute -z-20  top-0 h-[100vh]">
        <Image className=" w-full h-full  object-cover   " src={Bg}></Image>
      </section>
      <section className=" w-full absolute flex items-end h-[100vh] bottom-0 -z-10 ">
        <Image className=" w-full" src={Bg2}></Image>
      </section>
      <main className=" w-full flex flex-wrap   justify-center">
        <section className=" flex flex-wrap justify-center  w-full 2xl:container ">
          <h1 className=" w-full  flex justify-center py-5 -translate-y-4 capitalize text-3xl xl:text-6xl text-white">
            Vegan chocolote bars
          </h1>
          <section className=" flex  justify-center  w-full ">
            <section className=" w-full justify-center text-center *:pt-20  flex *:w-[300px] *:px-5 " >
              <Image src={pic1} className=""></Image>
              <Image src={pic1} className=" hidden lg:flex"></Image>
              <Image src={pic1} className=" hidden lg:flex"></Image>
            </section>
          </section>
        </section>

        <main className=" w-full py-20 bg-[#233e2d] flex justify-center">
          <section className="  w-full 2xl:container">
            
          </section>
        </main>
       
      </main>
    </>
  );
}
