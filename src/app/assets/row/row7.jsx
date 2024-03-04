import React from 'react'
import logofoot from '../img/default-footer-logo-x2-light (1).png'
import Image from 'next/image'
import localFont from 'next/font/local'
const myFont = localFont({
    src: "../font/DancingScript-Regular.ttf",
    display: "swap",
});

export default function row7() {
    return (
        <footer className=' w-full  bg-[#1c3526] flex justify-center flex-wrap '>
            <section className=' w-full 2xl:container mt-20 cursor-pointer '>
                <section className=' flex flex-wrap justify-center *:w-full *:flex *:justify-center py-5'>
                    <section >
                        <Image className='w-[140px] ' src={logofoot}></Image>
                    </section>
                    <section className={myFont.className}>
                        <h6 className=' text-[#d1b17b] text-4xl py-2'>World of chocolate</h6>
                    </section>
                </section>
                <section className=' flex flex-wrap *:w-full *:md:w-1/2 *:lg:w-1/4 text-[#dee2df] md:px-28 px-8 *:my-5 *:md:my-0 '>
                    <section>
                        <nav>
                            <ul className=' *:my-2'>
                                <li className=' text-xl'>Informations</li>
                                <li>Sestrasse 21, Zurich, Ch</li>
                                <li>avelina@example.com</li>
                                <li>+123 456 789</li>
                                <li>+123 456 780</li>
                            </ul>
                        </nav>
                    </section>
                    <section>
                        <nav>
                            <ul className=' *:my-2'>
                                <li className=' text-xl'>products</li>
                                <li>Vegan chocolates</li>
                                <li>Milk chocolates</li>
                                <li>Gift boxes</li>
                                <li>Truffles & Pralines</li>
                            </ul>
                        </nav>
                    </section>
                    <section>
                        <nav>
                            <ul className=' *:my-2'>
                                <li className=' text-xl'>Customer service</li>
                                <li>Payment & Delivery</li>
                                <li>Support</li>
                                <li>Frequently asked questions</li>
                                <li>Shipping & returning</li>
                            </ul>
                        </nav>
                    </section>
                    <section>
                        <nav>
                            <ul className=' *:my-2'>
                                <li className=' text-xl'>products</li>
                                <li>Vegan chocolates</li>
                                <li>Milk chocolates</li>
                                <li>Gift boxes</li>
                                <li>Truffles & Pralines</li>
                            </ul>
                        </nav>
                    </section>
                </section>
                <section className=' flex flex-wrap *:w-full *:md:w-1/2 text-[#dee2df] px-8 md:px-28 my-12 md:my-20'>
                    <section className=''>
                        <p className=' w-full text-lg capitalize'>Subscribe to our newsletter</p>
                        <div>
                            <input type="text" placeholder='Enter your email addres here' className=' placeholder:text-sm placeholder:text-[#dee2df]  caret-white w-3/4 bg-transparent py-2 border-t-0 border-r-0 border-l-0 border-b-1 border-b border outline-none ' />
                            <span className=' text-sm flex items-center text-[#d1b17b] uppercase cursor-pointer'>send</span>

                        </div>
                    </section>
                    <section>
                        <section className=' flex flex-wrap mt-10'>
                            <div className='w-full md:w-1/4'>
                                <h6 className=' text-xl capitalize'>follow us:</h6>
                            </div>
                            <div className='w-full md:w-3/4 *:uppercase *:pe-2  text-[#d1b17b]'>
                                <span>ig</span>
                                <span>fb</span>
                                <span>yt</span>
                                <span>in</span>
                            </div>
                        </section>
                        <section></section>
                    </section>
                </section>
              
            </section>
            <section className=' w-full py-6 border-t border-[#484239] flex justify-center *:capitalize text-[#dee2df] '>
                <h1>Developer by marjan mokhtari</h1>
            </section>
        </footer>
    )
}
