import React, { Suspense } from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import ChunkLoading from "../../components/ui/messages/ChunkLoading/ChunkLoading";
 
const Order = React.lazy(() => import("../../components/Order/Order"));
function OrderPage() {
    return (
        <div id="contacts-page">
            <Suspense fallback={<ChunkLoading />}>
                <Order />
            </Suspense>
        </div>
    );
}
export default PageTransition(React.memo(OrderPage));
