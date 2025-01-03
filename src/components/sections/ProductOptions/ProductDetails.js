import ProductHeader from "./ProductHeader";
import DownloadDetails from "./DownloadDetails";
import Form from "./Form";
export default function ProductDetails({ data, catalog }) {
   return (
    <div className="product-details">
       <ProductHeader collection={data.collection} name={data.name} />
      <h4>{data.product + " " + data?.name}</h4>
      <span className="small-text text-main text-black-secondary">
        {data?.price.toLocaleString("ru-RU")} руб
      </span>
      <DownloadDetails catalog={catalog} />
      <Form
        data={data}
        catalog={catalog}
      />
    </div>
  );
}
