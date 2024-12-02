import NewsItem from "./NewsItem";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimButton from "../../ui/AnimButton/AnimButton";
import SmoothAppearance from "../../ui/SmoothAppearance";
export default function NewsDisplay({ data, isLoading, searchParams }) {
  const visibleItems = data && data.filter((item) => item?.isShown !== false);
  const noResults = data && data.every((el) => el.isShown === false);

  const navigate = useNavigate();
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
            <div className="no-results center-gr">
              <h3 className="up-case">no results found</h3>
              <AnimButton onClick={() => navigate(".")}>go back</AnimButton>
            </div>
          )}
        </SmoothAppearance>
      ) : (
        <SmoothAppearance>
          <div className="loading row center-x center-y">
            <h2>Loading...</h2>
          </div>
        </SmoothAppearance>
      )}
    </AnimatePresence>
  );
}
