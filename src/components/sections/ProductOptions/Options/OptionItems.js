import React from 'react'
import Selection from '../../../ui/inputs/Selection/Selection'
export default function OptionItems({label, style, data}) {
 
    return <div style={style}>
        <span className="option-key xsmall-text text-main text-black">
            {label}
        </span>
        <Selection 
        name={label} 
        data={data} 
   
        />
    </div>
}
