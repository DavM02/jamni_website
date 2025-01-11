import MoreProducts from "../../../components/sections/MoreProducts/MoreProducts";
import ProductDescription from "../../../components/sections/ProductDescrioption/ProductDescription";
import ProductOptions from "../../../components/sections/ProductOptions/ProductOptions";
import { useParams, useSearchParams } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { getItem } from "../../../db/loadData";
import { AnimatePresence } from "framer-motion";
import NoResults from "../../../components/ui/messages/NoResults";
import FetchError from "../../../components/ui/messages/FetchError";
import SmoothAppearance from "../../../components/ui/SmoothAppearance";
import DataLoading from "../../../components/ui/messages/DataLoading";
import Configuration from "../../../components/sections/Configuration/Configuration";
export default function ProductSections() {
  const [searchParams, setSearchparams] = useSearchParams();

  const { catalog } = useParams();

  const id = parseInt(searchParams.get("id"));

  const { data, error, isLoading } = useSWRImmutable(
    [id, catalog, id + catalog],
    getItem
  );

  return (
    <>
      <AnimatePresence mode="wait">
        {error ? (
          <FetchError message={error?.message} />
        ) : data === null ? (
          <NoResults level={-1} />
        ) : data && !isLoading ? (
          <SmoothAppearance key={"product"}>
            <ProductOptions data={data}  />
            <ProductDescription data={data} />
                {(catalog === "sofas" || catalog === 'beds') && <Configuration price={data.price} />}
            <MoreProducts />
          </SmoothAppearance>
        ) : (
          <DataLoading />
        )}
        
      </AnimatePresence>


    </>
  );
}
