import { LazyLoadImage } from "react-lazy-load-image-component";
import AddToFav from "../../../ui/buttons/AddToFav/AddToFav";
import { Link } from "react-router-dom";
export default function FilterItem({ item }) {
 

  return (
    <Link
      className="filter-item"
      to={`${item.name.toLowerCase()}?id=${item.id}`}
      style={{ gridArea: item.area }}
    >
      <AddToFav
      data={item} />
      {item ? (
        <div
          className="placeholder"
          style={{
            height:
              item.area === "l"
                ? "calc(var(--filter-item-img-height) * 2 + 101px)"
                : "var(--filter-item-img-height)",
          }}
        >
          <LazyLoadImage
            effect="opacity"
            height={"inherit"}
            width="100%"
            src={item.images[0]}
            alt={item.name}
            className="image"
          />
        </div>
      ) : null}
      <span className="xxsmall-text text-main text-black up-case">
        {item.name}
      </span>
      <span className="xxxsmall-text text-main">
        {item.price.toLocaleString("ru-RU")} руб.
      </span>
      <div className="palette row gap-10">
        {item.colors.map((el, i) => {
          return (
            <div
              key={i}
              style={{
                backgroundColor: `var(--${el})`,
                border: el === "white" ? "1px solid #DDDDDD" : "none",
              }}
            ></div>
          );
        })}
      </div>
    </Link>
  );
}
