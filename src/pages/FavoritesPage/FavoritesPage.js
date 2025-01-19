import React, { Suspense } from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import ChunkLoading from "../../components/ui/messages/ChunkLoading/ChunkLoading";
// const FavoritesSections = React.lazy(() => import("./FavoritesSections"));
function ContactsPage() {
    return (
        <div id="favorites-page">
            {/* <Suspense fallback={<ChunkLoading />}>
                <FavoritesSections />
            </Suspense> */}
        </div>
    );
}
export default PageTransition(React.memo(ContactsPage));
