import React, { useEffect, useState } from 'react';

export default function useMediaQ(query) {
    const [match, setMatch] = useState(() => {
        return window.matchMedia(query).matches;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        function checkMedia(e) {
            setMatch(e.matches);
        }

        mediaQuery.addEventListener('change', checkMedia);

        return () => {
            mediaQuery.removeEventListener('change', checkMedia);
        };
    }, [query]);

    return match;
}
