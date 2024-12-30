import React from "react";
import MainButton from "../../ui/buttons/MainButton/MainButton";

export default function ConfigSummary({ totalPrice, onAddToCart }) {
    return (
        <div className="output column center-y">
            <span className="text-main small-text text-black up-case">Итоговая сумма:</span>
            <span className="text-main small-text text-black">
                {totalPrice.toLocaleString("ru-RU")} руб
            </span>
            <MainButton onClick={onAddToCart} type="button">
                добавить в корзину
            </MainButton>
        </div>
    );
}
