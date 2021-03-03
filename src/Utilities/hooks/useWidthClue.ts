import {useState, useEffect} from 'react';

const isNarrowerThan = (width: number) => {
    const mediaQuery = window.matchMedia(`(max-width: ${width}px)`);
    return mediaQuery.matches;
}

const useWidthClue = (width: number) => {
    const [isNarrower, setIsNarrower] = useState(isNarrowerThan(width));

    useEffect(() => {
        let timeoutId: any = null;
        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => 
                setIsNarrower(isNarrowerThan(width)), 20);
        }
        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, [width]);

    return isNarrower;
}

export default useWidthClue;