import React, { useRef, useState } from 'react'
import { formStore } from '../../../../stores/formStore';
export default function CartCells({ cells, subCells, name }) {
    const inputRefs = useRef([]);
    const { forms } = formStore()

    const error = forms?.paymentForm?.errors?.[name];
     const defaultValue = (forms?.paymentForm?.formData?.[name]);
   

    function splitArrayIntoChunks(array, chunkSize) {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize)); 
        }
        return result;
    }
 
    const [numbers, setNumbers] = useState(
        defaultValue ? splitArrayIntoChunks(defaultValue.split(''), subCells)
 :        Array(cells).fill(null).map((el, i) => Array(subCells).fill('')))

 
    function handleNextFocus(groupIndex, inputIndex, inputRefIndex) {
        const isLastInputInGroup = inputIndex === 3;
        const isLastGroup = groupIndex === numbers.length - 1;

        if (isLastInputInGroup && !isLastGroup) {
            const nextInputRef = inputRefs.current[(groupIndex + 1) * 4];
            if (nextInputRef) {
                nextInputRef.focus();
            }
        } else if (!isLastInputInGroup) {
            const nextInputRef = inputRefs.current[inputRefIndex + 1];
            if (nextInputRef) {
                nextInputRef.focus();
            }
        }
    }

    function handlePrevFocus(groupIndex, inputIndex, inputRefIndex) {
        const isFirstInputInGroup = inputIndex === 0;
        const isFirstGroup = groupIndex === 0;

        if (!isFirstInputInGroup) {

            const prevInputRef = inputRefs.current[inputRefIndex - 1];
            if (prevInputRef) {
                prevInputRef.focus();
            }
        } else if (!isFirstGroup) {
            const prevInputRef = inputRefs.current[(groupIndex - 1) * 4 + 3];
            if (prevInputRef) {
                prevInputRef.focus();
            }
        }

    }
    return (
        <div className='row wrap gap-10 s-between wrap'>



            {numbers.map((group, groupIndex) => (
                <div key={groupIndex} className={`num-group row center-y center-x ${error ? 'has-error' : 'static'}`}>
                    {group.map((value, inputIndex) => {
                        const inputRefIndex = groupIndex * 4 + inputIndex;

                        return (
                            <input
                                name={name}
                                key={inputIndex}
                                ref={(el) => (inputRefs.current[inputRefIndex] = el)}
                                value={value}
                                onKeyDown={(e) => {
                                    if (e.code === 'Backspace') {
                                        setNumbers((prev) => {
                                            const newNumbers = [...prev]
                                            newNumbers[groupIndex][inputIndex] = '';
                                            handlePrevFocus(groupIndex, inputIndex, inputRefIndex)
                                            return newNumbers;
                                        });
                                    } else if (e.code === 'ArrowLeft') {
                                        handlePrevFocus(groupIndex, inputIndex, inputRefIndex)
                                    } else if (e.code === 'ArrowRight') {
                                        handleNextFocus(groupIndex, inputIndex, inputRefIndex)
                                    }
                                }}



                                onChange={(e) => {
                                    e.stopPropagation()
                                    const newValue = e.target.value;

                                    if (newValue === '') return
                                    setNumbers((prev) => {
                                        const newNumbers = [...prev];
                                        newNumbers[groupIndex][inputIndex] = newValue.split('')[0];
                                        handleNextFocus(groupIndex, inputIndex, inputRefIndex)
                                        return newNumbers;
                                    });


                                }}
                                type="number"
                                placeholder="x"
                                max={9}
                                min={0}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    )
}
