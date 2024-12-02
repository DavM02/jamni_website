import React, { memo } from "react";
import PageTransition from "../../components/pageTransition/PageTransition";
import NewsSections from "./NewsSections";

function NewsPage() {
  return (
    <div id="news-page">
      <NewsSections />
    </div>
  );
}

export default PageTransition(memo(NewsPage));
