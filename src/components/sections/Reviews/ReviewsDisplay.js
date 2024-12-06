import { AnimatePresence } from "framer-motion";
import SmoothAppearance from "../../ui/SmoothAppearance";
import NoResults from "../../ui/messages/NoResults";
import DataLoading from "../../ui/messages/DataLoading";
import ReviewItem from "./ReviewItem";
import FetchError from "../../ui/messages/FetchError";
export default function NewsDisplay({ data, isLoading, searchParams, error }) {
    const noResults = data && data.every((el) => el.isShown === false);
 
    return (
        <AnimatePresence mode="wait">
            {error ? (
                <FetchError message={error.message} />
            ) : !isLoading && data ? (
                !noResults ? (
                    <SmoothAppearance key={searchParams} className="section-layout">
                        {data.map((el, i) => {
                            return <ReviewItem key={i} el={el} />;
                        })}
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
