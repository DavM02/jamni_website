import React from 'react'
import { AnimatePresence } from 'framer-motion'
import SmoothAppearance from '../../../ui/SmoothAppearance'
import FilterGrid from './FilterGrid'
export default function FilterDisplay({ isLoading, searchParams, data, error }) {
  return (
      <AnimatePresence mode="wait">
          {!isLoading ? (
              <SmoothAppearance key={searchParams}>
                  {!error &&
                      (data && data.length > 0 ? (
                          <FilterGrid data={data} />
                      ) : (
                          <div className="row center-x center-y">
                              <h2>No page found</h2>
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
