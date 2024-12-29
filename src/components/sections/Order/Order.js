import { MainContext } from "../../../context/MainContext";
import CartItems from "../../Cart/CartItems";
import "./order.css";
import './media.css'
import { useContext, useState, useRef, useEffect, useCallback } from "react";
import PromoCode from "./PromoCode";

import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./Navigation";
import Delivery from "./Forms/Delivery";
import Information from "./Forms/Information";
import Payment from "./Forms/Payment";
import Bought from "./Bought";
import SmoothAppearance from "../../ui/SmoothAppearance";
import { userCartStore } from "../../../stores/cartStore";
import useMediaQ from "../../../hooks/useMediaQ";
export default function Order({ setIsBought }) {

  const { scrollbarAccess } = useContext(MainContext);
  const query = useMediaQ('(max-width: 769px)');
 
  const elRef = useRef(null)

  const [openCart, setOpenCart] = useState(false)
  const { products } = userCartStore()

  const allowScroll = useCallback(() => {

    scrollbarAccess.current.updatePluginOptions("overflow", { open: false });


  }, [scrollbarAccess])

  function disableScroll() {

    const height = elRef?.current?.scrollHeight
    if (height > 470) {
      scrollbarAccess.current.updatePluginOptions("overflow", { open: true });

    }
  }
  const [activeTab, setActiveTab] = useState('information')


  useEffect(() => {

    allowScroll()

  }, [products.length, allowScroll])



  return (
    <section id="order">
      <div className="container">
        <div className="section-layout">
          <div className="wrap-cart row s-between center-y">
            <span className="xsmall-text text-main text-black-secondary up-case">
              показать заказ
            </span>
            <span className="text-main text-black up-case" onClick={() => setOpenCart(prev => !prev)}>
              {openCart ? '-' : "+"}
            </span>
          </div>
          <div>
            <AnimatePresence mode="wait" initial={false}>
              {
                activeTab !== 'bought' ? <SmoothAppearance key={'main-tabs'}>

                  <Navigation activeTab={activeTab} />

                  <AnimatePresence mode="wait">
                    {
                      activeTab === 'information' ?
                        <Information
                          setActiveTab={setActiveTab}
                          key={'information'} /> :
                        (activeTab === 'delivery' ?
                          <Delivery
                            setActiveTab={setActiveTab}
                            key={'delivery'} />
                          : <Payment
                            setIsBought={setIsBought}
                            setActiveTab={setActiveTab}
                            key={'payment'}
                          />)
                    }
                  </AnimatePresence>

                </SmoothAppearance> : <Bought />
              }

            </AnimatePresence>

          </div>

          <AnimatePresence mode="wait" initial={false}>
            {
              ((!query) || (openCart && query) )&& <motion.div
                layout
                initial={{ height: 0 }}
                animate={{ height: 'auto'}}
                exit={{ height: 0 }}
                
                className="cart-content">
                <h5 className="text-black-secondary">итоговая сумма</h5>

                <CartItems
                  ref={elRef}
                  onMouseEnter={() => disableScroll()}
                  onMouseLeave={() => allowScroll()}
                  onTouchStart={() => disableScroll()}
                  onTouchEnd={() => allowScroll()}
                  onTouchCancel={() => allowScroll()}
                />
                <PromoCode />
              </motion.div>
            }
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
