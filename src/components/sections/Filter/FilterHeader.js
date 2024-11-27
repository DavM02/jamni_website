import { Link } from 'react-router-dom'
import filter from '../../../assets/icons/filter.svg'
import Sort from './Sort'
import FilterParams from './FilterParams';
import { useEffect, useState } from 'react';
import Backdrop from '../../ui/Backdrop/Backdrop';
import Portal from '../../ui/Portal';
export default function FilterHeader({ data, setShowParams, query, isMobile }) {
 
    const [showMobileParams, setShowMobileParams] = useState(false)

    function handleMedia() {
        if (isMobile) {
            setShowMobileParams(true)
            return
        }
        if (query) {
            setShowParams((prev) => !prev)
        } else {
            return
        }
    }

    useEffect(() => {
        if (!isMobile) {
            setShowMobileParams(false)
        } else {
            setShowParams(false)
        }
    }, [isMobile])

    return (
        <>
            <div className='filter-header'>
                <div className='row gap-10 xxxsmall-text text-main text-black up-case'>
                    <Link to={'/'}>
                        Главная
                    </Link>
                    <span>/</span>
                    <span>{data.headline.split(' ')[1]}</span>
                </div>
                <div className='row s-between gap-10 xxsmall-text text-main text-black'>
                    <div className='filters row gap-5 center-y' onClick={() => handleMedia()}>
                        <img src={filter} alt='filter' />
                        <span>
                            фильтры
                        </span>
                    </div>
                    <Sort />
                </div>
            </div>
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
                <FilterParams data={data} />
            </Portal>
            <Backdrop root={'modal-root'} value={showMobileParams} />
        </>

    )
}
