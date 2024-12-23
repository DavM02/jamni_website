import { MainContext } from "../../../context/MainContext";
import CartItems from "../../Cart/CartItems";
import "./order.css";
import { useContext, useState } from "react";
import PromoCode from "./PromoCode";
import Input from "../../ui/inputs/Input/Input";
import AnimButton from "../../ui/buttons/AnimButton/AnimButton";
import Selection from "../../ui/inputs/Selection/Selection";
import arrowLeft from "../../../assets/icons/arrow-left.svg";
import Checkbox from "../../ui/inputs/Checkbox/Checkbox";
import SmoothAppearance from "../../ui/SmoothAppearance";
import { AnimatePresence } from "framer-motion";
export default function Order() {
  const { scrollbarAccess } = useContext(MainContext);
  const [isChecked, setIsChecked] = useState(false);
  function allowScroll() {
    scrollbarAccess.current.updatePluginOptions("overflow", { open: false });
  }

  function disableScroll() {
    scrollbarAccess.current.updatePluginOptions("overflow", { open: true });
  }
  return (
    <section id="order">
      <div className="container">
        <div className="section-layout">
          <div>
            <div className="row gap-5 wrap xxxsmall-text text-main text-gray up-case">
              <span>корзина</span>

              <span>/&nbsp;&nbsp;информация</span>

              <span>/&nbsp;&nbsp;доставка</span>

              <span>/&nbsp;&nbsp;оплата</span>
            </div>
            <SmoothAppearance>
              <div className="form-output">
                <div className="row center-y s-between wrap">
                  <div className="row center-y wrap gap-20">
                    <span className="xxsmall-text text-main text-black-secondary up-case">
                      <b> Контакт</b>
                    </span>
                    <span className="xsmall-text text-main text-black">
                      annakonstantiova@gmail.com
                    </span>
                  </div>
                  <span className="xxsmall-text text-main text-gray">
                    изменить
                  </span>
                </div>
                <div className="row center-y s-between wrap">
                  <div className="row center-y wrap gap-20">
                    <span className="xxsmall-text text-main text-black-secondary up-case">
                      <b>адрес</b>
                    </span>
                    <span className="xsmall-text text-main text-black">
                      Борисовское шоссе 20 / 60, 105062, Москава, Россия
                    </span>
                  </div>
                  <span className="xxsmall-text text-main text-gray">
                    изменить
                  </span>
                </div>
              </div>
              <form className="form-delivery">
                <span className="text-main xsmall-text text-black-secondary up-case">
                  способ доставки
                </span>
                <div className="row center-y gap-20">
                  <Checkbox
                    checked={isChecked === "самовывоз"}
                    onChange={() =>
                      setIsChecked((prev) =>
                        prev === "самовывоз" ? "курьер" : "самовывоз"
                      )
                    }
                    id="pickup"
                    label={true}
                    name="доставка"
                    value={"самовывоз"}
                  >
                    самовывоз (Москва, м. Ботанический сад, Сельскохозяйственная
                    уд., д. 12А, стр. 6.)
                  </Checkbox>
                </div>
                <div className="row center-y gap-20">
                  <Checkbox
                    checked={isChecked === "курьер"}
                    onChange={() =>
                      setIsChecked((prev) =>
                        prev === "курьер" ? "самовывоз" : "курьер"
                      )
                    }
                    id="delivery"
                    label={true}
                    name="доставка"
                    value={"курьер"}
                  >
                    курьер
                  </Checkbox>
                </div>
                <AnimButton type="submit">перейти к оплате</AnimButton>
              </form>
              <div className="row center-x">
                <button
                  type="button"
                  className="row center-y gap-15 xsmall-text text-main text-black"
                >
                  <img src={arrowLeft} alt="arrow-left" />
                  Вернуться к информации
                </button>
              </div>
            </SmoothAppearance>
            <SmoothAppearance>
              <form
                spellCheck={false}
                className="form-info text-black-secondary"
                action="#"
              >
                <div className="row s-between">
                  <span className="text-main xsmall-text up-case">Контакт</span>
                  <p className="text-main xxsmall-text text-gray">
                    У Вас уже есть аккаунт?{" "}
                    <span className="text-black">Авторизоваться</span>
                  </p>
                </div>
                <Input type="email" placeholder="Электронная почта" />
                <div className="row gap-10">
                  <Checkbox id="subscribe" label={true} name="подписка">
                    Присылайте мне электронные письма с новостями и
                    предложениями
                  </Checkbox>
                </div>
                <span className="text-main xsmall-text up-case">
                  Адрес доставки
                </span>
                <Selection
                  name="address"
                  data={["Россия", "Казахстан", "Беларусь", "другая страна"]}
                />
                <div className="row wrap gap-20">
                  <Input type="text" placeholder="Имя" name="имя" />
                  <Input type="text" placeholder="Фамилия" name="фамилия" />
                  <Input type="text" placeholder="Город" name="город" />
                  <Input type="number" placeholder="Индекс" name="индекс" />
                  <Input type="text" placeholder="Улица" name="улица" />
                  <Input
                    type="number"
                    placeholder="Номер дома"
                    name="номер дома"
                  />
                </div>
                <Input type="tel" placeholder="Телефон" name="телефон" />
                <div className="row gap-10">
                  <Checkbox id="save" label={true} name="сохранить">
                    Сохраните эту информацию для использования в следующий раз
                  </Checkbox>
                </div>
                <AnimButton type="submit">продолжить</AnimButton>
              </form>
            </SmoothAppearance>
          </div>
          <div>
            <h5 className="text-black-secondary">итоговая сумма</h5>
            <div
              onMouseEnter={() => disableScroll()}
              onMouseLeave={() => allowScroll()}
              onTouchStart={() => disableScroll()}
              onTouchEnd={() => allowScroll()}
              onTouchCancel={() => allowScroll()}
            >
              <CartItems />
            </div>
            <PromoCode />
          </div>
        </div>
      </div>
    </section>
  );
}
