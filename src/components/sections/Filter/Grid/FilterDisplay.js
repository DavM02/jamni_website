
import { AnimatePresence } from "framer-motion";
import SmoothAppearance from "../../../ui/SmoothAppearance";
import FilterGrid from "./FilterGrid";
import "./grid.css";
import NoResults from "../../../ui/messages/NoResults";
import DataLoading from "../../../ui/messages/DataLoading";
import FetchError from "../../../ui/messages/FetchError";

export default function FilterDisplay({ isLoading, searchParams, data, error }) {

  const noResults = data && data.every((el) => el.isShown === false);

  return (
    <AnimatePresence mode="wait">
      {error ? (
        <FetchError message={error.message} />
      ) : !isLoading && data ? (
        !noResults ? (
          <SmoothAppearance key={searchParams}>
            <FilterGrid data={data} />
          </SmoothAppearance>

        ) : (
          <NoResults />
        )

      ) : (
        <DataLoading />
      )}

    </AnimatePresence>
  );
}
