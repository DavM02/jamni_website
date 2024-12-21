import "./productOptions.css";

import ProductDetails from "./ProductDetails";
import Slider from "./Slider/Slider";
export default function ProductOptions({ data, catalog }) {



  return (
    <section id="product-options">
      <div className="container">
       
        <div className="section-layout">
          <Slider images={data.images} />
          <ProductDetails catalog={catalog} data={data} />
        </div>
      
      </div>
    </section>
 
  );
}
