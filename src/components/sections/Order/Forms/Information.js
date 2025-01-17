import React, { useState } from "react";
import Input from "../../../ui/inputs/Input/Input";
import SmoothAppearance from "../../../ui/SmoothAppearance";
import Checkbox from "../../../ui/inputs/Checkbox/Checkbox";
import Selection from "../../../ui/inputs/Selection/Selection";
import AnimButton from "../../../ui/buttons/AnimButton/AnimButton";
import { formStore } from "../../../../stores/formStore";
import { modalStore } from "../../../../stores/modalStore";
export default function Information({ setActiveTab }) {
  const [subscribe, setSubscribe] = useState(false);
  const [saveInfo, setSaveInfo] = useState(false);
  const { clearErrors, forms, updateFormData, validateFormData } = formStore();
  function handleSubmit(e) {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    const fd = new FormData(e.target);
    const formDataObject = Object.fromEntries(fd.entries());
    clearErrors("infoForm");
    if (validateFormData("infoForm", formDataObject)) {
      updateFormData("infoForm", formDataObject);
      setActiveTab("delivery");
    }
  }
  const { setAuth } = modalStore()

  return (
    <SmoothAppearance blur={true}>
      <form
        onSubmit={(e) => handleSubmit(e)}
        spellCheck={false}
        className="form-info text-black-secondary"
        action="#"
        data-formkey="infoForm"
      >
        <div className="row center-y s-between">
          <span className="text-main xsmall-text up-case">Контакт</span>
          <p className="text-main xxsmall-text text-gray">
            У Вас уже есть аккаунт?{" "}
            <span className="text-black" onClick={() => setAuth('sign-in')}>Авторизоваться</span>
          </p>
        </div>
        <Input type="email" name="email" placeholder="Электронная почта" />
        <div className="row gap-10">
          <Checkbox
            checked={subscribe}
            onChange={() => setSubscribe((prev) => !prev)}
            label={true}
            name="subscribe"
            id="subscribe"
          >
            Присылайте мне электронные письма с новостями и предложениями
          </Checkbox>
        </div>
        <span className="text-main xsmall-text up-case">Адрес доставки</span>
        <Selection
          defaultValue={forms?.infoForm?.formData?.country}
          name="country"
          data={["Россия", "Казахстан", "Беларусь", "другая страна"]}
        />
        <div className="row wrap gap-20">
          <Input type="text" placeholder="Имя" name="name" />
          <Input type="text" placeholder="Фамилия" name="surname" />
          <Input type="text" placeholder="Город" name="city" />
          <Input type="number" placeholder="Индекс" name="index" />
          <Input type="text" placeholder="Улица" name="street" />
          <Input type="number" placeholder="Номер дома" name="homeAddress" />
        </div>
        <Input type="tel" placeholder="Телефон" name="phone" />
        <div className="row gap-10">
          <Checkbox
            label={true}
            checked={saveInfo}
            onChange={() => setSaveInfo((prev) => !prev)}
            name="save"
            id={"save"}
          >
            Сохраните эту информацию для использования в следующий раз
          </Checkbox>
        </div>
        <div className="line"></div>
        <AnimButton type="submit">продолжить</AnimButton>
      </form>
    </SmoothAppearance>
  );
}
