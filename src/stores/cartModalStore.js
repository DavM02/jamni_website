import { create } from "zustand";
import loadData, { getLength } from "../db/loadData";
export const cartModalStore = create((set) => ({
  isCartOpen: false,
  isAdded: false,
  cartRecommendations: [],
  loading: false,
  error: null,
  toggleAdded: () => set((state) => ({ isAdded: !state.isAdded })),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  getCartRecommendations: async () => {
    set({ loading: true, error: null });

    try {
       const dataLength = await getLength(["decor"]);
   
      if (dataLength) {
         const randomPage = Math.floor(
          Math.random() * Math.max(1, Math.floor(dataLength / 18))
        );

         const data = await loadData(["decor", randomPage, 14]);
        console.log(data)
         set({ cartRecommendations: data, loading: false });
      } else {
        set({ cartRecommendations: [], loading: false });
      }
    } catch (error) {
       set({ error: error.message, loading: false });
    }
  }

}));

 