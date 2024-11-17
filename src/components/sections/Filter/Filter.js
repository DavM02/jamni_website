import React from 'react'
import FilterDisplay from './FilterDisplay'
import FilterParams from './FilterParams'
import './filter.css'
export default function Filter({ data }) {
    return (
        <section id='filter'>
            <div className='container'>
                <div className='section-layout'>
                    <FilterParams />
                    <FilterDisplay data={data} />
                </div>
            </div>
        </section>
    )
}
