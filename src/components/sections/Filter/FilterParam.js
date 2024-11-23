import useFilter from "../../../hooks/useFilter";
export default function FilterParam({
    filterParam,
    data,
}) {


    const { handleSearchParams, allFilterParams } = useFilter(filterParam);

    return (
        <ul className="column gap-15">
            {data.map((el, i) => {
                return (
                    <li key={i} className="row center-y gap-10">
                        <div className="custom-radio">
                            <input
                                checked={allFilterParams.includes(el)}
                                onChange={(e) => handleSearchParams(el)}
                                id={el}
                                type="checkbox"
                                value={el}
                            />
                            <div className="input-state"></div>
                        </div>
                        <span>{el}</span>
                    </li>
                );
            })}
        </ul>
    );
}