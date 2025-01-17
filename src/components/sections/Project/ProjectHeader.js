import arrow from "../../../assets/icons/arrow-down.svg";
import AnimatedText from "../../scroll/TextAnimation";

export default function ProjectHeader() {
    return (
        <div className="row center-x">
            <div className="text-center">
                <AnimatedText text={"Воплотим ваш проект в уникальную мебель"} as="big-heading" center={true}/>
                {/* <h2>Воплотим ваш проект в уникальную мебель</h2> */}
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
    );
}
