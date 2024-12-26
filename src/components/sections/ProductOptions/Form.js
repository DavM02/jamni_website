import Dimensions from "./Dimensions/Dimensions";
import Options from "./Options/Options";
import AddToFav from "../../ui/buttons/AttToFav/AddToFav";
import MainButton from "../../ui/buttons/MainButton/MainButton";
import { userCartStore } from "../../../stores/cartStore";
import { modalStore } from "../../../stores/modalStore";

export default function Form({ data, catalog }) {
  const addToCart = userCartStore((state) => state.addProduct);
  const { toggleAdded } = modalStore();
  const dimensions = data && data.characteristics[0].dimensions;
  const options = data && data.characteristics[1].options;

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newProduct = {
      catalog,
      id: data.id,
      product: data.product,
      image: data.images[0],
      name: data.name,
      collection: data.collection,
      price: data.price,
    };

    for (let [key, value] of formData.entries()) {
      newProduct[key] = value;
    }

    addToCart(newProduct);

    toggleAdded();

    setTimeout(() => {
      toggleAdded();
    }, 1500);
  }

  return (
    <form action="#" onSubmit={(e) => handleSubmit(e)}>
      <div className="row wrap gap-20">
        <Dimensions dimensions={dimensions} />
        <Options options={options} colors={data.colors} />
      </div>
      <div className="submit-wrapper">
        <MainButton type={"submit"}>добавить в корзину</MainButton>
        <div className="row center-y center-x gap-10">
          <AddToFav />
          <span className="text-main xxsmall-text text-black-secondary">
            В избранное
          </span>
        </div>
      </div>
    </form>
  );
}
