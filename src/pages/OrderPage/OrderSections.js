import { useState } from 'react'
import Order from '../../components/sections/Order/Order'
import MoreProducts from '../../components/sections/MoreProducts/MoreProducts'
export default function OrderSections() {
    const [isBoight, setIsBought] = useState(false)
    return (
    
        <>
            <Order setIsBought={setIsBought}/>
            {isBoight && <MoreProducts headline={"продолжить покупки"} />} 
        </>
    )
}
