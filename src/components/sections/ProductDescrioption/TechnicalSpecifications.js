import React from 'react';
import sketch from '../../../assets/bed-sketch.jpg'
import { useParams } from 'react-router-dom';
export default function TechnicalSpecifications({ content }) {
     const path  = useParams()
    const catalog = path['*']
    return (
        <div className='row center-y gap-35 wrap s-between'>
            <div>
                <span className="xxsmall-text text-main text-black-secondary up-case">размеры:</span>
                <ul className="sizes xsmall-text text-main text-black-secondary">
                    {Object.entries(content.sizes).map(([key, value], i) => (
                        <li key={i}>
                            <span>
                                <b>{key}:</b> {value.join(' / ')}
                            </span>
                        </li>
                    ))}
                </ul>
                <span className="xxsmall-text text-main text-black-secondary up-case">материалы:</span>
                <ul className="materials xsmall-text text-main text-black-secondary">
                    {Object.entries(content.materials).map(([key, value], i) => (
                        <li key={i}>
                            <span>
                                <b>{key}:</b> {value}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            {catalog.includes('beds') && <div className='bed-sketch'>
                <img alt='bed-sketch' src={sketch} />
            </div>}

        </div>
    );
}
