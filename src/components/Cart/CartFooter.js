import React from "react";
import MainButton from "../ui/buttons/MainButton/MainButton";
import { useNavigate } from "react-router-dom";
export default function CartFooter({ totalPrice }) {
  const navigate = useNavigate();
  return (
    <div className="output">
      <div className="row s-between wrap gap-20 up-case text-light text-main small-text">
        <span>Итог</span>
        <span>{totalPrice()} руб</span>
      </div>
      <MainButton onClick={() => navigate("/order")} type="button">
        Перейти к оплате
      </MainButton>
    </div>
  );
}
