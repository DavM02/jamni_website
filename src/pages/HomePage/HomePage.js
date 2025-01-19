import React, { Suspense } from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import ChunkLoading from "../../components/ui/messages/ChunkLoading/ChunkLoading";
const HomeSections = React.lazy(() => import("./HomeSections"));
function HomePage() {
  return (
    <div id="home-page">
      {/* <Suspense fallback={<ChunkLoading />}> */}
        <HomeSections />
      {/* </Suspense> */}
    </div>
  );
}
export default PageTransition(React.memo(HomePage));
