import { RefObject, useEffect, useState } from 'react';

const useOnScreen = (ref: RefObject<HTMLDivElement>, rootMargin = '0px') => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                rootMargin
            }
        );

        const currentElement = ref?.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            observer.unobserve(currentElement!);
        };
    }, []);

    return isVisible;
};

export default useOnScreen;
