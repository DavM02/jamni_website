import React, { useState } from 'react'
import DeliveryOutput from '../Outputs/DeliveryOutput'
import Checkbox from '../../../ui/inputs/Checkbox/Checkbox'
import AnimButton from '../../../ui/buttons/AnimButton/AnimButton'
import arrowLeft from "../../../../assets/icons/arrow-left.svg";
import SmoothAppearance from '../../../ui/SmoothAppearance'
export default function Delivery({setActiveTab}) {
    const [isChecked, setIsChecked] = useState('')
 
  return (
      <SmoothAppearance blur={true}>
          <DeliveryOutput />
          <form className="form-delivery">
              <span className="text-main xsmall-text text-black-secondary up-case">
                  способ доставки
              </span>
              <div className="row center-y gap-20">
                  <Checkbox
                      checked={isChecked === "pickup"}
                      onChange={() =>
                          setIsChecked((prev) =>
                              prev === "pickup" ? "" : "pickup"
                          )
                      }
                      label={true}
                      name="pickup"
                      id="pickup"
 
                  >
                      самовывоз (Москва, м. Ботанический сад, Сельскохозяйственная
                      уд., д. 12А, стр. 6.)
                  </Checkbox>
              </div>
              <div className="row center-y gap-20">
                  <Checkbox
                      checked={isChecked === "delivery"}
                      onChange={() =>
                          setIsChecked((prev) =>
                              prev === "delivery" ? "" : "delivery"
                          )
                      }
                      label={true}
                      name="delivery"
                      id="delivery"
                  >
                      курьер
                  </Checkbox>
              </div>
              <AnimButton type="submit">перейти к оплате</AnimButton>
          </form>
          <div className="row center-x">
              <button
                  onClick={() => setActiveTab('information')}
                  type="button"
                  className="row center-y gap-15 xsmall-text text-main text-black"
              >
                  <img src={arrowLeft} alt="arrow-left" />
                  Вернуться к информации
              </button>
          </div>
      </SmoothAppearance>
  )
}
