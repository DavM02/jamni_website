import { create } from "zustand";
import loadData, { getLength } from "../db/loadData";
export const modalStore = create((set) => ({
  isCartOpen: false,
  isAdded: false,
  cartRecommendations: [],
  loading: false,
  error: null,
  auth: null,
  setAuth: (val) => set((state) => ({
    auth: val
  })),
  toggleAdded: () => set((state) => ({ isAdded: !state.isAdded })),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  getCartRecommendations: () => {
    set({ loading: true, error: null });

    getLength(["decor"])
      .then((dataLength) => {
        const randomPage = Math.floor(
          Math.random() * Math.max(1, Math.floor(dataLength / 18))
        );
        console.log(dataLength)
        return loadData(["decor", randomPage, 14]);
      })
      .then((data) => {
        console.log(data)
        set({ cartRecommendations: data, loading: false });
      })
      .catch((error) => {
        set({ error: error.message, loading: false });
      });
  }

}));

