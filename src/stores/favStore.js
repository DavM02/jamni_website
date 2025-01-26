import { create } from "zustand";
import { persist } from "zustand/middleware";

export const userFavStore = create(
    persist(
        (set, get) => ({
            products: [],

            addProduct: (item) => {
                set((state) => {
                    const productExists = state.products.some(
                        (el) => el.id === item.id
                    );

                    if (!productExists) {
                        const updatedProducts = [
                            ...state.products,
                            { ...item, quantity: 1 },
                        ];
                        return { products: updatedProducts };
                    } else {
                        const updatedProducts = state.products.map((el) =>
                            el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el
                        );
                        return { products: updatedProducts };
                    }
                });
            },

            removeProduct: (itemId) => {
                set((state) => {
                    const updatedProducts = state.products.filter(
                        (item) => item.id !== itemId
                    );
                    return { products: updatedProducts };
                });
            },

            increaseQuantity: (itemId) => {
                set((state) => {
                    const updatedProducts = state.products.map((el) =>
                        el.id === itemId ? { ...el, quantity: el.quantity + 1 } : el
                    );
                    return { products: updatedProducts };
                });
            },

            decreaseQuantity: (itemId, quantity) => {
                set((state) => {
                    let updatedProducts = []
                    if (quantity === 1) {
                        updatedProducts = state.products.filter(
                            (item) => item.id !== itemId
                        );
                    } else {
                        updatedProducts = state.products.map((el) =>
                            el.id === itemId
                                ? { ...el, quantity: Math.max(1, el.quantity - 1) }
                                : el
                        );
                    }
                    return { products: updatedProducts };
                });
            },


        }),
        {
            name: "fav-storage",
            getStorage: () => localStorage,
        }
    )
);
