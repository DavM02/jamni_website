import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ArticleImages({ images }) {
    return (
        <>
            <div style={{ '--area': 'e' }} className="article-image">
                <LazyLoadImage src={images[0]} width="100%" height="100%" effect="blur" alt="article-image" />
            </div>
            <div style={{ '--area': 'h' }} className="article-image">
                <LazyLoadImage src={images[1]} width="100%" height="100%" effect="blur" alt="article-image" />
            </div>
            <div style={{ '--area': 'gap-c' }} ></div>
            <div style={{ '--area': 'i' }} className="article-image">
                <LazyLoadImage src={images[2]} width="100%" height="100%" effect="blur" alt="article-image" />
            </div>
        </>
    );
}
