import userIcon from "../../../../assets/icons/user.svg";
import Auth from "../../../Auth/Auth";
import { modalStore } from "../../../../stores/modalStore";
export default function AuthIcon() {
    const { setAuth } = modalStore();
    return (
        <>
            <div className="icon" onClick={() => setAuth("sign-in")}>
                <img src={userIcon} alt="user-icon" />
            </div>

            <Auth/>
        </>
    )
}
