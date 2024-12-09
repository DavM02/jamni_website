import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ProjectImage({ src, alt }) {
    return (
        <div className="image">
            <LazyLoadImage
                src={src}
                width={"100%"}
                height={"100%"}
                effect="blur"
                alt={alt}
            />
        </div>
    );
}
