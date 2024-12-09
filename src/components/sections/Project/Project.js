import "./project.css";
import "./media.css";
import arrow from "../../../assets/icons/arrow-down.svg";
import img1 from "../../../assets/img_23.webp";
import img2 from "../../../assets/img_24.webp";
import AnimButton from "../../ui/buttons/AnimButton/AnimButton";
import logo from "../../../assets/logo.svg";

import mailIcon from "../../../assets/icons/mail.svg";
import Input from "../../ui/inputs/Input/Input";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Upload from "../../ui/inputs/Upload/Upload";
export default function Project() {
  return (
    <section id="project">
      <div className="container">
        <div className="row center-x">
          <div className="text-center">
            <h2>Воплотим ваш проект в уникальную мебель</h2>
            <p className="small-text text-main text-black up-case">
              Мы открыты к сотрудничеству и предложениям
            </p>
            <p className="xsmall-text text-main text-black">
              Команда Jamni продолжает работать с профессионалами! Работать с
              архитекторами, дизайнерами и уникальными проектами — наша страсть,
              давайте делать это вместе! Мы всегда готовы встретиться с вами в
              Шоу Руме, подобрать и предоставить материалы, дать доступ к
              коллекции оцифрованных моделей. Если у вас есть индивидуальный
              запрос, проект или необходимо найти и реализовать нестандартное
              решение для вашего дома или сада, мы с удовольствием вам с этим
              поможем.
            </p>
            <div className="arrow">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
      <div className="section-layout">
        <div className="center-gr" style={{ "--area": "a" }}>
          <div className="form-container">
            <p className="xsmall-text text-main text-black text-center up-case">
              Если у вас, как у дизайнера, уже есть готовый проект и вы ищете
              возможность его реализации, обратитесь к нам,заполнив форму
              обратной связи
            </p>
            <form action="#">
              <div className="row gap-15">
                <div className="column gap-10">
                  <Input type="name" placeholder="Имя" />
                  <Input type="phone" placeholder="Телефон" />
                  <Input type="email" placeholder="Почта" />
                </div>
                <div className="column gap-10">
                  <Upload text="Загрузить проект*" />
                  <Input tag={"textarea"} placeholder="Сообщение" />
                </div>
              </div>
              <AnimButton type="submit">
                <img src={mailIcon} alt="mail" /> отправить
              </AnimButton>
            </form>
          </div>
        </div>
        <div style={{ "--area": "b" }}>
          <div className="image">
            <LazyLoadImage
              src={img1}
              width={"100%"}
              height={"100%"}
              effect="blur"
              alt="image-1"
            />
          </div>{" "}
        </div>
        <div style={{ "--area": "c" }}>
          <div className="image">
            <LazyLoadImage
              src={img2}
              width={"100%"}
              height={"100%"}
              effect="blur"
              alt="image-2"
            />
          </div>
        </div>
        <div style={{ "--area": "d" }}>
          <div className="circle center-gr">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="center-gr" style={{ "--area": "e" }}>
          <div className="form-container">
            <p className="xsmall-text text-main text-black text-center up-case">
              Если у вас, как у дизайнера, уже есть готовый проект и вы ищете
              возможность его реализации, обратитесь к нам,заполнив форму
              обратной связи
            </p>
            <form action="#">
              <div className="row gap-15">
                <div className="column gap-10">
                  <Input type="name" placeholder="Имя" />
                  <Input type="phone" placeholder="Телефон" />
                  <Input type="email" placeholder="Почта" />
                </div>
                <div className="column gap-10">
                  <Input tag={"textarea"} placeholder="Сообщение" />
                </div>
              </div>
              <AnimButton type="submit">
                <img src={mailIcon} alt="mail" /> отправить
              </AnimButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
