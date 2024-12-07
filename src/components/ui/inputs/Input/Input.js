import React from 'react'
import './input.css'
export default function Input({ tag, ...props }) {
    const InputTag = tag ?? 'input'
    return (<InputTag className='main-input' {...props} />
    )
}
