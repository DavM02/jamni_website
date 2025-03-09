
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Advantages from './Advantages'
export default function ProductVisuals({ data, images, advantages, }) {

    return (
        data && <div>
            <div className='product-visuals'>
                <div>
                    <LazyLoadImage
                        width="100%" height="100%" effect="blur"
                        alt={'product-visuals'}
                        src={images[1]} />
                </div>
                <div>
                    {data.text.map((el, i) => {
                        return <p key={i} className='xsmall-text text-main text-black-secondary'>{el}</p>
                    })}
                    <div className='row gap-40'>
                        <div className='self-end-y'>

                            <LazyLoadImage
                                height='265px' width='210px' effect="blur"
                                alt={'product-visuals'}
                                src={images[2]} />
                        </div>
                        <div>

                            <LazyLoadImage
                                width="100%" height="385px" effect="blur"
                                alt={'product-visuals'}
                                src={images[3]} />
                        </div>
                    </div>
                </div>
            </div>
            <Advantages data={advantages} />
        </div>
    )
}
