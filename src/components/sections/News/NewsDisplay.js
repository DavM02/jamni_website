import NewsItem from "./NewsItem/NewsItem";
import { AnimatePresence } from "framer-motion";
import SmoothAppearance from "../../ui/SmoothAppearance";
import NoResults from "../../ui/messages/NoResults";
import DataLoading from "../../ui/messages/DataLoading";
import FetchError from "../../ui/messages/FetchError";
export default function NewsDisplay({ data, isLoading, searchParams, error }) {
  const visibleItems = data && data.filter((item) => item?.isShown !== false);
  const noResults = data && data.every((el) => el.isShown === false);

  return (
    <AnimatePresence mode="wait">
      {error ? (
        <FetchError message={error.message} />
      ) : (
        !isLoading && data ? (

          !noResults ? (
            <SmoothAppearance key={searchParams} className="section-layout">
              {visibleItems.map((el, i) => {
                return <NewsItem key={el.id} el={el} />;
              })}
            </SmoothAppearance>
          ) : (
            <NoResults />
          )
        ) : (
          <DataLoading />
        )
      )

      }
    </AnimatePresence>
  );
}


