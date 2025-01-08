import Dimensions from "./Dimensions/Dimensions";
import Options from "./Options/Options";
import AddToFav from "../../ui/buttons/AddToFav/AddToFav";
import MainButton from "../../ui/buttons/MainButton/MainButton";
  import useProductActions from "../../../hooks/useProductActions";
  import { useRef } from "react";
export default function Form({ data }) {
 
  const {handleAddToCart} = useProductActions()

  const dimensions = data && data.characteristics[0].dimensions;
  const options = data && data.characteristics[1].options;
 const formRef = useRef(null)
  return (
    <form ref={formRef} action="#" onSubmit={(e) =>  handleAddToCart(e)}>
      <div className="row wrap gap-20">
        <Dimensions dimensions={dimensions} />
        <Options options={options} colors={data.colors} />
      </div>
      <div className="submit-wrapper">
        <MainButton type={"submit"}>добавить в корзину</MainButton>
        <div className="row center-y center-x gap-10">
          <AddToFav data={data} formRef={formRef} />
          <span className="text-main xxsmall-text text-black-secondary">
            В избранное
          </span>
        </div>
      </div>
    </form>
  );
}
