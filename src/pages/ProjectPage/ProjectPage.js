import React, { Suspense } from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import ChunkLoading from "../../components/ui/messages/ChunkLoading/ChunkLoading";
const ProjectSections = React.lazy(() => import("./ProjectSections"));
function ProjectPage() {
  return (
    <div id="contacts-page">
      <Suspense fallback={<ChunkLoading />}>
        <ProjectSections />
      </Suspense>
    </div>
  );
}
export default PageTransition(React.memo(ProjectPage));
