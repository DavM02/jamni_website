
import logo from "../../../assets/logo.svg";
import arrowLeft from "../../../assets/icons/arrow-cursive-left.svg";
import arrowRight from "../../../assets/icons/arrow-cursive-right.svg";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row center-x">
        <div className="center-y gap-50">
          <p className="xsmall-text text-main text-black up-case text-center">
            Если у вас, как у дизайнера,уже есть готовый проект и вы ищете
            возможность его реализации, обратитесь к нам
          </p>
          <div className="row center-y center-x gap-50">
            <div className="arrow-left">
              <img src={arrowLeft} alt="arrow-left" />
            </div>
            <div
              className="circle center-gr"
              onClick={() => navigate("/project")}
            >
              <img src={logo} alt="logo" />
            </div>
            <div className="arrow-right">
              <img src={arrowRight} alt="arrow-right" />
            </div>
          </div>
          <p className="xsmall-text text-main text-black up-case text-center">
            Если вы хотите заказатьдизайн-проект, мы с удовольствием поможем вам
            связаться с профессиональным дизайнером для сотрудничества
          </p>
        </div>
      </div>
    </div>
  );
}
