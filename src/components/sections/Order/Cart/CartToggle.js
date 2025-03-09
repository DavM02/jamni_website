

export default function CartToggle({ openCart, setOpenCart }) {
    return (
        <div className="wrap-cart row s-between center-y">
            <span className="xsmall-text text-main text-black-secondary up-case">
                показать заказ
            </span>
            <span
                className="text-main text-black up-case"
                onClick={() => setOpenCart((prev) => !prev)}
            >
                {openCart ? "-" : "+"}
            </span>
        </div>
    );
}
