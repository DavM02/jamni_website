import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
export default function NewsItem({ el }) {
  return (
    <Link className="news-item">
      <div className="news-image placeholder">
        <LazyLoadImage
          src={el.image}
          width={"100%"}
          height={"100%"}
          effect="blur"
          alt={`news-image-${el.id + 1}`}
        />
      </div>
      <div className="row s-between gap-10 xxxsmall-text text-main up-case">
        <span>{el.tag}</span>
        <span>{el.date}</span>
      </div>
      <span className="xsmall-text text-black text-main up-case">
        {el.title}
      </span>
      <p className="xsmall-tex text-black text-main">{el.description}</p>
    </Link>
  );
}
