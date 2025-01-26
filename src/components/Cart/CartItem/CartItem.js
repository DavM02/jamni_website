import React, { memo } from "react";
 import trashIcon from "../../../assets/icons/bag.svg";
  import { LazyLoadImage } from "react-lazy-load-image-component";
  
function CartItem({
  product,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
}) {

  
  return (
    <>
      <div className={`${product.id.split('_')[1]} row wrap gap-30`} >
        <div className="cart-item-image">
          <LazyLoadImage
            // visibleByDefault={true}
            src={product.image}
            width={"100%"}
            height={"100%"}
            effect="blur"
            alt={product.name}/>
        
        </div>
        <div className="column gap-20 s-between">
          <div>
            <h6 className="text-black-secondary">
              {product.product.split(" ")[1]} {product.name}
            </h6>
            <span className="xsmall-text text-main text-black">
              {(product.price * product.quantity).toLocaleString("ru-RU")} руб
            </span>
          </div>
          <div className="cart-item-quantity text-black-secondary grid-3 xsmall-text text-main">
            <div className="center-gr" onClick={(e) => { e.preventDefault(); e.stopPropagation(); decreaseQuantity(product.id, product.quantity) }}>
              <span>-</span>
            </div>
            <div className="center-gr">
              <span>{product.quantity}</span>
            </div>
            <div className="center-gr" onClick={(e) => { e.preventDefault(); e.stopPropagation(); increaseQuantity(product.id)}}>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
      <div className="remove-item center-gr" onClick={(e) => { e.preventDefault(); e.stopPropagation(); removeProduct(product.id) }}>
        <img src={trashIcon} alt="remove" />
      </div>
    </>
  );
}

export default memo(CartItem);
