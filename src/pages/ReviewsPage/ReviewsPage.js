import React from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import ChunkLoading from "../../components/ui/messages/ChunkLoading/ChunkLoading";

const ReviewsSections = React.lazy(() => import("./ReviewsSections"));


function ReviewsPage() {
  return (
    <div id="reviews-page">
      {/* <Suspense fallback={<ChunkLoading />}> */}
      <ReviewsSections />
      {/* </Suspense> */}
    </div>
  );
}


export default PageTransition(React.memo(ReviewsPage));

