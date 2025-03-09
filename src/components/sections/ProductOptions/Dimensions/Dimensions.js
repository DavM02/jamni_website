
import DimensionItems from './DimensionItems';

export default function Dimensions({ dimensions }) {
    return (
        dimensions &&
        dimensions.map((el, i) => {
            const [key, values] = Object.entries(el)[0];

            if (key === "ширина") {
                const heightDimension = dimensions.find(
                    (dim) => Object.keys(dim)[0] === "высота"
                );
                const height = heightDimension?.высота || [];

                return (
                    <DimensionItems
                        key={i}
                        label={"размер"}
                        values={values}
                        height={height}
                    />
                );
            } else if (key === "высота") {
                return null;
            } else {
                return (
                    <DimensionItems
                        key={i}
                        label={key}
                        values={values}
                    />
                );
            }
        })
    )
}
