import React from 'react'
import SmoothAppearance from '../SmoothAppearance'
export default function DataLoading() {
    return (
        <SmoothAppearance key={'loading'}>
            <div className="loading row center-x center-y">
                <h2>Loading...</h2>
            </div>
        </SmoothAppearance>
    )
}
