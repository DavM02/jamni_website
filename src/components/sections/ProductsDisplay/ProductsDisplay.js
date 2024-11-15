import './productsDisplay.css'
import ProductsList from './ProductsList';

export default function ProductsDisplay() {

  const importAll = (r) => {
    let images = {};
    let folderCount = {};

    r.keys().forEach((item) => {
      const folderName = item.substring(0, item.lastIndexOf('/'));

      if (!folderCount[folderName]) {
        folderCount[folderName] = 0;
      }

      if (folderCount[folderName] < 6) {
        images[item.replace('./', '')] = r(item);
        folderCount[folderName]++;
      }
    });

    return images;
  };

  const getImages = importAll(require.context('../../../assets', true, /\.(png|jpe?g|svg)$/));

  return (
    <section id='products-display'>
      <div className='container'>
        <ProductsList
          getImages={getImages}
        />
      </div>
    </section>
  );
}
