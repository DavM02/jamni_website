import ProductHeader from "./ProductHeader";
import DownloadDetails from "./DownloadDetails";
import Form from "./Form";
import { useParams } from "react-router-dom";
export default function ProductDetails({ data }) {
  const { catalog } = useParams();

  return (
    <div className="product-details">
      <ProductHeader
        catalog={catalog}
        collection={data.collection}
        name={data.name}
      />
      <h4 lang="ru">{data.product + " " + data?.name}</h4>
      <span className="small-text text-main text-black-secondary">
        {data?.price.toLocaleString("ru-RU")} руб
      </span>
      <DownloadDetails catalog={catalog} />
      <Form data={data} />
    </div>
  );
}
