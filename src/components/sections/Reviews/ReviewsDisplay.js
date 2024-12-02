import { AnimatePresence } from "framer-motion";
import SmoothAppearance from "../../ui/SmoothAppearance";
import NoResults from "../../ui/messages/NoResults";
import DataLoading from "../../ui/messages/DataLoading";
import ReviewItem from "./ReviewItem";
export default function NewsDisplay({ data, isLoading, searchParams }) {
    const noResults = data && data.every((el) => el.isShown === false);

    return (
        <AnimatePresence mode="wait">
            {!isLoading && data ? (
                <SmoothAppearance key={searchParams}>
                    {!noResults ? (
                        <div className="section-layout">
                            {data.map((el, i) => {
                                return <ReviewItem key={i} el={el} />;
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
