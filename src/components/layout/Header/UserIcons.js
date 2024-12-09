import React, { useState } from "react";
import userIcon from "../../../assets/icons/user.svg";
import heartIcon from "../../../assets/icons/heart.svg";
import bagIcon from "../../../assets/icons/shopping-bag.svg";
import SignIn from "../../Auth/SignIn/SignIn";
import Backdrop from "../../ui/Backdrop/Backdrop";
import Portal from "../../ui/Portal";
import Auth from "../../Auth/Auth";

export default function UserIcons() {
  const [auth, setAuth] = useState(null);
  return (
    <>
      <div className="icons row end-x gap-25">
        <div className="icon" onClick={() => setAuth("sign-in")}>
          <img src={userIcon} alt="user-icon" />
        </div>
        <div className="icon">
          <img src={heartIcon} alt="heart-icon" />
        </div>
        <div className="icon">
          <img src={bagIcon} alt="bag-icon" />
        </div>
      </div>
      <Auth auth={auth} setAuth={setAuth} />
    </>
  );
}
