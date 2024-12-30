import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

 export default function NewsItem({ el, height }) {
  const navigate = useNavigate()
  return (
    <div className="news-item" 
      onClick={() => navigate(`/news/article/${el.title.toLowerCase().replace(/\s+/g, '_')}?id=${el.id}`)} >
      <div className="news-image placeholder"
        style={height ? { height: `${height}` } : {}}
      >
        <LazyLoadImage
          src={el.previewImage}
          width={"100%"}
          height={"100%"}
          effect="blur"
          alt={`news-image-${el.id + 1}`}
        />
      </div>
      <div className="row s-between gap-10 xxxsmall-text text-main text-gray up-case">
        <span>{el.tag}</span>
        <span>{el.date}</span>
      </div>
      <span className="xsmall-text text-black text-main up-case">
        {el.title}
      </span>
      <p className="xsmall-text text-black text-main">{el.description}</p>
    </div>
  );
}
