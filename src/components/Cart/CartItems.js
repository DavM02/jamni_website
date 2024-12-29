import React, { forwardRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import { userCartStore } from '../../stores/cartStore';
import { AnimatePresence } from 'framer-motion';
import SmoothAppearance from '../ui/SmoothAppearance';
const CartItems = forwardRef((props, ref) => {

    
    const { products, removeProduct, increaseQuantity, decreaseQuantity } = userCartStore();
    const navigate = useNavigate();

 
   
    return (
        <AnimatePresence mode="wait" initial={false}>
            {products.length > 0 ? <SmoothAppearance
                {...props}
                key={"list"}>
                <ul
                    ref={ref}
                    className="cart-items column gap-40">
                    {products.map((el) => (
                        <CartItem
                            key={el.id}
                            product={el}
                            navigate={navigate}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                            removeProduct={removeProduct}
                        />
                    ))}
                </ul>
            </SmoothAppearance> : <SmoothAppearance
            className="row center-y center-x"
             key={'no-found'} 
             style={{height: '470px', margin: '30px 0' }}>
                <h5 className="text-center">
                    ваша карта пуста
                </h5>
            </SmoothAppearance>}
        </AnimatePresence>
    )


})

export default CartItems