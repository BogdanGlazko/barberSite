// components/RevealOnScroll.tsx
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type AnimationType = 'fade' | 'slide-up' | 'zoom' | 'slide-left' | 'slide-right';

type Props = {
    children: React.ReactNode;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    style?: React.CSSProperties;
};

const animationVariants = {
    'fade': {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    'slide-up': {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    'zoom': {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
    'slide-left': {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
    'slide-right': {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
};

export const RevealOnScroll: React.FC<Props> = ({
                                                    children,
                                                    animation = 'slide-up',
                                                    delay = .3,
                                                    duration = 0.6,
                                                    style,

                                                }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once: false });

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        } else {
            controls.start('hidden'); // повторы работают
        }
    }, [isInView, controls]);

    return (
        <motion.div
            style={style}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={animationVariants[animation]}
            transition={{ duration, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};
