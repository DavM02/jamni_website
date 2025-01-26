import { create } from "zustand";
import loadData  from "../db/loadData";
export const modalStore = create((set) => ({
  isCartOpen: false,
  isAdded: false,
  isFav: false,
  cartRecommendations: [],
  loading: false,
  error: null,
  auth: null,
  showRecs: true,
  setShowRecs: (val) => set((state) => ({showRecs: val})),
  setAuth: (val) => set((state) => ({
    auth: val
  })),
  toggleAdded: () => set((state) => ({ isAdded: !state.isAdded })),
  toggleFav: () => set((state) => ({ isFav: !state.isFav })),

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  getCartRecommendations: () => {
    set({ loading: true, error: null });



    let catalogs = ['outdoor', 'frameless', 'curtains','beds', 'decor', "sofas", "poufs", "chairs", "armchairs"]

    let array = new Set([]);

    while (array.size !== 4) {
      array.add(catalogs[Math.min(8, Math.round(Math.random() * 8))]);
    }
  
   catalogs = Array.from(array);
 
    Promise.all(catalogs.map((catalog) => loadData([catalog, Math.min(1, Math.round(Math.random() * 4)), 3])))
      .then((data) => {
   
        const flatData = data.flat();
        console.log(flatData)
        set({ cartRecommendations: flatData, loading: false });
      })
      .catch((error) => {
        set({ error: error.message, loading: false });
      });
  }

}));

