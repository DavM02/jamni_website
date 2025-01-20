import { useParams } from 'react-router-dom';
import Article from './Article';
import FilterItem from './FilterItem';
import { userFavStore } from '../../../../stores/favStore';
export default function FilterGrid({ data }) {

  const {  products  } = userFavStore()
 
   let gridAreas = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  ];
  const visibleItems = data.filter(item => item?.isShown !== false);
 
  let dataIndex = 0;

  const {catalog} = useParams()

  return (
    <div className="filter-display">
      {data && gridAreas.slice(0, visibleItems.length >= 9 ? visibleItems.length + 1 : visibleItems.length).map((area, i) => {
        if (area === 'j') {
          return <Article style={{ gridArea: 'j' }} key="article"></Article>;
        }
        const item = visibleItems[dataIndex];

        if (item) {
          dataIndex++;
        }
     
        return <FilterItem 
  

        key={item.id} 
        item={{...item, catalog, area}} />
      
      })}

    </div>

  );
}
