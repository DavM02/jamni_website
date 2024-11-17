import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function FilterDisplay({ data }) {

  const gridAreas = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  ];

  let dataIndex = 0;

  return (
    <div className="filter-display">
      {gridAreas.map((el, i) => {
        if (el === 'j') {
          return <div style={{ gridArea: 'j' }} id="article" key="article"></div>;
        }

        const item = data[dataIndex];

        if (item) {
          dataIndex++;
        }

        return (
          <div className="filter-item" key={item?.id} style={{ gridArea: el }}>
            {item ? (
              <LazyLoadImage
                effect="blur"
                height={el === 'l' ? '100%' : '250px'}
                width="100%"
                src={item.img}
                alt={item.name}
                className="image"
              />
            ) : null}
            <span className='xxsmall-text text-main text-black up-case'>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
}
