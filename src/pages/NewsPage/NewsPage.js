import React from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import ChunkLoading from "../../components/ui/messages/ChunkLoading/ChunkLoading";

const NewsSections = React.lazy(() => import("./NewsSections"));

function NewsPage() {
  return (
    <div id="news-page">
      {/* <Suspense fallback={<ChunkLoading />}> */}
      <NewsSections />
      {/* </Suspense> */}
    </div>
  );
}

export default PageTransition(React.memo(NewsPage));

