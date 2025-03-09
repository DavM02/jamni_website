
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Slide({ el, activeSlide, adjustTransition }) {
    return (
        <div
            className={'slider-item'}>
            <div
                style={{
                    transition: adjustTransition ? 'var(--transition) 1s width, var(--transition) 1s height' : 'none'
                }}
                className={`slider-image ${el.index === activeSlide ? 'active-center' : (el.index === activeSlide - 1 || el.index === activeSlide + 1) ? 'active-side' : 'inactive'}`}
            >
                <LazyLoadImage
                    // visibleByDefault={true} 
                    width={'100%'}
                    height={'100%'}
                    effect='blur'
                    src={el.image} alt={`slider-image-${el.index + 1}`} />
            </div>
            <div style={{ opacity: adjustTransition ? 0 : 1 }}>
                <span className='xsmall-text text-main text-black up-case'>{el.name}</span>
                <p className='xsmall-text text-main text-black'>{el.description}</p>
            </div>
        </div>
    );
}
