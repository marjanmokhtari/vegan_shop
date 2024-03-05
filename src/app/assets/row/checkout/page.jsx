"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import useStore from '../../../store';
import '../../../globals.css'

import localFont from 'next/font/local';


const myFont = localFont({
    src: "../../font/Lato-Regular.ttf",
    display: "swap",
});



export default function page() {
    const [quntity, setQuntity] = useState(1)

    const cartState = useStore((state) => state);
    if (!cartState) {
        return null;
    }
    const { cart } = cartState;



    const decrementQuantity = (id) => {
        useStore.setState((state) => {
            const updatedCart = state.cart.map((item) => {
                if (item.id === id && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
            return { cart: updatedCart };
        });
    };
    const incrementQuantity = (id) => {
        useStore.setState((state) => {
            const updatedCart = state.cart.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            return { cart: updatedCart };
        });
    };

    const calculate_subtotal = (price, qty) => {
        return price * qty

    }

    return (

        <section className=' w-full py-2  text-white '>
            <section className=' flex md:px-28 px-12 *:w-full flex-wrap'>
                <section className=' *:md:w-1/4 *:w-1/2 flex *:my-4 border-b '>
                    <span>PRODUCT</span>
                    <span className=' hidden md:flex'>PRICE</span>
                    <span>QUANTITY</span>
                    <span className=' hidden md:flex'>SUBTOTAL</span>
                </section>
                {cart && cart.map((val) => {
                    return (
                        <section className={myFont.className}>
                            <section className=' *:md:w-1/4 *:w-full flex *:my-4 border-b myfont'>
                                <div className=' flex items-center'>
                                    <Image style={{ width: '60px' }} width={100} height={100} src={val.avatar}></Image>
                                    <span className=' text-xs px-2'>{val.name}</span>
                                </div>
                                <span className=' hidden md:flex'>${val.price}.00</span>
                                <div className=' flex items-center *:border *:p-3'>
                                    <button onClick={() => incrementQuantity(val.id)}>+</button>
                                    <span>{val.quantity}</span>
                                    <button onClick={() => decrementQuantity(val.id)}>-</button>
                                </div>
                                <span className=' md:flex items-center hidden'>${calculate_subtotal(val.price, val.quantity)}.00</span>

                            </section>
                        </section>
                    )

                })}
                <section className=' w-full *:md:w-1/2 *:w-full flex flex-wrap justify-between my-10'>
                    <div className=' flex w-full'>
                        <input placeholder='coupon code' type="text" className=' outline-none border-b bg-transparent py-2 ' />
                        <div className=' mx-2 bg-[#A78957] w-[200px] py-2 flex items-center justify-center uppercase cursor-pointer text-sm'>
                            <span>applay coupon</span>
                        </div>
                    </div>
                    
                </section>
            </section>



        </section>
    )
}
