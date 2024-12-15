import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Thumbnail({ src, alt, isActive, onClick }) {
    return (
        <div
            className="thumbnail-image"
            style={{ opacity: isActive ? 0.3 : 1 }}
            onClick={onClick}
        >
            <LazyLoadImage
                width="100%"
                height="100%"
                effect="blur"
                src={src}
                alt={alt}
            />
        </div>
    );
}
