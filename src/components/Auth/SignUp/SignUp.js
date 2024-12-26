import AnimButton from "../../ui/buttons/AnimButton/AnimButton";
import Input from "../../ui/inputs/Input/Input";
import CloseButton from "../CloseButton";
import FormWrapper from "../../FormWrapper/FormWrapper"; 
export default function SignUp({ setAuth }) {
   return (
    <FormWrapper formkey={"signinForm"}>
      <div className="text-center">
        <span className="form-heading text-heading text-black up-case">
          регистрация
        </span>{" "}
      </div>
      <Input type="email" placeholder="E-mail*" name="email" />
      <p className="xxxsmall-text text-main text-gray">
        Пароль будет отправлен на указанный адрес электронной почты
      </p>
      <AnimButton type="submit">войти</AnimButton>
      <p className="xxxsmall-text text-main text-gray">
        У вас уже есть профиль?
        <span onClick={() => setAuth("sign-in")}> Войти</span>
      </p>
      <CloseButton setAuth={setAuth} />
    </FormWrapper>
  );
}
