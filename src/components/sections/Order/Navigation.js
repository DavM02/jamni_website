import React from 'react';
import { cartModalStore } from '../../../stores/cartModalStore';

export default function Navigation({ activeTab }) {
    const { toggleCart, isCartOpen } = cartModalStore();

     const tabs = [
        { id: 'information', label: 'информация' },
        { id: 'delivery', label: 'доставка' },
        { id: 'payment', label: 'оплата' },
    ];

     const getColor = (condition) => (condition ? 'var(--black)' : 'inherit');

    return (
        <div className="row gap-5 wrap xxxsmall-text text-main text-gray up-case">
            <span
                style={{ color: getColor(isCartOpen) }}
                onClick={toggleCart}
            >
                корзина
            </span>

             {tabs.map((tab) => (
                <span
                    key={tab.id}
                    style={{ color: getColor(activeTab === tab.id) }}
                  
                >
                    /&nbsp;&nbsp;{tab.label}
                </span>
            ))}
        </div>
    );
}
