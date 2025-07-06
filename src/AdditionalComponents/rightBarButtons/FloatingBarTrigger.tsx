import { useEffect, useState } from 'react';
import FloatingBar from './FloatingBar';

const FloatingBarTrigger = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 500) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    return (
        <>
            {hasScrolled &&  <FloatingBar/>}

        </>
    );
};

export default FloatingBarTrigger;
