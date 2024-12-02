import NewsItem from "./NewsItem";
import { AnimatePresence } from "framer-motion";
import SmoothAppearance from "../../ui/SmoothAppearance";
import NoResults from "../../ui/messages/NoResults";
import DataLoading from "../../ui/messages/DataLoading";
export default function NewsDisplay({ data, isLoading, searchParams }) {
  const visibleItems = data && data.filter((item) => item?.isShown !== false);
  const noResults = data && data.every((el) => el.isShown === false);

  return (
    <AnimatePresence mode="wait">
      {!isLoading && data ? (
        <SmoothAppearance key={searchParams}>
          {!noResults ? (
            <div className="section-layout">
              {visibleItems.map((el, i) => {
                return <NewsItem key={el.id} el={el} />;
              })}
            </div>
          ) : (
            <NoResults />
          )}
        </SmoothAppearance>
      ) : (
        <DataLoading />
      )}
    </AnimatePresence>
  );
}
