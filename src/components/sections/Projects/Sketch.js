
import sketh from '../../../assets/sketch.jpg'
import { Link } from 'react-router-dom';
import AnimatedText from '../../scroll/TextAnimation';

export default function Sketch() {


  return (
    <div className='container'>
      <div className='row center-x wrap '>
        <div className='sketch'>
          <img alt='sketch' src={sketh} />
        </div>
        <div className='column center-x gap-40 text-center'>

          <AnimatedText text={'Воплотим ваш проект в уникальную мебель'} as={'middle-heading'} center={true} />


          <p className='xsmall-text text-main text-black'>
            Команда Jamni продолжает работать с профессионалами! Работать с архитекторами, дизайнерами и уникальными проектами — наша страсть, давайте делать это вместе! Мы всегда готовы встретиться с вами в Шоу Руме, подобрать и предоставить материалы, дать доступ к коллекции оцифрованных моделей.
          </p>
          <p className='xsmall-text text-main text-black'>
            Если у вас есть индивидуальный запрос, проект <br /> или необходимо найти и реализовать нестандартное решение для вашего дома или  сада <span>—</span>
            <Link className='xsmall-text text-main text-black'>
              вам сюда
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
