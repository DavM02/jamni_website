import React from 'react'
import { colorMap } from '../../../../hooks/useFilter';
import OptionItems from './OptionItems';
export default function Options({ options, colors }) {
    console.log('lol')
    return (options &&
        options.map((el, i, arr) => {
            const [key, values] = Object.entries(el)[0];

            const style = (i % 2 !== 0 ? i >= 4 && i + 1 <= arr.length : i >= 4 && i + 1 < arr.length)
                ? { width: '48.3%' }
                : { width: '100%' };

            if (key === 'цвет') {
                const swapped = Object.fromEntries(
                    Object.entries(colorMap).map(([key, value]) => [value, key])
                );

                return (
                    <OptionItems
                        key={i}
                        label={key}
                        style={style}
                        data={
                            colors.map(el => {
                                return {
                                    palette: el, colorName: swapped[el]
                                }
                            })
                        }
                    />
                );
            } else {
                return (
                    <OptionItems key={i}
                        label={key}
                        style={style}
                        data={values}
                    />
                );
            }
        })
    )
}
