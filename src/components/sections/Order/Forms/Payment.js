import React, { useState, useRef } from 'react'
import SmoothAppearance from '../../../ui/SmoothAppearance'
import DeliveryOutput from '../DeliveryOutput'
import { formStore } from '../../../../stores/formStore'
import arrowLeft from "../../../../assets/icons/arrow-left.svg";
import AnimButton from '../../../ui/buttons/AnimButton/AnimButton';
import Checkbox from '../../../ui/inputs/Checkbox/Checkbox'

import Cart from '../Cart/Cart';
export default function Payment({ setActiveTab, setIsBought }) {
    const { forms, updateFormData, validateFormData, clearErrors } = formStore()
    const [isChecked, setIsChecked] = useState(
        forms?.paymentForm?.formData?.paymentType ?? "onspot"
    );


    function handleSubmit(e) {
        e.preventDefault();
        const fd = new FormData(e.target);
        const paymentType = fd.get("onspot") ? "onspot" : "bycard"
 
        const cartData = {
            cartNums: fd.getAll('cartNums').join(''),
            cartCVV: fd.getAll('cartCVV').join(''),
            cartDate: fd.getAll('cartDate').join(''),
            cartYear: fd.getAll('cartYear').join(''),
            name: fd.get('name'),
        }
        const formDataObject = paymentType === 'onspot' ? { paymentType } : {  paymentType, ...cartData }
        clearErrors("paymentForm")
        if (validateFormData("paymentForm", formDataObject)) {
            updateFormData("paymentForm", formDataObject);
            setActiveTab("bought");
            setIsBought(true)
        }
    }
    return (
        <SmoothAppearance blur={true}>
            <DeliveryOutput setActiveTab={setActiveTab}>
                <div className="row center-y s-between wrap">
                    <div className="row center-y wrap gap-10">
                        <span className="xxsmall-text text-main text-black-secondary up-case">
                            <b>доставка</b>
                        </span>
                        <span className="xsmall-text text-main text-black" style={{ textTransform: 'capitalize' }}>
                            {forms.deliveryForm.formData.deliveryType === "delivery" ? 'Самовывоз' : 'Курьер'}
                        </span>
                    </div>
                    <span
                        className="xxsmall-text text-main text-gray"
                        onClick={() => setActiveTab("delivery")}
                    >
                        изменить
                    </span>
                </div>
            </DeliveryOutput>
            <form action='#'
                className='form-payment'
                data-formkey="paymentForm"
                onSubmit={(e) => handleSubmit(e)}

            >

                <span className="text-main xsmall-text text-black-secondary up-case">
                    оплата
                </span>
                <Cart isChecked={isChecked} setIsChecked={setIsChecked} />
                <div className="row center-y gap-10">
                    <Checkbox
                        checked={isChecked === "onspot"}
                        onChange={() =>
                            setIsChecked((prev) => (prev === "onspot" ? "" : "onspot"))
                        }
                        label={true}
                        name="onspot"
                        id="onspot"
                    >
                        Оплата при получении
                    </Checkbox>
                </div>
                <div className='line'></div>
                <AnimButton type="submit">оплатить</AnimButton>
            </form>
            <div className="row center-x">
                <button
                    onClick={() => setActiveTab("delivery")}
                    type="button"
                    className="row center-y gap-15 xsmall-text text-main text-black"
                >
                    <img src={arrowLeft} alt="arrow-left" />
                    Вернуться к доставке
                </button>
            </div>
        </SmoothAppearance >
    )
}

 