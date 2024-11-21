import useFilter from '../../../../hooks/useFilter';

export default function Main({  headline }) {

 const {allFilterParams, handleSearchParams} = useFilter('filter')

    return (
        <div className="main-filter column gap-15 xsmall-text text-main text-black up-case">
            <span
                className={`${allFilterParams.length === 0 ? 'active' : 'inactive'}`}
                onClick={() => handleSearchParams('all')}
            >
                {headline}
            </span>
            <span
                className={`${allFilterParams.includes('discount') ? 'active' : 'inactive'}`}
                onClick={() => handleSearchParams('discount')}
            >
                скидки
            </span>
            <span
                className={`${allFilterParams.includes('isNew') ? 'active' : 'inactive'}`}
                onClick={() => handleSearchParams('isNew')}
            >
                новинки
            </span>
            <span
                className={`${allFilterParams.includes('bestseller') ? 'active' : 'inactive'}`}
                onClick={() => handleSearchParams('bestseller')}
            >
                бестселлеры
            </span>
        </div>
    );
}
