import { create } from 'zustand'

const useStore = create((set) => {

    if (typeof window !== 'undefined') {
        const storeCart = JSON.parse(localStorage.getItem('cart')) || []
        set({
            cart: storeCart,
        })

        return {
            cart: storeCart,
            AddToCart: (id, avatar, price, name,quantity) =>
                set((state) => {
                    const exist = state.cart.findIndex((item) => item.id === id);
                    if (exist !== -1) {
                        const updateCart = [...state.cart];
                        localStorage.setItem('cart', JSON.stringify(updateCart));
                        return {
                            cart: updateCart
                        };
                    }

                    const updateCart = [
                        ...state.cart,
                        {
                            id: id,
                            avatar: avatar,
                            price: price,
                            name: name,
                            quantity:quantity
                        }
                    ];

                    localStorage.setItem('cart', JSON.stringify(updateCart));
                    return {
                        cart: updateCart
                    };
                }),
            removeFromCart: (id) =>
                set((state) => {
                    const updatedCart = state.cart.filter((item) => item.id !== id);
                    localStorage.setItem("cart", JSON.stringify(updatedCart));
                    return { ...state, cart: updatedCart };
                })
        };

    }

});

export default useStore;
