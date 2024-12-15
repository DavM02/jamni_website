import heartIcon from "../../../../assets/icons/heart.svg";
import AuthIcon from "./AuthIcon";
import CartIcon from "./CartIcon";


export default function Icons() {

  return (
    <>
      <div className="icons row end-x gap-25">
        <AuthIcon />
        <div className="icon" style={{ marginTop: "2px" }}>
          <img src={heartIcon} alt="heart-icon" />
        </div>
        <CartIcon />
      </div>

    </>
  );
}
