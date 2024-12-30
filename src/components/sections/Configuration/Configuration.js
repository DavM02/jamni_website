import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { userCartStore } from "../../../stores/cartStore";
import { modalStore } from "../../../stores/modalStore";
import ConfigItem from "./ConfigItem";
import ConfigSummary from "./ConfigSummary";
import './configuration.css'
import img1 from '../../../assets/config-1.jpg';
import img2 from '../../../assets/config-2.jpg';
import img3 from '../../../assets/config-3.jpg';
import img4 from '../../../assets/config-4.jpg';
import img5 from '../../../assets/config-5.jpg';
import img6 from '../../../assets/config-6.jpg';
import img7 from '../../../assets/config-7.jpg';

const initialData = [
  { type: "3 - модульный", price: 120000, quantity: 0, img: img1 },
  { type: "2 - модульный", price: 80000, quantity: 0, img: img2 },
  { type: "1 - модульный", price: 40000, quantity: 0, img: img3 },
  { type: "угловой", price: 60000, quantity: 0, img: img4 },
  { type: "левый", price: 50000, quantity: 0, img: img5 },
  { type: "правый", price: 50000, quantity: 0, img: img6 },
  { type: "пуф", price: 30000, quantity: 0, img: img7 },
];

export default function Configuration({ product }) {
  const { toggleAdded } = modalStore();
  const addToCart = userCartStore((state) => state.addProduct);
  const param = useParams();
  const catalog = param["*"].split("/")[0];

  const [data, setData] = useState(initialData);

  const updateQuantity = (index, change) => {
    setData((prevData) => {
      const newData = [...prevData];
      const newQuantity = newData[index].quantity + change;
      newData[index].quantity =
        newQuantity >= 0 && newQuantity <= 9 ? newQuantity : newData[index].quantity;
      return newData;
    });
  };

  const calculateTotal = () => {
    return product.price + data.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleAddToCart = () => {
    const newProduct = {
      catalog,
      id: product.id + "with-config" + Math.random(),
      product: product.product,
      image: product.images[0],
      name: product.name,
      collection: product.collection,
      price: calculateTotal(),
      configuration: data.map((el) => ({ type: el.type, quantity: el.quantity })),
    };

    addToCart(newProduct);
    toggleAdded();
    setTimeout(toggleAdded, 1500);
  };

  return (
    <section id="configuration">
      <div className="container">
        <div className="text-center">
          <h2>конфигуратор</h2>
          <span className="text-main small-text text-black up-case">
            Индивидуальность в каждом модуле: создайте свой идеальный
            <br />
            диван с нашей модульной системой
          </span>
        </div>
        <div className="section-layout">
          {data.map((item, index) => (
            <ConfigItem
              key={index}
              item={item}
              index={index}
              updateQuantity={updateQuantity}
            />
          ))}
        </div>
        <ConfigSummary totalPrice={calculateTotal()} onAddToCart={handleAddToCart} />
      </div>
    </section>
  );
}
