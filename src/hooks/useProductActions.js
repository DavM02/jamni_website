import useSWRImmutable from "swr/immutable";
import { userCartStore } from "../stores/cartStore";
import { userFavStore } from "../stores/favStore";
import { modalStore } from "../stores/modalStore";
import { getItem } from "../db/loadData";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
function useProductActions(productId) {
    const addToCart = userCartStore((state) => state.addProduct);
    const { addProduct: addToFav, products } = userFavStore();
    const { toggleAdded } = modalStore();
    const { toggleFav } = modalStore();
    const isFav = products.some((el) => productId === el.id)

    const [searchParams] = useSearchParams()

    const id = searchParams.get("id")

    const { catalog } = useParams()

    const { data: productData } = useSWRImmutable(
        [id, catalog],
        getItem
    );

    const handleAddToCart = (e, configuration = [], data) => {

       if(e) e.preventDefault()

        const product = data ?? productData

        const newProduct = {
            catalog: product.id.split('_')[1],
            product: product.product,
            image: product.image ?? product.images[0],
            name: product.name,
            collection: product.collection,
            id: product.id,
            price: product.price,
            quantity: product.quantity ?? 0,
            priceConfig:  ((configuration && configuration.length)? configuration.reduce((sum, item) => sum + item.price * item.quantity, 0) : 0),
            configuration: (configuration && configuration.length) ? configuration : undefined
        };

        if (e?.target instanceof HTMLFormElement) {
 
            const formData = new FormData(e.target);

            for (let [key, value] of formData.entries()) {
                newProduct[key] = value;
    
            }

        }
        addToCart(newProduct);
        toggleAdded();
        setTimeout(() => {
            toggleAdded();
        }, 1500);
    };

    const handleAddToFav = (product, ref) => {

        const newProduct = {
            catalog: product.id.split('_')[1],
            product: product.product,
            image: product.images[0],
            name: product.name,
            collection: product.collection,
            id: product.id,
            price: product.price,
        };

        if (ref) {
            const formData = new FormData(ref.current);

            for (let [key, value] of formData.entries()) {
                newProduct[key] = value;
            }
        }

        addToFav(newProduct);
        toggleFav();
        setTimeout(() => {
            toggleFav();
        }, 1500);
    };

    return {
        handleAddToCart,
        handleAddToFav,
        isFav
    };
}

export default useProductActions;
