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

    return (

        <section className=' w-full py-2  text-white '>
            <section className=' flex px-28 *:w-full flex-wrap'>
                <section className=' *:w-1/4 flex *:my-4 border-b '>
                    <span>PRODUCT</span>
                    <span>PRICE</span>
                    <span>QUANTITY</span>
                    <span>SUBTOTAL</span>
                </section>
                {cart && cart.map((val) => {
                    return (
                        <section className={myFont.className}>
                            <section className=' *:w-1/4 flex *:my-4 border-b myfont'>
                                <div className=' flex items-center'>
                                    <Image style={{ width: '60px' }} width={100} height={100} src={val.avatar}></Image>
                                    <span className=' text-xs px-2'>{val.name}</span>
                                </div>
                                <span>${val.price}.00</span>
                                <div className=' flex items-center *:border *:p-3'>
                                    <button onClick={() => incrementQuantity(val.id)}>+</button>
                                    <span>{val.quantity}</span>
                                    <button onClick={() => decrementQuantity(val.id)}>-</button>
                                </div>

                            </section>
                        </section>
                    )

                })}
            </section>

        </section>
    )
}
