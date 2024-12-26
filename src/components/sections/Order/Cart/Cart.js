import React from 'react'
import './cart.css'
import Input from '../../../ui/inputs/Input/Input'
import CartCells from './CartCells'
import Checkbox from '../../../ui/inputs/Checkbox/Checkbox'
import visa from '../../../../assets/icons/visa.svg'
import masterCard from '../../../../assets/icons/master-card.svg'

export default function Cart({ setIsChecked, isChecked }) {
    return (
        <div id='form-cart'>
            <div className='row wrap s-between center-y gap-10'>
                <div className='row center-y gap-10'>
                    <Checkbox
                        checked={isChecked === "bycard"}
                        onChange={() =>
                            setIsChecked((prev) => (prev === "bycard" ? "" : "bycard"))
                        }
                        label={true}
                        name="bycard"
                        id="bycard"
                    >
                        Оплата банковской картой
                    </Checkbox>
                </div>
                <div className='row center-y gap-5'>
                    <div className='cart-image center-gr'>
                        <img src={visa} alt='visa' />
                    </div>
                    <div className='cart-image center-gr'>
                        <img src={masterCard} alt='master-card' />
                    </div>
                </div>
            </div>
            <div className='cart-data'>
                <span className="text-main xxsmall-text text-gray">
                    Номер карты
                </span>
                <CartCells cells={4} subCells={4} name="cartNums" />
                <span className="text-main xxsmall-text text-gray">
                    Имя владельца карты
                </span>
                <Input type="text" name="name" placeholder="Имя владельца" />
                <div className='row s-between'>
                    <div>
                        <span className="text-main xxsmall-text text-gray">
                            Действует до
                        </span>
                        <div className='row center-y gap-5'>

                            <CartCells cells={1} subCells={2} name="cartDate" />
                            <span className="text-main xxsmall-text text-gray">
                                /
                            </span>
                            <CartCells cells={1} subCells={2} name="cartYear" />
                        </div>
                    </div>
                    <div>
                        <span className="text-main xxsmall-text text-gray up-case">
                            cvv
                        </span>
                        <CartCells cells={1} subCells={3} name="cartCVV" />
                    </div>
                </div>
            </div>

        </div>
    )
}
