import React from "react";
import MainButton from "../ui/buttons/MainButton/MainButton";

export default function CartFooter({ totalPrice }) {
    return (
        <div className="output">
            <div className="row s-between wrap gap-20 up-case text-light text-main small-text">
                <span>Итог</span>
                <span>{totalPrice()} руб</span>
            </div>
            <MainButton type="button" text="Перейти к оплате" />
        </div>
    );
}
