import React, { Suspense } from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import ChunkLoading from "../../components/ui/messages/ChunkLoading/ChunkLoading";
import ReviewsSections from "./ReviewsSections";
// const ReviewsSections = React.lazy(() => import("./ReviewsSections"));


function ReviewsPage() {
  return (
    <div id="news-page">
      {/* <Suspense fallback={<ChunkLoading />}> */}
        <ReviewsSections />
      {/* </Suspense> */}
    </div>
  );
}

 
export default PageTransition(React.memo(ReviewsPage));

 