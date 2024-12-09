import AnimButton from "../../ui/buttons/AnimButton/AnimButton";
import Input from "../../ui/inputs/Input/Input";
import CloseButton from "../CloseButton";
export default function SignIn({ setAuth }) {
  return (
    <form>
      <div className="text-center">
        <span className="form-heading text-heading text-black up-case">
          войти
        </span>
      </div>
      <Input type="email" placeholder="E-mail*" />
      <Input type="password" placeholder="Пароль" />
      <AnimButton type="submit">войти</AnimButton>
      <p className="xxxsmall-text text-main text-gray">
        У вас еще нет профиля?{" "}
        <span onClick={() => setAuth("sign-up")}>Зарегистрироваться</span>
      </p>
      <CloseButton setAuth={setAuth} />
    </form>
  );
}
