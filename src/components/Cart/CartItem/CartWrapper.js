import React from "react";
import { motion } from "framer-motion";
import SmoothAppearance from "../../ui/SmoothAppearance";
import { Link } from "react-router-dom";

const CartWrapper = ({ children, product }) => (
    <SmoothAppearance
        key={product.id}
        Tag={motion.li}
        layout
    >
        <Link
            className="cart-item gap-30 row s-between"
            to={`/catalog/${product.catalog}/${product.name.toLowerCase()}?id=${product.id}`}>
            {children}
        </Link>
    </SmoothAppearance>
);

export default CartWrapper;
