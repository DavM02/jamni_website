import heartIcon from "../../../assets/icons/heart.svg";
import bagIcon from "../../../assets/icons/shopping-bag.svg";
import OpenAuthModals from "./OpenAuthModals";


export default function UserIcons() {
 
  return (
    <>
      <div className="icons row end-x gap-25">
         <OpenAuthModals/>
        <div className="icon">
          <img src={heartIcon} alt="heart-icon" />
        </div>
        <div className="icon">
          <img src={bagIcon} alt="bag-icon" />
        </div>
      </div>

    </>
  );
}
