import ProductHeader from "./ProductHeader";
import DownloadDetails from "./DownloadDetails";
import Form from "./Form";
export default function ProductDetails({ data, catalog }) {
  const dimensions = data && data?.characteristics[0].dimensions;
  const options = data && data?.characteristics[1].options;

  return (
    <div className="product-details">
      <ProductHeader catalog={data?.collection} name={data?.name} />
      <h4>{data?.product + " " + data?.name}</h4>
      <span className="small-text text-main text-black">
        {data?.price.toLocaleString("ru-RU")} руб
      </span>
      <DownloadDetails />
      <Form
        data={data && {
          id: data.id,
          image: data.images[0],
          product: data.product,
          name: data.name,
          price: data.price,
          options,
          dimensions,
          catalog,
          colors: data.colors,
        }}

      />
    </div>
  );
}
