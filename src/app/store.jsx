import { create } from 'zustand'

const useStore = create((set) => {
  
        const storeCart = JSON.parse(localStorage.getItem("cart")) || [];
        set({
            cart: storeCart,
        })
    
        return {
            cart: storeCart,
            AddToCart: (id, avatar, price, name) =>
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
                            name: name
                        }
                    ];
    
                    localStorage.setItem('cart', JSON.stringify(updateCart));
                    return {
                        cart: updateCart
                    };
                })
        };
    

   
});

export default useStore;
