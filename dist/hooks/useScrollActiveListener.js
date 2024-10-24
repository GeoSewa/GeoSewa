/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect } from 'react';
function debounce(func, timeout = 300) {
    let timer;
    return (arg) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(arg);
        }, timeout);
    };
}
export default function useScrollActiveListener({ sectionRefs, onChange, }) {
    const handleScroll = useCallback(debounce(() => {
        Object.entries(sectionRefs.current).forEach(([key, section]) => {
            // @ts-ignore
            const elementPosition = section.getBoundingClientRect().top;
            if (elementPosition < 200) {
                onChange(key);
            }
        });
    }, 50), []);
    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);
    return null;
}
