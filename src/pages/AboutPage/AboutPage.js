import React, { Suspense } from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import ChunkLoading from "../../components/ui/messages/ChunkLoading/ChunkLoading";
const AboutSections = React.lazy(() => import("./AboutSections"));
function AboutPage() {
  return (
    <div id="about-page">
      <Suspense fallback={<ChunkLoading />}>
        <AboutSections />
      </Suspense>
    </div>
  );
}

export default PageTransition(React.memo(AboutPage));
