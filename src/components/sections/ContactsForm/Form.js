import Input from "../../ui/inputs/Input/Input";
import AnimButton from "../../ui/buttons/AnimButton/AnimButton";
import mailIcon from "../../../assets/icons/mail.svg";
import FormWrapper from "../../FormWrapper/FormWrapper";
export default function Form() {
 
  return (
    <FormWrapper 
     formkey="contactsForm"
      
    
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
    </FormWrapper>
  );
}

// up to March)

// next js
// react + zustand / redux / mobX / reactQ
// js;
// git, gitHub,  
// tailwind
// vite, webpack
