import { Link, NavLink } from "react-router-dom";
import arrow from "../../../assets/icons/arrow-up.svg";
import Backdrop from "../../ui/Backdrop/Backdrop";

export default function NestedList({ menu, setMenu }) {
  const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (isTouchDevice()) {
      if (window.innerWidth > 777) {
        setMenu((prev) => ({
          ...prev,
          backdrop: !prev.backdrop,
          nested: !prev.nested,
        }));
      } else {
        setMenu((prev) => ({ ...prev, nested: !prev.nested }));
      }
    } else if (window.innerWidth <= 777) {
      setMenu((prev) => ({ ...prev, nested: !prev.nested }));
    }
  };

  return (
    <>
      <li
        onClick={handleClick}
        onMouseEnter={() => {
          if (!isTouchDevice() && window.innerWidth > 777) {
            setMenu((prev) => ({ ...prev, backdrop: true, nested: true }));
          }
        }}
        onMouseLeave={() => {
          if (!isTouchDevice() && window.innerWidth > 777) {
            setMenu((prev) => ({ ...prev, backdrop: false, nested: false }));
          }
        }}
      >
        <NavLink
          onClick={(e) => e.preventDefault()}
          to={"catalog"}
          className="row-inline center-y gap-10"
        >
          каталог
          <img
            className="arrow-up"
            style={{ transform: menu.nested ? "rotate(180deg)" : "none" }}
            src={arrow}
            alt="arrow"
          />
        </NavLink>
        <ul
          id="catalog-list"
          className={`row s-between ${menu.nested ? "active" : "inactive"}`}
        >
          <li>
            <ul>
              <li>
                <NavLink to={"catalog/sofas"}>Диваны </NavLink>
              </li>
              <li>
                <NavLink to={"catalog/beds"}>Кровати </NavLink>
              </li>
              <li>
                <NavLink to={"catalog/poufs"}>Пуфы и банкетки </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <NavLink to={"catalog/armchairs"}>Кресла </NavLink>
              </li>
              <li>
                <NavLink to={"catalog/chairs"}>Стулья </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <NavLink to={"catalog/frameless"}>Бескаркасная мебель </NavLink>
              </li>
              <li>
                <NavLink to={"catalog/outdoor"}>Уличная мебель </NavLink>
              </li>
              <li>
                <NavLink to={"catalog/bedsheets"}>Постельное белье </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <NavLink to={"catalog/decor"}>Декор</NavLink>
              </li>
              <li>
                <NavLink to={"catalog/curtains"}>Шторы </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <Backdrop
        value={menu.backdrop}
        style={{ zIndex: menu.open ? "1" : "-1" }}
        root={"header"}
      />
    </>
  );
}
