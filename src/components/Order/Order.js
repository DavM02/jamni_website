import { MainContext } from '../../context/MainContext'
import CartItems from '../Cart/CartItems'
import './order.css'
import { useContext } from 'react'
import PromoCode from './PromoCode'
import Input from '../ui/inputs/Input/Input'
import AnimButton from '../ui/buttons/AnimButton/AnimButton'
import Selection from '../ui/inputs/Selection/Selection'
import Checkbox from '../ui/inputs/Checkbox/Checkbox'
export default function Order() {

  const { scrollbarAccess } = useContext(MainContext)

  function allowScroll() {
    scrollbarAccess.current.updatePluginOptions('overflow', { open: false })
  }

  function disableScroll() {
    scrollbarAccess.current.updatePluginOptions('overflow', { open: true })
  }
  return (
    <section id='order'>
      <div className='container'>
        <div className='section-layout'>
          <div>
            <form
            onSubmit={(e) => {
              e.preventDefault()
              const formdata = new FormData(e.target)
                for (let [key, value] of formdata.entries()) {
             console.log(key,value)
                }
            }}
            spellCheck={false} className='form-info' action='#'>
              <div className='row s-between'>
                <span className='text-main xsmall-text up-case'>Контакт</span>
                <p className='text-main xxsmall-text text-gray'>
                  У Вас уже есть аккаунт? <span className='text-black'>
                    Авторизоваться
                  </span>
                </p>
              </div>
              <Input type="email" placeholder="Электронная почта" />
              <div className='row gap-10'>
                <Checkbox id="subscribe"   name="подписка" />
                <label htmlFor='subscribe' >

                  <p className='text-main xxsmall-text text-gray'>Присылайте мне электронные письма с новостями и предложениями</p>

                </label>

              </div>
              <span className='text-main xsmall-text up-case'>Адрес доставки</span>
              <Selection name="address" data={["Россия", "Казахстан", "Беларусь", "другая страна"]} />
              <div className='row wrap gap-20'>
                <Input type="text" placeholder="Имя" name="имя" />
                <Input type="text" placeholder="Фамилия" name="фамилия"/>
                <Input type="text" placeholder="Город" name="город" />
                <Input type="number" placeholder="Индекс" name="индекс" />
                <Input type="text" placeholder="Улица" name="улица" />
                <Input type="number" placeholder="Номер дома" name="номер дома" />
              </div>
              <Input type="tel" placeholder="Телефон" name="телефон"/>
              <div className='row gap-10'>
                <Checkbox id="save"  name="сохранить"/>


                <label  htmlFor='save'>
                  <p className='text-main xxsmall-text text-gray'>
                    Сохраните эту информацию для использования в следующий раз
                  </p>
                </label>

              </div>
              <AnimButton type="submit">продолжить</AnimButton>
            </form>

          </div>
          <div>

            {/* <form className='form-delivery'>
              <div className='row gap-20'>
                <Checkbox id="delivery" name="доставка" value={'курьер'} />
                <label htmlFor='delivery'>
                  <span className='text-main xxsmall-text text-gray'>
                    Курьер
                  </span>
                </label>
              </div>
              <AnimButton type="submit">перейти к оплате</AnimButton>
            </form> */}
          </div>
          <div>
            <h5>итоговая сумма</h5>
            <div

              onMouseEnter={() => disableScroll()}
              onMouseLeave={() => allowScroll()}
              onTouchStart={() => disableScroll()}
              onTouchEnd={() => allowScroll()}
              onTouchCancel={() => allowScroll()}>
              <CartItems />
            </div>
            <PromoCode />
          </div>
        </div>
      </div>
    </section>
  )
}
