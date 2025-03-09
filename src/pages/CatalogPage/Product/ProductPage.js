import React from "react";
import PageTransition from "../../../components/PageTransition/PageTransition";
import ChunkLoading from "../../../components/ui/messages/ChunkLoading/ChunkLoading";

const ProductSections = React.lazy(() => import("./ProductSections"));

function ProductPage() {
  return (
    <div id="product-page">
      {/* <Suspense fallback={<ChunkLoading />}> */}
      <ProductSections />
      {/* </Suspense> */}
    </div>
  );
}

export default PageTransition(React.memo(ProductPage));
