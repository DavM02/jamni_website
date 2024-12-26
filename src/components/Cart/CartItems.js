import React from 'react'
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import { userCartStore } from '../../stores/cartStore';
import { AnimatePresence, motion } from 'framer-motion';
import SmoothAppearance from '../ui/SmoothAppearance';
export default function CartItems() {
 
    const { products, removeProduct, increaseQuantity, decreaseQuantity } = userCartStore();

    const navigate = useNavigate();
    return (
        <AnimatePresence mode="wait">
            {products.length > 0 ? <SmoothAppearance
            style={{ '--cart-items-min-count': products.length >= 3 ? 3 : (products.length === 2 ? 2 : 1) }}
            
                key={"list"}
                Tag={motion.ul} className="cart-items column gap-40">
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
            </SmoothAppearance> : <SmoothAppearance key={'no-found'} style={{ padding: '30px 0' }}>
                <h5 className="text-center">
                   ваша карта пуста
                </h5>
            </SmoothAppearance>}
        </AnimatePresence>
    )
}
