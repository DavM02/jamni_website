import React, { useState } from 'react'
import './selection.css'
import arrow from '../../../../assets/icons/arrow-up.svg'
export default function Selection({ name, data }) {
    const [value, setValue] = useState(data[0])
    const [open, setOpen] = useState(false)
    return (
        <div className='custom-selection'>
            <div className='selection-header row center-y s-between' 
            style={{borderRadius: open ? '20px 20px 0 0px' : '20px'}}
            onClick={() => {setOpen((prev => !prev))}}>
                <span className='option-key xsmall-text text-main text-black'>{name}</span>
                <img src={arrow}  alt='arrow' style={{transform: open ? 'rotate(-180deg)' : 'none'}}/>
            </div>
            <input value={value} type='hidden' name={name} />
            <ul className='selection-items column gap-10' 
                style={{ height: open ? `${30 * data.length + 10 * (data.length - 1) + 48}px` : 0 }}

            >
                {data.map((el, i) => <li key={i} onClick={() => setValue(el)}>
                    <span className='xsmall-text text-main text-black'>
                        {el}
                    </span>
                </li>)}
            </ul>
        </div>
    )
}
