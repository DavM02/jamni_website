import { create } from "zustand";
import { userCartStore } from "./cartStore";
import loadData, { getLength } from "../db/loadData";
export const cartModalStore = create((set) => ({
  isCartOpen: false,
  addedProduct: "",
  cartRecommendations: [],
  loading: false,
  error: null,
  updateAddedProduct: (name) => set(() => ({ addedProduct: name })),
  resetAddedProduct: () => set(() => ({ addedProduct: "" })),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  getCartRecommendations: async () => {
    set({ loading: true, error: null });
    const dataLength = await getLength(["decor"]);
    if (dataLength) {
      const randomPage = Math.floor(
        Math.random() * Math.max(1, Math.floor(dataLength / 18))
      );
      try {
        const data = await loadData(["decor", randomPage, 14]);
        set({ cartRecommendations: data, loading: false });
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    }
  },
}));

userCartStore.subscribe(
  (state) => state.products,
  (products) => {
    // Only update addedProduct if a new product is added (not on quantity change)
    const latestProduct = products[products.length - 1];
    if (latestProduct && !latestProduct.updated) {
      cartModalStore.getState().updateAddedProduct(latestProduct.name);

      // Mark the product as updated to avoid resetting it on quantity change
      latestProduct.updated = true;

      // Reset addedProduct after 1.5 seconds
      setTimeout(() => {
        cartModalStore.getState().resetAddedProduct();
      }, 1500);
    }
  }
);
