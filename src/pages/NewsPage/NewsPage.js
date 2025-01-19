

import React from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import LazyComponent from "../../components/LazyCompontent/LazyComponent";
 

function NewsPage() {
  return (
    <div id="news-page">
      <LazyComponent/>
    </div>
  );
}

export default PageTransition(React.memo(NewsPage));

// import React, { Suspense } from "react";
// import PageTransition from "../../components/PageTransition/PageTransition";
// import ChunkLoading from "../../components/ui/messages/ChunkLoading/ChunkLoading";

// const NewsSections = React.lazy(() => import("./NewsSections"));

// function NewsPage() {
//   return (
//     <div id="news-page">
//       <Suspense fallback={<ChunkLoading />}>
//         <NewsSections />
//       </Suspense>
//     </div>
//   );
// }

// export default PageTransition(React.memo(NewsPage));
