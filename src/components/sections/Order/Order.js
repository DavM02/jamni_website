import { MainContext } from "../../../context/MainContext";
import CartItems from "../../Cart/CartItems";
import "./order.css";
import './media.css'
import { useContext, useState,   useRef, useEffect, useCallback } from "react";
import PromoCode from "./PromoCode";

import { AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import Delivery from "./Forms/Delivery";
import Information from "./Forms/Information";
import Payment from "./Forms/Payment";
import Bought from "./Bought";
import SmoothAppearance from "../../ui/SmoothAppearance";
import { userCartStore } from "../../../stores/cartStore";
 export default function Order({ setIsBought }) {

   const { scrollbarAccess } = useContext(MainContext);
   
  const elRef = useRef(null)
  const [height, setHeight] = useState(0)
const {products} = userCartStore()

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
    setHeight(elRef?.current?.scrollHeight)
  }, [products.length, allowScroll])

 
 
  return (
    <section id="order">
      <div className="container">
        <div className="section-layout">
          <div>
            <AnimatePresence mode="wait">
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
          <div className="cart-content">
            <h5 className="text-black-secondary">итоговая сумма</h5>

            <CartItems
              height={height > 470 ? '470px' : 'unset'}
              ref={elRef}
              onMouseEnter={() => disableScroll()}
              onMouseLeave={() => allowScroll()}
              onTouchStart={() => disableScroll()}
              onTouchEnd={() => allowScroll()}
              onTouchCancel={() => allowScroll()}
            />
            <PromoCode />
          </div>
        </div>
      </div>
    </section>
  );
}
