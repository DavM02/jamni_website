
import Contacts from '../../components/sections/Contacts/Contacts'
import AnimatedText from '../../components/scroll/TextAnimation'
import Input from '../../components/ui/inputs/Input/Input'
import AnimButton from '../../components/ui/buttons/AnimButton/AnimButton'
import mockup from '../../assets/Mockup.png';
import './subscribe.css'
import mailIcon from '../../assets/icons/mail.svg'
function ContactsSections() {
    return (
        <>
            <Contacts />
            <section id='subscribe'>
                <div className='container'>

                    <div className='text-wrapper'>
                        <AnimatedText text={'подпишитесь на нашу рассылку'} as={'h5'} canter={false} />
                        <p className='small-text text-main text-black up-case'>
                            получайте <b>скидки</b> и супер предложения
                        </p>
                        <form action='#'>
                            <div className='row wrap gap-15'>
                                <Input type='email' placeholder='Введите свой адрес электронной почты' />
                                <AnimButton type='submit'>

                                    <img src={mailIcon} alt='mail' /> ПОДПИСАТЬСЯ

                                </AnimButton>
                            </div>
                        </form>
                    </div>

                    <div className='mockup'>
                        <img src={mockup} alt='mobile-app' />
                    </div>


                </div>
            </section>
        </>
    )
}
export default ContactsSections