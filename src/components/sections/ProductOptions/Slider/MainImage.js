
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function MainImage({ images, activeImage }) {
    return (
        <div className="main-image">
            {images.map((el, i) => (
                <div
                    key={i}
                    style={{ left: `calc(100% * (${i - activeImage}))` }}
                >
                    <LazyLoadImage
                        width="100%"
                        height="100%"
                        effect="blur"
                        src={el}
                        alt={`product-image-${i + 1}`}
                    />
                </div>
            ))}
        </div>
    );
}