import './productsDisplay.css'
import ProductsList from './ProductsList';

export default function ProductsDisplay() {

  const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
      if (item.includes('/')) {

        images[item.replace('./', '')] = r(item);
      }
    });
    return images;
  }

  const getImages = importAll(require.context('../../../assets', true, /\.(png|jpe?g|svg)$/));

  console.log('mmmmm')
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
