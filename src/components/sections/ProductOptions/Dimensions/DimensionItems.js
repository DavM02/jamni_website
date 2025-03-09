
import Radio from '../../../ui/inputs/Radio/Radio'
export default function DimensionItems({ label, values, height }) {
    return (
        <div>
            <span className="option-key xsmall-text text-main text-black-secondary">
                {label}
            </span>
            <div className="options row wrap">
                {values.map((el, i) => (
                    <Radio
                        defaultChecked={i === 0 ? true : false}
                        key={i}
                        value={`${height ? `${el.value}x${height[i]?.value}` : el.value} ${el.unit
                            }`}
                        name={label}
                    />
                ))}
            </div>
        </div>
    )
}

