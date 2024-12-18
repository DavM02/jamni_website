import React from 'react';

export default function TechnicalSpecifications({ content }) {
    return (
        <>
            <span className="xxsmall-text text-main up-case">размеры:</span>
            <ul className="sizes">
                {Object.entries(content.sizes).map(([key, value], i) => (
                    <li className="xsmall-text text-main" key={i}>
                        <span>
                            <b>{key}:</b> {value.join(' / ')}
                        </span>
                    </li>
                ))}
            </ul>
            <span className="xxsmall-text text-main up-case">материалы:</span>
            <ul className="materials">
                {Object.entries(content.materials).map(([key, value], i) => (
                    <li className="xsmall-text text-main" key={i}>
                        <span>
                            <b>{key}:</b> {value}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
}
