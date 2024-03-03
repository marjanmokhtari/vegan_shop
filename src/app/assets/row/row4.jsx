import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image';
import Img1 from '../img/h4-icon-5-x2.png'
import Img2 from '../img/h4-icon-6-x2-1.png'
import Img3 from '../img/h4-icon-4-x2.png'
const xfont = localFont({
    src: "../font/DancingScript-Regular.ttf",
    display: "swap",
});
export default function row4() {
    return (
        <section className=' w-full py-10  my-20'>
            <section className=' w-full flex justify-center '>
                <h5 className=' text-white lg:text-4xl text-3xl relative'>FINEST INGREDIENTS FROM
                    <div className={xfont.className} ><h6 className='text-[#d1b17b] absolute -bottom-5 right-0 rotate-3'>Madagascar</h6></div>
                </h5>

            </section>
            <section className=' mt-20'>
                <section className=' w-full *:lg:w-1/3 *:w-full *: flex flex-wrap justify-evenly text-white '>
                    <div className=' flex justify-center flex-wrap my-5'>
                        <figure>
                            <Image src={Img3} className=' w-[200px]'></Image>
                        </figure>
                        <span className=' w-full flex justify-center  text-xl my-3'>Coconut</span>
                        <p className=' w-2/3 text-center py-2'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum </p>
                    </div>
                    <div className=' flex justify-center flex-wrap my-5'>
                        <figure>
                            <Image src={Img2} className=' w-[200px]'></Image>
                        </figure>
                        <span className=' w-full flex justify-center  text-xl my-3'>Cocoa</span>
                        <p className=' w-2/3 text-center py-2'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum </p>
                    </div>
                    <div className=' flex justify-center flex-wrap my-5'>
                        <figure>
                            <Image src={Img1} className=' w-[200px]'></Image>
                        </figure>
                        <span className=' w-full flex justify-center  text-xl my-3'>Almond</span>
                        <p className=' w-2/3 text-center py-2'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum </p>
                    </div>
                </section>
            </section>
        </section>
    )
}
