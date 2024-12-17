import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";

export const userCartStore = create(
  subscribeWithSelector(
    persist(
      (set, get) => ({
        products: [],

        addProduct: (item) => {
          set((state) => {
            const productExists = state.products.some(
              (el) => el.id === item.id
            );

            if (!productExists) {
              // Add new product and mark it as 'not updated'
              const updatedProducts = [
                ...state.products,
                { ...item, quantity: 1, updated: false },
              ];
              return { products: updatedProducts };
            } else {
              // Update quantity if product already exists
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

        decreaseQuantity: (itemId) => {
          set((state) => {
            const updatedProducts = state.products.map((el) =>
              el.id === itemId
                ? { ...el, quantity: Math.max(1, el.quantity - 1) }
                : el
            );
            return { products: updatedProducts };
          });
        },

        totalPrice: () => {
          return get()
            .products.reduce(
              (total, product) => total + product.price * product.quantity,
              0
            )
            .toLocaleString("ru-RU");
        },
      }),
      {
        name: "cart-storage",
        getStorage: () => localStorage,
      }
    )
  )
);
