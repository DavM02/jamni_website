import React from 'react';

export default function TechnicalSpecifications({ content }) {
    return (
        <>
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
        </>
    );
}
