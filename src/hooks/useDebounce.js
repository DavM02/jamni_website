import { useState, useEffect, useRef } from "react";

export default function useDebounce() {
   const [executed, setExecuted] = useState(false);
   const timeoutId = useRef(null)

    function debouncedFunction(time, fc) {
        if (!executed) {
            setExecuted(true);
            fc();

            timeoutId.current = setTimeout(() => {
                setExecuted(false);
            }, time);

 
        }
    }

    useEffect(() => {
        return () => {
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }
        };
    }, []);

    return debouncedFunction;
}
