
import './favorites.css'
import { userFavStore } from '../../stores/favStore';
import { AnimatePresence } from 'framer-motion';
import SmoothAppearance from '../../components/ui/SmoothAppearance';
import CartItem from '../../components/Cart/CartItem/CartItem';
import MainButton from '../../components/ui/buttons/MainButton/MainButton';
import CartWrapper from '../../components/Cart/CartItem/CartWrapper';
import useProductActions from '../../hooks/useProductActions';
export default function FavoritesSections() {

    const { products, removeProduct, increaseQuantity, decreaseQuantity } = userFavStore();
    const { handleAddToCart } = useProductActions()



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
                                            handleAddToCart(e, null, { ...el, quantity: el.quantity })
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
