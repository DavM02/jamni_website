
import FilterParams from './FilterParams/FilterParams'
import Portal from '../../ui/Portal'
export default function MobileFilter({  showMobileParams, setShowMobileParams }) {
  return (
      <Portal root={'modal-root'} className='filter-params' value={showMobileParams}>
          <div className='row s-between center-y'>
              <span className='text-heading text-black'>
                  фильтры
              </span>
              <div className='menu-bars active' onClick={() => setShowMobileParams(false)}>
                  <div></div>
                  <div></div>
              </div>
          </div>
          <FilterParams/>
      </Portal>
  )
}
