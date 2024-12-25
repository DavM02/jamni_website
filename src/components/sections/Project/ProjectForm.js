import Input from "../../ui/inputs/Input/Input";
import Upload from "../../ui/inputs/Upload/Upload";
import AnimButton from "../../ui/buttons/AnimButton/AnimButton";
import mailIcon from "../../../assets/icons/mail.svg";
import { formStore } from "../../../stores/formStore";
export default function ProjectForm({ includeUpload = false }) {
    const { updateFormData, validateFormData, clearErrors } = formStore();
    return (
        <div className="form-container">
            <p className="xsmall-text text-main text-black text-center up-case">
                Если у вас, как у дизайнера, уже есть готовый проект и вы ищете
                возможность его реализации, обратитесь к нам, заполнив форму
                обратной связи
            </p>
            <form action="#" 
            data-formkey="projectForm"
            onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.target);
                const formDataObject = Object.fromEntries(fd.entries());
                clearErrors("projectForm");
                if (validateFormData("projectForm", formDataObject)) {
                    updateFormData("projectForm", formDataObject);
                }
            }}>
                <div className="row gap-15">
                    <div className="column gap-10">
                        <Input type="text" placeholder="Имя" name="name" />
                        <Input type="tel" placeholder="Телефон" name="phone" />
                        <Input type="email" placeholder="Почта" name="email" />
                    </div>
                    <div className="column gap-10">
                        {includeUpload && <Upload text="Загрузить проект*" />}
                        <Input tag={"textarea"} placeholder="Сообщение" name="message"/>
                    </div>
                </div>
                <AnimButton type="submit">
                    <img src={mailIcon} alt="mail" /> отправить
                </AnimButton>
            </form>
        </div>
    );
}
