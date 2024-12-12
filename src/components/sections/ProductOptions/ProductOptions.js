import ProductImageSlider from "./ProductImageSlider";
import "./productOptions.css";
import useSWRImmutable from "swr/immutable";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import { getItem } from "../../../db/loadData";
export default function ProductOptions() {
  const [searchParams] = useSearchParams();
  const param = useParams();
  const catalog = param["*"].split("/")[0];
  const id = parseInt(searchParams.get("id"));

  const { data, error, isLoading } = useSWRImmutable(
    [id, catalog, id + catalog],
    getItem
  );

  console.log(data);

  return (
    <section id="product-options">
      <div className="container">
        <div className="section-layout">
          <ProductImageSlider />
        </div>
      </div>
    </section>
  );
}
