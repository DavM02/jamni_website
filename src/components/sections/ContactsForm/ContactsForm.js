
import AnimatedText from '../../scroll/TextAnimation'
import mockup from '../../../assets/Mockup.png';
import './contactForm.css'
 
import Form from './Form';

export default function ContactsForm() {
  return (
    <section id='contact-form'>
      <div className='container'>
        <div className='row gap-50 center-y s-between'>

          <div className='text-wrapper'>
            <AnimatedText text={'Бесплатный доступ к базе 3D-моделей'} as={'small-heading'} canter={false} />
            <p className='xsmall-text text-main text-black'>
              В рамках партнерской программы для дизайнеров, мы сделали бесплатный доступ к базе 3D-моделей. Теперь вы можете просто заполнить анкету, и без проблем использовать готовые 3D-модели мебели Jamni в своих проектах!
            </p>
            <Form />
          </div>

          <div className='mockup'>
            <img src={mockup} alt='mobile-app' />
          </div>

        </div>

      </div>
    </section>
  )
}
