import React from 'react'
import './favorites.css'
import { userFavStore } from '../../stores/favStore';
import { AnimatePresence } from 'framer-motion';
import SmoothAppearance from '../../components/ui/SmoothAppearance';
import CartItem from '../../components/Cart/CartItem/CartItem';
import { useNavigate } from 'react-router-dom';
import { userCartStore } from '../../stores/cartStore';
import MainButton from '../../components/ui/buttons/MainButton/MainButton';
import { modalStore } from '../../stores/modalStore';
import CartWrapper from '../../components/Cart/CartItem/CartWrapper';
export default function FavoritesSections() {

    const { products, removeProduct, increaseQuantity, decreaseQuantity } = userFavStore();
    const addToCart = userCartStore((state) => state.addProduct);
    const { toggleAdded } = modalStore()
    const navigate = useNavigate()

    return (
        <section id='favorites'>

            <div className='center-flex'>
                <div className='container'>


                    <AnimatePresence mode="wait" initial={false}>
                        {products.length > 0 ? <SmoothAppearance

                            key={"list"}>
                            <ul

                                className="fav-items column gap-40">
                                {products.map((el) => (
                                    <CartWrapper 
                                        key={el.id}
                                        navigate={navigate}
                                        product={el}
                                    >
                           
                                            <CartItem
                                                product={el}
                                                increaseQuantity={increaseQuantity}
                                                decreaseQuantity={decreaseQuantity}
                                                removeProduct={removeProduct}
                                            />
                                            <MainButton onClick={(e) => {
                                                e.stopPropagation()
                                                addToCart({ ...el, quantity: el.quantity }); toggleAdded(); setTimeout(() => {
                                                    toggleAdded()
                                                }, 1500);
                                            }}>
                                                добавить в корзину
                                            </MainButton>
                                
                                    </CartWrapper>
                                ))}
                            </ul>
                        </SmoothAppearance> : <SmoothAppearance
                            key={'no-found'}>
                            <h5 className="text-center">
                                у вас нет избранных товаров
                            </h5>
                        </SmoothAppearance>}
                    </AnimatePresence>


                </div>
            </div>

        </section>
    )
}
