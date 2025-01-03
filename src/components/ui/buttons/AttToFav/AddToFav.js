 

import { userFavStore } from "../../../../stores/favStore";
import { modalStore } from "../../../../stores/modalStore";
export default function AddToFav({data}) {
   
  const addToFav = userFavStore((state) => state.addProduct);
  const { toggleFav } = modalStore();

  function handleFav() {
   

    // const formData = new FormData(e.target);

    const newProduct = {
      catalog: data.catalog,
      id: data.id,
      product: data.product,
      image: data.images[0],
      name: data.name,
      collection: data.collection,
      price: data.price,
    };

    // for (let [key, value] of formData.entries()) {
    //   newProduct[key] = value;
    // }

    addToFav(newProduct);

    toggleFav();

    setTimeout(() => {
      toggleFav();
    }, 1500);
  }

  return (
    <div className="add-to-favorites" onClick={(e) => { e.stopPropagation(); handleFav()}}>
      <input type="checkbox" />
      <svg
        width="28"
        height="25"
        viewBox="-2 -1 30 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.000650381 6.49917C-0.0200806 5.03049 0.455348 3.59918 1.34726 2.44508C2.23918 1.29099 3.49338 0.484252 4.8997 0.160054C6.30602 -0.164144 7.77899 0.0139016 9.07178 0.664354C10.3646 1.31481 11.3986 2.39814 12.0006 3.73281C12.6041 2.39369 13.6424 1.30748 14.9404 0.65729C16.2384 0.00710175 17.7168 -0.167297 19.1263 0.163495C20.5358 0.494287 21.7903 1.31004 22.6782 2.47323C23.5661 3.63642 24.0332 5.0759 24.0006 6.54901C23.9291 8.42848 23.2881 10.2393 22.1658 11.7328C21.0431 13.2871 19.7227 14.6825 18.2392 15.8823C16.3827 17.4018 14.3879 18.737 12.282 19.8699L12.0006 19.9322L11.7193 19.7827C9.61342 18.6498 7.61863 17.3146 5.76212 15.7951C4.2786 14.5952 2.95817 13.1998 1.83551 11.6456C0.720273 10.1624 0.0797062 8.36573 0.000650381 6.49917Z"
          stroke="black"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
