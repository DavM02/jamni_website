import React from 'react'
import './checkbox.css'
export default function Checkbox({ ...props }) {
    return (
        <div className="custom-checkbox">
            <input
                {...props}
                type="checkbox"

            />
            <div className="input-state"></div>
        </div>
    )
}
