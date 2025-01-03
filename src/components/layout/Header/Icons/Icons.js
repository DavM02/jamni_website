import heartIcon from "../../../../assets/icons/heart.svg";
import AuthIcon from "./AuthIcon";
import CartIcon from "./CartIcon";
import { useNavigate } from "react-router-dom";

export default function Icons() {

  const navigate = useNavigate()

  return (
    <>
      <div className="icons row end-x gap-25">
        <AuthIcon />
        <div className="icon" onClick={() => navigate('favorites')} style={{ marginTop: "2px" }}>
          <img src={heartIcon} alt="heart-icon" />
        </div>
        <CartIcon />
      </div>

    </>
  );
}
