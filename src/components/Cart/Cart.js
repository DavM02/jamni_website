import React, { useMemo, useState } from "react";
import "./cart.css";
import { cartModalStore } from "../../stores/cartModalStore";
import { AnimatePresence, motion } from "framer-motion";
import { userCartStore } from "../../stores/cartStore";
import trashIcon from "../../assets/icons/bag.svg";
import SmoothAppearance from "../ui/SmoothAppearance";
import InfiniteSlider from "../InfiniteSlider/InfiniteSlider";
import useSWRImmutable from "swr/immutable";

import loadData, { getLength } from "../../db/loadData";
import { Link, useNavigate } from "react-router-dom";
import arrow from "../../assets/icons/arrow-up.svg";

import Slide from "./Slide";
export default function Cart() {
  const { toggleCart } = cartModalStore();
  const {
    products,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = userCartStore();

  const navigate = useNavigate();

  const { data: dataLength } = useSWRImmutable(["decor"], getLength);

  const randomPage = useMemo(
    () => Math.floor(Math.random() * Math.max(1, Math.floor(dataLength / 18))),
    [dataLength]
  );

  const { data, error, isLoading } = useSWRImmutable(
    ["decor", randomPage, 13],
    loadData
  );

  const [showRecs, setShowRecs] = useState(true);
  return (
    <div id="cart" className="column s-between">
      <div className="cart-content">
        <div className="row s-between center-y gap-20">
          <h5>корзина</h5>
          <div className="menu-bars" onClick={() => toggleCart()}>
            <div></div>
            <div></div>
          </div>
        </div>
        <ul className="cart-items column gap-40">
          {products && (
            <AnimatePresence>
              {products.map((el, i) => {
                return (
                  <SmoothAppearance
                    onClick={() =>
                      navigate(
                        `catalog/${el.catalog}/${el.name.toLowerCase()}?id=${
                          el.id
                        }`
                      )
                    }
                    Tag={motion.li}
                    key={el.id}
                    layout
                    className="cart-item gap-30 row s-between"
                  >
                    <div className="row gap-30">
                      <div className="cart-item-image">
                        <img src={el.image} alt={el.name} />
                      </div>
                      <div className="column gap-20 s-between">
                        <div>
                          <h6>
                            {el.product.split(" ")[1]} {el.name}
                          </h6>
                          <span className="xsmall-text text-main text-black">
                            {(el.price * el.quantity).toLocaleString("ru-RU")}{" "}
                            руб
                          </span>
                        </div>
                        <div className="cart-item-quantity grid-3 xsmall-text text-main">
                          <div
                            className="center-gr"
                            onClick={(e) => {
                              e.stopPropagation();
                              el.quantity > 1
                                ? decreaseQuantity(el.id)
                                : removeProduct(el.id);
                            }}
                          >
                            <span>-</span>
                          </div>

                          <div className="center-gr">
                            <span>{el.quantity}</span>
                          </div>

                          <div
                            className="center-gr"
                            onClick={(e) => {
                              e.stopPropagation();
                              increaseQuantity(el.id);
                            }}
                          >
                            <span>+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="remove-item center-gr"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeProduct(el.id);
                      }}
                    >
                      <img src={trashIcon} alt="remove" />
                    </div>
                  </SmoothAppearance>
                );
              })}
            </AnimatePresence>
          )}
        </ul>
      </div>
      <div>
        <div className="show-recommendations">
          <div
            className="row center-y gap-5"
            onClick={() => setShowRecs((prev) => !prev)}
          >
            <span className="xsmall-text text-main text-black up-case">
              Рекомендации для вас
            </span>
            <img
              style={{ transform: showRecs ? "rotate(180deg)" : "none" }}
              src={arrow}
              alt="arrow"
            />
          </div>
          <ul
            className="recommendations"
            style={{ height: showRecs ? "160px" : "0px" }}
          >
            {data && dataLength && (
              <InfiniteSlider
                sliderData={data.map((el) => {
                  return { ...el, catalog: "decor" };
                })}
                wrapper={Slide}
              />
            )}
          </ul>
        </div>

        <div className="output">
          <div className="row s-between wrap gap-20 up-case text-light text-main small-text">
            <span>Итог</span>
            <span>{totalPrice()} руб</span>
          </div>
        </div>
      </div>
    </div>
  );
}
