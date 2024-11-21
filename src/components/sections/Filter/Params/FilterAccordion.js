import React, { useState } from 'react'
import useFilter from '../../../../hooks/useFilter'
export default function FilterAccordion({ headline, filterParam, data, elHeight }) {
    const [open, setOpen] = useState(false)
 
    const { handleSearchParams } = useFilter(filterParam)
 
    return (
        <>
            <div className='row center-y s-between'>
                <span className='xsmall-text up-case'>
                    {headline}
                </span>
                <span
                    className='open-accordion'
                    style={{ margin: !open ? '0 25px 0 0' : '-3px 23px 0px 0px' }} onClick={() => setOpen(!open)}>
                    {open ? '—' : '+'}
                </span>

            </div>
            <div
                className='accordion'
                style={{ height: open ? `${data.length * elHeight + (data.length - 1) * 15 + 20}px` : '0px' }}
            >
                <ul className='column gap-15'>
                    {data.map((el, i) => {
                        return <li key={i} className='row center-y gap-10'>
                            <div className='custom-radio'>
                                <input onChange={(e) => handleSearchParams(e.target.value)} id={el} type='checkbox' value={el} />
                                <div className='input-state'>
                                </div>
                            </div>
                            <span>{el}</span>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}
