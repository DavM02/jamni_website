import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ArticleImages({ images }) {
    return (
        <>
            <div className="article-image e">
                <LazyLoadImage src={images[0]} width="100%" height="100%" effect="blur" alt="article-image" />
            </div>
            <div className="article-image h">
                <LazyLoadImage src={images[1]} width="100%" height="100%" effect="blur" alt="article-image" />
            </div>
            <div className="gap-c"></div>
            <div className="article-image i">
                <LazyLoadImage src={images[2]} width="100%" height="100%" effect="blur" alt="article-image" />
            </div>
        </>
    );
}
