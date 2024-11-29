import React from 'react'
import { AnimatePresence } from 'framer-motion'
import SmoothAppearance from '../../../ui/SmoothAppearance'
import FilterGrid from './FilterGrid'
import AnimButton from '../../../ui/AnimButton/AnimButton'
import { useNavigate } from 'react-router-dom'
import './grid.css'
export default function FilterDisplay({ isLoading, searchParams, data }) {
    const navigate = useNavigate()
    const noResults = data && data.every((el) => el.isShown === false);
    return (
        <AnimatePresence mode="wait">
            {!isLoading && data ? (
                <SmoothAppearance key={searchParams}>
                    {(!noResults ? (
                        <FilterGrid data={data} />
                    ) : (

                        <div className='no-results center-gr'>
                            <h3 className='up-case'>no results found</h3>
                            <AnimButton onClick={() => navigate('./')}>go back</AnimButton>
                        </div>

                    ))}

                </SmoothAppearance>
            ) : (
                <SmoothAppearance>
                    <div className="row center-x center-y">
                        <h2>Loading...</h2>
                    </div>
                </SmoothAppearance>
            )}
        </AnimatePresence>
    )
}
