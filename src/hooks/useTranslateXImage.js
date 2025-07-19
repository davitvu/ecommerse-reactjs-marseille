import { useEffect, useState } from 'react';
import useScrollHandling from './useScrollHandling';

const useTranslateXImage = () => {
    const { scrollPosition, scrollDirection } = useScrollHandling();
    const [translateXPosition, setTranslateXPosition] = useState(80);

    const handleTranslateX = () => {
        if (scrollDirection === 'down' && scrollPosition > 1865) {
            setTranslateXPosition(translateXPosition <= 0 ? 0 : translateXPosition - 1);
        } else if (scrollDirection === 'up' && scrollPosition < 2440) {
            setTranslateXPosition(translateXPosition >= 80 ? 80 : translateXPosition + 1);
        }
    }

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return {
        translateXPosition
    }
}

export default useTranslateXImage;