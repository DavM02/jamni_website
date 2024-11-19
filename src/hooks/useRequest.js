import { useState } from 'react';

export default function useRequest(url) {
    const [result, setResult] = useState({
        error: null,
        data: null,
        status: null
    });

    async function loadData(abortController) {
        setResult((prev) => ({ ...prev, status: 'pending' }));

        try {
            const response = await fetch(url, {
                signal: abortController.signal,
            });
            if (!response.ok) {
                throw new Error('An unexpected error occurred.');
            }
            const data = await response.json();
            setResult({ data, status: 'loaded', error: null });

        } catch (error) {
            setResult({ data: null, status: 'error', error: error.message });
        }
    }

    return {
        result,
        loadData
    };
}
