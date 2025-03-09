
import mail from '../../../assets/icons/mail.svg'
import phone from '../../../assets/icons/phone.svg'
import location from '../../../assets/icons/location.svg'

export default function Contacts() {
    return (
        <div className='footer-contacts column gap-30'>
            <div className='row start-y gap-15'>
                <img src={phone} alt='phone-icon' style={{ marginTop: '4px' }} />
                <div>
                    <a href="tel:+79160257790" className='text-main text-light xxsmall-text'>+7 (916) 025-77-90</a>
                    <br />  <a href="tel:+74951501091" className='text-main text-light xxsmall-text'>+7 (495) 150-10-91</a>
                </div>
            </div>
            <div className='row start-y gap-15'>
                <img src={location} alt='location-icon' />
                <span className='text-main text-light xxsmall-text'>
                    Москва,
                    <br /> Сельскохозяйственная улица,
                    <br /> д. 12А
                </span>
            </div>
            <div className='row center-y gap-15'>
                <img src={mail} alt='mail-icon' />
                <a className='text-main text-light xxsmall-text'
                    href="mailto:mailto:info@jamni.ru">
                    mailto:info@jamni.ru</a>
            </div>
        </div>
    )
}
