import React from "react";
import "./subscribe.css";
import mockup from "../../../assets/Mockup.png";
import AnimatedText from "../../scroll/TextAnimation";
import Input from "../../ui/inputs/Input/Input";
import AnimButton from "../../ui/buttons/AnimButton/AnimButton";
import mailIcon from "../../../assets/icons/mail.svg";
import { formStore } from "../../../stores/formStore";
export default function Subscribe() {
  const { updateFormData, validateFormData, clearErrors } = formStore();

  return (
    <section id="subscribe">
      <div className="container">
        <div className="row center-y">
          <div className="text-wrapper">
            <AnimatedText
              text={"подпишитесь на нашу рассылку"}
              as={"small-heading"}
              canter={false}
            />
            <p className="small-text text-main text-black up-case">
              получайте <b>скидки</b> и супер предложения
            </p>
            <form
              data-formkey="subscribeForm"
              action="#"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.target);
                const formDataObject = Object.fromEntries(fd.entries());
                clearErrors("subscribeForm");
                if (validateFormData("subscribeForm", formDataObject)) {
                  updateFormData("subscribeForm", formDataObject);
                }
              }}
            >
              <div className="row wrap gap-15">
                <Input
                  type="email"
                  name="email"
                  placeholder="Введите свой адрес электронной почты"
                />
                <AnimButton type="submit">
                  <img src={mailIcon} alt="mail" /> ПОДПИСАТЬСЯ
                </AnimButton>
              </div>
            </form>
          </div>

          <div className="mockup">
            <img src={mockup} alt="mobile-app" />
          </div>
        </div>
      </div>
    </section>
  );
}
