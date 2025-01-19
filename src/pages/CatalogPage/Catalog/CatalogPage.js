import React, { Suspense } from "react";
import ChunkLoading from "../../../components/ui/messages/ChunkLoading/ChunkLoading";
import PageTransition from "../../../components/PageTransition/PageTransition";
import { useParams } from "react-router-dom";
// const CatalogSections = React.lazy(() => import("./CatalogSections"));
function DecorPage() {
    const { catalog } = useParams()
    return (
        <div id={`${catalog}-page`}>
            {/* <Suspense fallback={<ChunkLoading />}>
                <CatalogSections path={catalog}/>
            </Suspense> */}
        </div>
    );
}

export default PageTransition(React.memo(DecorPage));
