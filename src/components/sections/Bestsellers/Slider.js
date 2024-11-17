import img1 from '../../../assets/img_6.webp';
import img2 from '../../../assets/img_7.webp';
import img3 from '../../../assets/img_8.webp';
import img4 from '../../../assets/img_9.webp';
import img5 from '../../../assets/img_10.webp';
import arrow from '../../../assets/icons/arrow-left-small.svg';
import Slide from './Slide';
import InfiniteSlider from '../../InfiniteSlider/InfiniteSlider';

export default function Slider() {
    const initialItems = [
        { name: "Лампа Pompidou", image: img1 },
        { name: "Кресло Lounge", image: img2 },
        { name: "Кровать Foster", image: img3 },
        { name: "Свечи Foster", image: img4 },
        { name: "Диван Foster", image: img5 },
        { name: "Лампа Pompidou", image: img1 },
        { name: "Кресло Lounge", image: img2 },
        { name: "Кровать Foster", image: img3 },
        { name: "Свечи Foster", image: img4 },
        { name: "Диван Foster", image: img5 },
    ]


    return (
        <>
            <InfiniteSlider sliderData={initialItems} wrapper={Slide}>
                <div className='heading-wrapper'>
                    <h1 className='text-center'>Бестселлеры</h1>
                </div>
                <div className='learn-mone row gap-15' >
                    <span className='text-main xsmall-text up-case'>смотреть больше</span>
                    <img src={arrow} alt='image-left' style={{ width: '25px' }} />
                </div>
            </InfiniteSlider>
        </>
    );
}
