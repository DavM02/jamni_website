import React from "react";
import Input from "../../ui/inputs/Input/Input";
import AnimButton from "../../ui/buttons/AnimButton/AnimButton";
import mailIcon from "../../../assets/icons/mail.svg";

export default function Form() {
  return (
    <form action="#">
      <div className="row gap-15">
        <div className="column gap-10">
          <Input type="text" placeholder="Имя" />
          <Input type="tel" placeholder="Телефон" />
          <Input type="email" placeholder="Почта" />
        </div>
        <div className="column gap-10">
          <Input type="text" placeholder="Ссылка на сайт / соц. сети" />
          <Input tag={"textarea"} placeholder="Сообщение" />
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
// git, gitHub, gitLab
// tailwind
// vite, webpack
