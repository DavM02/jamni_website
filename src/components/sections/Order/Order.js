import { MainContext } from "../../../context/MainContext";
import CartItems from "../../Cart/CartItems";
import "./order.css";
import { useContext, useState } from "react";
import PromoCode from "./PromoCode";

import { AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import Delivery from "./Forms/Delivery";
import Information from "./Forms/Information";
import Payment from "./Forms/Payment";
import Bought from "./Bought";
import SmoothAppearance from "../../ui/SmoothAppearance";
export default function Order() {
  console.log('lol')
  const { scrollbarAccess } = useContext(MainContext);
  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };
  function allowScroll() {

    scrollbarAccess.current.updatePluginOptions("overflow", { open: false });
  }

  function disableScroll() {

    scrollbarAccess.current.updatePluginOptions("overflow", { open: true });
  }
  const [activeTab, setActiveTab] = useState('information')

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
                            setActiveTab={setActiveTab}
                            key={'payment'}
                          />)
                    }
                  </AnimatePresence>

                </SmoothAppearance> : <Bought />
              }

            </AnimatePresence>

          </div>
          <div>
            <h5 className="text-black-secondary">итоговая сумма</h5>
            <div
              onMouseEnter={() => !isTouchDevice() && disableScroll()}
              onMouseLeave={() => !isTouchDevice() && allowScroll()}
              onTouchStart={() => isTouchDevice() && disableScroll()}
              onTouchEnd={() => isTouchDevice() && allowScroll()}
              onTouchCancel={() => isTouchDevice() && allowScroll()}
            >
              <CartItems />
            </div>
            <PromoCode />
          </div>
        </div>
      </div>
    </section>
  );
}
