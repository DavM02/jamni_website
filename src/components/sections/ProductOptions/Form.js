 
import Dimensions from './Dimensions/Dimensions';
import Options from './Options/Options';
import AddToFav from '../../ui/buttons/AttToFav/AddToFav';
import AddToCartButton from '../../ui/buttons/AddToCartButton/AddToCartButton';
import { userCartStore } from '../../../stores/cartStore';

export default function Form({ data }) {

    const addToCart = userCartStore((state) => state.addProduct);
  

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const newProduct = {
            catalog: data?.catalog,
            id: data.id,
            product: data.product,
            image: data.image,
            name: data.name,
            collection: data.collection,
            price: data.price,
        };

 
        for (let [key, value] of formData.entries()) {
            newProduct[key] = value;
        }

    
        addToCart(newProduct);
    }
console.log('lol')
    return (
        <form action="#" onSubmit={(e) => handleSubmit(e)}>
            <div className="row wrap gap-20">
                <Dimensions dimensions={data?.dimensions} />
                <Options options={data?.options} colors={data?.colors} />
            </div>
            <div className="submit-wrapper">
                <AddToCartButton />
                <div className="row center-y center-x gap-10">
                    <AddToFav />
                    <span className="text-main xxsmall-text">В избранное</span>
                </div>
            </div>
        </form>
    );
}
