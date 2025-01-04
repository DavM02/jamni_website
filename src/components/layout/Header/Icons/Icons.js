import AuthIcon from "./AuthIcon";
import CartIcon from "./CartIcon";
import FavoritesIcon from "./FavoritesIcon";
 
export default function Icons() {


  return (
    <>
      <div className="icons row end-x gap-25">
        <AuthIcon />
         <FavoritesIcon/>
        <CartIcon />
      </div>

    </>
  );
}
