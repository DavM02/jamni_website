import React from 'react'

export default function DeliveryOutput() {
  return (
      <div className="form-output">
          <div className="row center-y s-between wrap">
              <div className="row center-y wrap gap-20">
                  <span className="xxsmall-text text-main text-black-secondary up-case">
                      <b> Контакт</b>
                  </span>
                  <span className="xsmall-text text-main text-black">
                      annakonstantiova@gmail.com
                  </span>
              </div>
              <span className="xxsmall-text text-main text-gray">
                  изменить
              </span>
          </div>
          <div className="row center-y s-between wrap">
              <div className="row center-y wrap gap-20">
                  <span className="xxsmall-text text-main text-black-secondary up-case">
                      <b>адрес</b>
                  </span>
                  <span className="xsmall-text text-main text-black">
                      Борисовское шоссе 20 / 60, 105062, Москава, Россия
                  </span>
              </div>
              <span className="xxsmall-text text-main text-gray">
                  изменить
              </span>
          </div>
      </div>
  )
}
