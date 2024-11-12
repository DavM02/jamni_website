import React, { useState } from 'react'
import ProductsImages from './ProductsImages';
export default function ProductsList({ getImages }) {

     const [category, setCategory] = useState('chairs')

    const data = [
        ['диваны', 'sofas'],
        ['кровати', 'beds'],
        ['кресла', 'armchairs'],
        ['стулья', 'chairs'],
        ['пуфы и банкетки', 'poufs'],
        ['бескаркасная мебель', 'unframed'],
        ['уличная мебель', 'outdoor'],
        ['постельное белье', 'bedding'],
        ['декор', 'decor'], ['шторы', 'curtains']
    ];

 

    return (
        <>
            <div className='row center-x'>
                <ul className='column center-y'>
                    {data.map((el, i) => (
                        <li data-num={`(${'0' + (i + 1)})`} key={i}
                            style={{ color: el[1] === category ? '#E3E3E3' : 'var(--black)' }}
                            onMouseEnter={() => setCategory(el[1])}>
                            <h2>{el[0]}</h2>
                        </li>
                    ))}
                </ul>
            </div>
            <ProductsImages
                data={data}
                getImages={getImages}
                category={category} />
        </>
    )
}
