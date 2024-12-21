import useFilter from "../../../../hooks/useFilter";
import Checkbox from "../../../ui/inputs/Checkbox/Checkbox";
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
                        <Checkbox 
                            checked={allFilterParams.includes(el)}
                            onChange={(e) => handleSearchParams(el)}
                            id={el}
                            value={el}
                        />
                        <span>{el}</span>
                    </li>
                );
            })}
        </ul>
    );
}