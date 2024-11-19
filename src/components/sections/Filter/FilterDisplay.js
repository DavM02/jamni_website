 import Article from './Article';
 import FilterItem from './FilterItem';
import FilterPagination from './FilterPagination';
export default function FilterDisplay({ data, dataLength }) {

  let gridAreas = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  ];
 
  
  let dataIndex = 0;
   return (
    <div className="filter-display">
       {data && gridAreas.slice(0, data.length >= 9 ? data.length+1 : data.length).map((el, i) => {
        if (el === 'j') {
          return <Article style={{ gridArea: 'j' }} key="article"></Article>;
        }

        const item = data[dataIndex];

        if (item) {
          dataIndex++;
        }

        return <FilterItem key={item.id} el={el} item={item}/>
      })}
       {data && <FilterPagination pagesCount={Math.ceil(dataLength / 17)} />}  
    </div>
 
  );
}
