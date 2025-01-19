import React, { Suspense } from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import ChunkLoading from "../../components/ui/messages/ChunkLoading/ChunkLoading";
 ;
 

// const OrderSections = React.lazy(() => import("./OrderSections"));
function OrderPage() {
  return (
    <div id="order-page">
      {/* <Suspense fallback={<ChunkLoading />}>
        <OrderSections />
         
      </Suspense> */}
    </div>
  );
}
export default PageTransition(React.memo(OrderPage));
