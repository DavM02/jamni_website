import MoreProducts from "../../../components/sections/MoreProducts/MoreProducts";
import ProductDescription from "../../../components/sections/ProductDescrioption/ProductDescription";
import ProductOptions from "../../../components/sections/ProductOptions/ProductOptions";
import BuildSet from "../../../components/sections/BuildSet/BuildSet";
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

  const id = searchParams.get("id")
 
  const { data, error, isLoading } = useSWRImmutable(
    [id, catalog],
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
            <SmoothAppearance data-page={catalog} key={id}>
            <ProductOptions data={data} />
            <ProductDescription data={data} />
           
                {(catalog === "sofas") && (
                  <Configuration price={data.price} />
                )}
                <BuildSet />
            <MoreProducts />
          </SmoothAppearance>
        ) : (
          <DataLoading key={"loading"} />
        )}
      </AnimatePresence>
    </>
  );
}
