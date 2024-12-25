import React from "react";
import Input from "../../ui/inputs/Input/Input";
import AnimButton from "../../ui/buttons/AnimButton/AnimButton";
import mailIcon from "../../../assets/icons/mail.svg";
import { formStore } from "../../../stores/formStore";
export default function Form() {
  const { updateFormData, validateFormData, clearErrors } = formStore();

  return (
    <form action="#"
      data-formkey="contactsForm"
      spellCheck={false}
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const formDataObject = Object.fromEntries(fd.entries());
        clearErrors("contactsForm");
        if (validateFormData("contactsForm", formDataObject)) {
          updateFormData("contactsForm", formDataObject);
        }
      }}
    >
      <div className="row gap-15">
        <div className="column gap-10">
          <Input type="text" placeholder="Имя" name="name" />
          <Input type="tel" placeholder="Телефон" name="phone" />
          <Input type="email" placeholder="Почта" name="email" />
        </div>
        <div className="column gap-10">
          <Input type="text" placeholder="Ссылка на сайт / соц. сети" name="social"/>
          <Input tag={"textarea"} placeholder="Сообщение" name="message"/>
        </div>
      </div>
      <AnimButton type="submit">
        <img src={mailIcon} alt="mail" /> отправить
      </AnimButton>
    </form>
  );
}

// up to March)

// next js
// react + zustand / redux / mobX / reactQ
// js;
// git, gitHub,  
// tailwind
// vite, webpack
