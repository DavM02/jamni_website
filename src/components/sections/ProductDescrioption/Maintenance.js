import React from 'react';

export default function Maintenance({ content }) {
    return (
        <ol className="care-rules xsmall-text text-main text-black-secondary">
            {content.map((el, i) => (
                <li key={i}>
                    <span>{el}</span>
                </li>
            ))}
        </ol>
    );
}
