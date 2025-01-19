import React, { Suspense } from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import ChunkLoading from "../../components/ui/messages/ChunkLoading/ChunkLoading";
import { AnimatePresence } from "framer-motion";
import SmoothAppearance from "../../components/ui/SmoothAppearance";

const NewsSections = React.lazy(() => import("./NewsSections"));

function NewsPage() {
  return (
    <div id="news-page">
      <AnimatePresence mode="wait">
        <Suspense fallback={<SmoothAppearance key={'fallback'}>
          <ChunkLoading />
        </SmoothAppearance>}>
       <SmoothAppearance key={'content'}>
            <NewsSections />
       </SmoothAppearance>
        </Suspense>
      </AnimatePresence>
    </div>
  );
}

export default PageTransition(React.memo(NewsPage));

