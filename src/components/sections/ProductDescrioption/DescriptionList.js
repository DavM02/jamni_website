import React, { useState } from 'react';
import DescriptionItem from './DescriptionItem';
import useDebounce from '../../../hooks/useDebounce';

export default function DescriptionList({ data }) {
    const [open, setOpen] = useState('technical');

    const debouncedFunction = useDebounce();

    const handleToggle = (section) => {
        setOpen((prev) => (prev === section ? '' : section));
    };
 
    const sections = [
        { key: 'technical', label: 'технические характеристики', content: data?.technicalSpecifications },
        { key: 'maintenance', label: 'обслуживание', content: data?.maintenance },
        { key: 'packing', label: 'упаковка', content: data?.packing },
        { key: 'description', label: 'описание продукта', content: [data?.productDescription, data?.images, data?.advantages] },
    ];

    return (
        <ul className="show-descriptions">
            {sections.map(({ key, label, content }) => (
                <DescriptionItem
                    key={key}
                    sectionKey={key}
                    label={label}
                    content={content}
                    open={open}
                    onToggle={() => debouncedFunction(500, () => {
                        handleToggle(key);
                    })}

                />
            ))}
        </ul>
    );
}
