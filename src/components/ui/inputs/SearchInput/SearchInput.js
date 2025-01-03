import React, { useState } from 'react';
import searchIcon from '../../../../assets/icons/search.svg';
 
export default function SearchInput() {
    const [blur, setBlur] = useState(false);
 
    return (
        <div className={`input-wrapper row center-y gap-20 ${blur ? 'is-typing' : ''}`}>
            <label htmlFor='search'>
                <img width={23} height={23} src={searchIcon} alt='search' />
            </label>
            <input
                spellCheck={false}
                id='search'
                 type='search'
                placeholder='Что будем искать?'
                onBlur={() => setBlur(false)}
                onFocus={() => setBlur(true)}
            />
        </div>
    );
}
