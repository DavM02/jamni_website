import useSWRImmutable from "swr/immutable";
import { userCartStore } from "../stores/cartStore";
import { userFavStore } from "../stores/favStore";
import { modalStore } from "../stores/modalStore";
import { getItem } from "../db/loadData";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
function useProductActions() {
    const addToCart = userCartStore((state) => state.addProduct);
    const addToFav = userFavStore((state) => state.addProduct);
    const { toggleAdded } = modalStore();
    const { toggleFav } = modalStore();

    const [searchParams] = useSearchParams()

    const id = parseInt(searchParams.get("id"));

    const { catalog } = useParams()

    const { data: product } = useSWRImmutable(
        [id, catalog, id + catalog],
        getItem
    );

    const handleAddToCart = (e, configuration = []) => {

        const formData = new FormData(e.target);

        e.preventDefault()
        const newProduct = {
            catalog,
            product: product.product,
            image: product.images[0],
            name: product.name,
            collection: product.collection,
            id: configuration.length ? product.id + "_with-config" : product.id,
            price: product.price + (configuration.length ? configuration.reduce((sum, item) => sum + item.price * item.quantity, 0) : 0),
            configuration: configuration.length ? configuration : undefined
        };

        for (let [key, value] of formData.entries()) {
            newProduct[key] = value;
        }

        addToCart(newProduct);
        toggleAdded();
        setTimeout(() => {
            toggleAdded();
        }, 1500);
    };

    const handleAddToFav = (product, ref) => {



        const newProduct = {
            catalog,
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
    };
}

export default useProductActions;
