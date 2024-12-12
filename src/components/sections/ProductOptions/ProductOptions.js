import ProductImageSlider from "./ProductImageSlider";
import "./productOptions.css";
import useSWRImmutable from "swr/immutable";
import { useParams, useSearchParams } from "react-router-dom";
import { getItem } from "../../../db/loadData";
import ProductDetails from "./ProductDetails";
export default function ProductOptions() {
  const [searchParams] = useSearchParams();
  const param = useParams();
  const catalog = param["*"].split("/")[0];
  const id = parseInt(searchParams.get("id"));

  const { data, error, isLoading } = useSWRImmutable(
    [id, catalog, id + catalog],
    getItem
  );

 
  return (
    <section id="product-options">
      <div className="container">
        <div className="section-layout">
          <ProductImageSlider images={data?.images} />
          <ProductDetails
            
            catalog={data?.collection}
            data={data}
          />
        </div>
      </div>
    </section>
  );
}
