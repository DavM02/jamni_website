import { Link } from "react-router-dom";
import cube from "../../../assets/icons/cube.svg";
import download from "../../../assets/icons/document-download.svg";
import Radio from "../../ui/inputs/Radio/Radio";
import Selection from "../../ui/inputs/Selection/Selection";
export default function ProductDetails({ catalog, data }) {
  const dimensions = data && data?.characteristics[0].dimensions;
  const options = data && data?.characteristics[1].options;

  return (
    <div className="product-details">
      <div className="row gap-10 xxxsmall-text text-main text-gray up-case">
        <Link to={"/"}>Главная</Link>
        <span>/</span>
        <Link to={"/catalog"}>каталог</Link>
        <span>/</span>
        <Link to={`/catalog/decor?collection=${catalog}`}>{catalog}</Link>
        <span className="text-black">/</span>
        <span className="text-black">{data?.name}</span>
      </div>
      <h4>{data?.product + " " + data?.name}</h4>
      <span className="small-text text-main text-black">
        {data?.price.toLocaleString("ru-RU")} руб
      </span>
      <div className="download-details row gap-30 s-between">
        <div className="row center-y gap-15">
          <div className="icon center-gr">
            <img src={cube} alt="cube" />
          </div>
          <span className="xsmall-text text-main text-black">
            Посмотреть 3D-модель
          </span>
        </div>
        <div className="row center-y gap-15">
          <div className="icon center-gr">
            <img src={download} alt="download" />
          </div>
          <span className="xsmall-text text-main text-black">
            Скачать 3D-модель
          </span>
        </div>
      </div>
      <form action="#">
        <div className="column gap-20">
          {dimensions &&
            dimensions.map((el, i) => {
              const [key, values] = Object.entries(el)[0];

              if (key === "ширина") {
                const heightDimension = dimensions.find(
                  (dim) => Object.keys(dim)[0] === "высота"
                );
                const height = heightDimension?.высота || [];

                return (
                  <div key={i}>
                    <span className="option-key xsmall-text text-main text-black">
                      Размер
                    </span>
                    <div className="options row wrap">
                      {values.map((el, i) => (
                        <Radio
                          key={i}
                          text={`${el.value}x${height[i]?.value || ""} ${
                            el.unit
                          }`}
                          name="sizes"
                        />
                      ))}
                    </div>
                  </div>
                );
              } else if (key === "высота") {
                return null;
              } else {
                return (
                  <div key={i}>
                    <span className="option-key xsmall-text text-main text-black">
                      {key}
                    </span>
                    <div className="options row wrap">
                      {values.map((el, i) => (
                        <Radio
                          key={i}
                          text={`${el.value} ${el.unit}`}
                          name={key}
                        />
                      ))}
                    </div>
                  </div>
                );
              }
            })}
          {options &&
            options.map((el, i) => {
              const [key, value] = Object.entries(el)[0];
              return (
                <div key={i}>
                  <span className="option-key xsmall-text text-main text-black">
                    {key}
                  </span>
                  <Selection key={i} name={key} data={value} />
                </div>
              );
            })}
        </div>
      </form>
    </div>
  );
}
