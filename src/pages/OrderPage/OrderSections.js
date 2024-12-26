import React from 'react'
import Order from '../../components/sections/Order/Order'
import MoreProducts from '../../components/sections/MoreProducts/MoreProducts'
export default function OrderSections() {
    return (
        <>
            <Order />
            <MoreProducts headline={"продолжить покупки"} />
        </>
    )
}
