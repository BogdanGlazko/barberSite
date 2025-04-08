import {useEffect, useState} from 'react';
import s from '../AdditionalComponents/Parallax.module.scss';
import * as React from "react";

interface ParallaxSectionProps {
    childComponent: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({childComponent}) => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={s.parallaxSection}>
            <div className={s.parallaxWrapper}>
                <div
                    className={s.parallaxContent}
                    style={{transform: `translateY(${offsetY * 0.1}px)`}}
                >
                    {childComponent}
                </div>

            </div>

        </section>
    );
};

export default ParallaxSection;
