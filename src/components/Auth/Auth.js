import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Backdrop from "../ui/Backdrop/Backdrop";
import Portal from "../ui/Portal";
import "./auth.css";
import SmoothAppearance from "../ui/SmoothAppearance";
import { AnimatePresence } from "framer-motion";
export default function Auth({ auth, setAuth }) {
  return (
    <>
      <Portal value={auth !== null} root={"modal-root"} className={`auth`}>
        <AnimatePresence mode="wait">
          {auth === "sign-in" ? (
            <SmoothAppearance className="sign-in center-gr" key={auth}>
              <SignIn setAuth={setAuth} />
      
            </SmoothAppearance>
          ) : (
            <SmoothAppearance className="sign-up center-gr " key={auth}>
              : <SignUp setAuth={setAuth} />
         
            </SmoothAppearance>
          )}
        </AnimatePresence>
      </Portal>
      {<Backdrop value={auth !== null} root={"modal-root"} />}
    </>
  );
}
