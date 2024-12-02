import React, { Suspense } from "react";
import ChunkLoading from "../../../components/ui/messages/ChunkLoading/ChunkLoading";
import PageTransition from "../../../components/PageTransition/PageTransition";

const DecorSections = React.lazy(() => import("./DecorSections"));
function DecorPage() {

  return (
    <div id="decor-page">
      <Suspense fallback={<ChunkLoading />}>
        <DecorSections />
      </Suspense>
    </div>
  );
}

export default PageTransition(React.memo(DecorPage));
