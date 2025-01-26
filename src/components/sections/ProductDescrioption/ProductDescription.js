import './productDescription.css';
import './media.css'
import useSWRImmutable from 'swr/immutable';
import { getItem } from '../../../db/loadData';
import { useParams, useSearchParams } from 'react-router-dom';
import DescriptionList from './DescriptionList';

export default function ProductDescription() {
    const [searchParams] = useSearchParams();
    const param = useParams();
    const catalog = param["*"].split("/")[0];
    const id = searchParams.get("id")

    const { data } = useSWRImmutable([id, catalog], getItem);
 
    return (
        <section id="product-description">
            <DescriptionList data={data} />
        </section>
    );
}
