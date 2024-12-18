import React from 'react';

export default function Maintenance({ content }) {
    return (
        <ol className="care-rules">
            {content.map((el, i) => (
                <li className="xsmall-text text-main" key={i}>
                    <span>{el}</span>
                </li>
            ))}
        </ol>
    );
}
