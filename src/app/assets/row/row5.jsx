import React from 'react'

import localFont from 'next/font/local'
const myFont = localFont({
    src: "../font/DancingScript-Regular.ttf",
    display: "swap",
});


export default function row5() {
    return (
        <section className=' w-full flex flex-wrap py-10  bg-[#1c3526] *:xl:w-1/2 *:w-full *:lg:px-28 *:px-12'>
            <section>
                <section className={myFont.className}>
                    <section className=' w-full'>
                        <h6 className=' text-[#d1b17b] text-7xl'>Subscribe</h6>
                    </section>
                </section>
                <section>
                    <p className=' w-full md:w-full text-white py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </section>
            </section>
            <section>
                <section className=' w-full  flex '>
                    <input type="text" placeholder='Enter your email addres here' className=' placeholder:text-white placeholder:text-lg  caret-white w-3/4 bg-transparent py-2 border-t-0 border-r-0 border-l-0 border-b-1 border-b border outline-none ' />
                    <span className=' flex items-center text-[#d1b17b] uppercase cursor-pointer'>send</span>
                </section>
                <section>
                    <p className=' text-white text-sm py-3'>*Lorem ipsum dolor sit amet consensus at vero eos et.</p>
                </section>
            </section>
        </section>
    )
}
