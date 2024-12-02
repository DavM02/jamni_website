import React, { memo, Suspense } from "react";
import PageTransition from "../../components/pageTransition/PageTransition";
import ChunkLoading from "../../components/ui/ChunkLoading/ChunkLoading";
const HomeSections = React.lazy(() => import("./HomeSections"));
function HomePage() {
  return (
    <div id="home-page">
      <Suspense fallback={<ChunkLoading />}>
        <HomeSections />
      </Suspense>
    </div>
  );
}
export default PageTransition(memo(HomePage));
