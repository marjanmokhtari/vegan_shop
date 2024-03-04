"use client"
import Image from "next/image";
import './globals.css'
import Bg from '../app/assets/img/layer1.jpg'
import Bg2 from '../app/assets/img/layer-overlay.png'
import pic1 from '../app/assets/img/pic1.webp'
import pic2 from '../app/assets/img/pic2.webp'
import pic3 from '../app/assets/img/pic3.webp'
import Row_one from "./assets/row/row_one";
import Row_tow from "./assets/row/page";
import Row_three from "./assets/row/row3";
import Row_four from "./assets/row/row4";
import Row5 from "./assets/row/row5";
import Row6 from "./assets/row/row6";
import MyFooter from "./assets/row/row7";
export default function Home() {
  return (
    <>
      <section className=" w-full  absolute -z-20  top-0 h-[100vh]">
        <Image className=" w-full h-full  object-cover   " src={Bg}></Image>
      </section>
      <section className=" w-full absolute flex items-end h-[100vh] bottom-6 -z-10 ">
        <Image className=" w-full" src={Bg2}></Image>
      </section>
      <section className=" w-full flex flex-wrap   justify-center">
        <section className=" flex flex-wrap justify-center  w-full 2xl:container ">
          <h1 className=" w-full  flex justify-center py-5 -translate-y-4 capitalize text-3xl xl:text-6xl text-white">
            Vegan chocolote bars
          </h1>
          <section className=" flex  justify-center  w-full">
            <section className=" w-full justify-center text-center *:pt-20 flex *:w-[300px] *:px-5 " >
              <Image src={pic1} className=""></Image>
              <Image src={pic2} className=" hidden lg:flex"></Image>
              <Image src={pic3} className=" hidden lg:flex"></Image>
            </section>
          </section>
        </section>


      </section>
      <main className=" w-full  bg-[#233e2d] flex flex-wrap justify-center z-50 pt-10">
        <section className="2xl:container w-full flex flex-wrap ">
          <Row_one></Row_one>
          <Row_tow ></Row_tow>
          
        </section>
          <Row_three></Row_three>
          <section className=" 2xl:container w-full flex flex-wrap">
            <Row_four></Row_four>
          </section>
          <Row5></Row5>
          <Row6></Row6>
          <MyFooter></MyFooter>
          
      </main>
    </>
  );
}
