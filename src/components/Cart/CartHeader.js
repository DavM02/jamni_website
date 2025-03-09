

export default function CartHeader({ toggleCart }) {
   return (
    <div className="row s-between center-y gap-20">
      <h5 className="text-black-secondary">Корзина</h5>
      <div className="menu-bars" onClick={toggleCart}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
