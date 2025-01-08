import React from "react";
import MainButton from "../../ui/buttons/MainButton/MainButton";
import useProductActions from "../../../hooks/useProductActions";
export default function ConfigSummary({ totalPrice, configuration }) {
 
    const { handleAddToCart} = useProductActions()
    return (
        <form action="#" onSubmit={(e) => handleAddToCart(e, configuration)} className="output column center-y">

            <span className="text-main small-text text-black up-case">Итоговая сумма:</span>
            <span className="text-main small-text text-black">
                {totalPrice.toLocaleString("ru-RU")} руб
            </span>
            <MainButton type="submit">
                добавить в корзину
            </MainButton>
        </form>
    );
}
