import React, { Suspense } from "react";
import ChunkLoading from "../../../components/ui/messages/ChunkLoading/ChunkLoading";
import PageTransition from "../../../components/PageTransition/PageTransition";
 
const PoufsSections = React.lazy(() => import("./PoufsSections"));
function PoufsPage() {

  return (
    <div id="decor-page">
      <Suspense fallback={<ChunkLoading />}>
        <PoufsSections />
      </Suspense>
    </div>
  );
}

export default PageTransition(React.memo(PoufsPage));
