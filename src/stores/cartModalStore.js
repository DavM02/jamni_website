import { create } from "zustand";
import { userCartStore } from "./cartStore";

export const cartModalStore = create((set) => ({
    isCartOpen: false,
    addedProduct: '',  
    updateAddedProduct: (name) => set(() => ({ addedProduct: name })),  
    resetAddedProduct: () => set(() => ({ addedProduct: '' })),  
    toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));
 
userCartStore.subscribe(
    (state) => state.products,  
    (products) => {
        if (products.length > 0) {
      
            cartModalStore.getState().updateAddedProduct(products[products.length - 1].name);

    
            setTimeout(() => {
                cartModalStore.getState().resetAddedProduct();
            }, 500);
        }
    }
);
