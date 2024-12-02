import React, { memo } from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import ReviewsSections from "./ReviewsSections";

function ReviewsPage() {
  return (
    <div id="news-page">
      <ReviewsSections />
    </div>
  );
}

export default PageTransition(memo(ReviewsPage));
