
import icon1 from '../../../assets/icons/3d-modeling.svg'
import icon2 from '../../../assets/icons/medal-star.svg'
import icon3 from '../../../assets/icons/crown.svg'
import icon4 from '../../../assets/icons/logistic.svg'

import num1 from '../../../assets/icons/01.svg'
import num2 from '../../../assets/icons/02.svg'
import num3 from '../../../assets/icons/03.svg'
import num4 from '../../../assets/icons/04.svg'
import Observer from '../../scroll/Observer'

export default function Advantages() {
    const data = [
        { name: "3D-модель<br/>мебели", icon: icon1, num: num1 },
        { name: "гарантия качества<br/>и сроков", icon: icon2, num: num2 },
        { name: "индивидуальный<br/>заказ", icon: icon3, num: num3 },
        { name: "Доставка<br/>и монтаж", icon: icon4, num: num4 }
    ];
    return (
        <div className='row center-x'>
            <Observer className='advantages'>
                {data.map((el, i) => {
                    return <div key={i} className='number center-flex gap-20' style={{ transitionDelay: `${i / 5}s` }}>
                            <div>
                                <img src={el.num} alt={i} />
                            </div>
                            <div className='row gap-15'>
                                <img className='icon' src={el.icon} alt={`icon-${i}`} />
                                <span
                                    className='xsmall-text text-main text-black'
                                    dangerouslySetInnerHTML={{ __html: el.name }}
                                />
                            </div>
                    </div>
                })}
            </Observer>
        </div>
    )
}
