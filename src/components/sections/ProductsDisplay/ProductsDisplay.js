import './productsDisplay.css';
import ProductsList from './ProductsList';

export default function ProductsDisplay() {
  const importAll = (r) => {
    let images = {};
    let folderCount = 0;
    let limit = 5;

    r.keys().forEach((item) => {
      const fileName = item.substring(item.lastIndexOf('/') + 1, item.lastIndexOf('.'));
      const folderName = item.substring(0, item.lastIndexOf('/')).split('/').pop();

      const currentLimit = folderName === 'chairs' ? 6 : limit;

      const match = fileName.match(new RegExp(`^img_([1-${currentLimit}])$`));

      if (match) {
        images[item.replace('./', '')] = r(item);
        folderCount++;

        if (folderCount === currentLimit) {
          folderCount = 0;
          limit = limit === 5 ? 6 : 5;
        }
      }
    });

    return images;
  };

  const getImages = importAll(require.context('../../../assets', true, /\.(png|jpe?g|svg|webp)$/));

  return (
    <section id="products-display">
      <div className="container">
        <ProductsList getImages={getImages} />
      </div>
    </section>
  );
}
