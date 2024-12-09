import userIcon from "../../../assets/icons/user.svg";
import { useState } from "react";
import Auth from "../../Auth/Auth";
export default function OpenAuthModals() {
    const [auth, setAuth] = useState(null);
    return (
        <>
            <div className="icon" onClick={() => setAuth("sign-in")}>
                <img src={userIcon} alt="user-icon" />
            </div>

            <Auth auth={auth} setAuth={setAuth} />
        </>
  )
}
