import Hero from '../components/home/Hero'
import Projects from '../components/home/Projects'
import { useRef, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'
import normalizeWheel from 'normalize-wheel'
import { useRafLoop } from 'react-use'
import { useWindowSize } from '@react-hook/window-size'

const Home = () => {
    return (
        <>
            <Hero />
            <Projects />

            <section className='contact'>
                <InteractiveMarquee />
            </section>
        </>
    )
}

export default Home

const _ = {
    content: "Contact Contact ",
    speed: 2,
    threshold: 0.014,
    wheelFactor: 1.8,
    dragFactor: 1.2
};

const MarqueeItem = ({ content, speed }) => {
    const item = useRef(null);
    const rect = useRef({});
    const x = useRef(0);

    const [width, height] = useWindowSize();

    const setX = () => {
        if (!item.current || !rect.current) return;
        const xPercentage = (x.current / rect.current.width) * 100;
        if (xPercentage < -100) x.current = 0;
        if (xPercentage > 0) x.current = -rect.current.width;
        item.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;

        if (x.current < -rect.current.width) x.current = 0;
        if (x.current > 0) x.current = -rect.current.width;
        item.current.style.transform = `translate3d(${x.current}px, 0, 0)`;
    };

    useEffect(() => {
        rect.current = item.current.getBoundingClientRect();
    }, [width, height]);

    const buffer = useRef(0);
    const loop = (e) => {
        x.current -= speed.get();
        setX();

        const delta = (e - buffer.current) / 1000;
        const c = Math.max(1 / 60 / delta, 1);
        buffer.current = e;
        x.current -= speed.get() / c;
        setX();
    };

    useRafLoop(loop, true);

    return (
        <div className="item" ref={item}>
            {content}
        </div>
    );
};

const InteractiveMarquee = () => {
    const marquee = useRef(null);
    const slowDown = useRef(false);
    const isScrolling = useRef(false);

    const x = useRef(0);
    const speed = useSpring(_.speed, {
        damping: 40,
        stiffness: 90,
        mass: 5
    });

    const onWheel = (e) => {
        const normalized = normalizeWheel(e);
        x.current = normalized.pixelY * _.wheelFactor;

        window.clearTimeout(isScrolling.current);
        isScrolling.current = setTimeout(function () {
            speed.set(_.speed);
        }, 30);
    };

    const loop = () => {
        if (slowDown.current || Math.abs(x.current) < _.threshold) return;
        x.current *= 0.66;
        if (x.current < 0) {
            x.current = Math.min(x.current, 0);
        } else {
            x.current = Math.max(x.current, 0);
        }
        speed.set(_.speed + x.current);
    };

    useRafLoop(loop, true);

    return (
        <>
            <motion.div className="marquee" ref={marquee} onWheel={onWheel}>
                <MarqueeItem content={_.content} speed={speed} />
                <MarqueeItem content={_.content} speed={speed} />
            </motion.div>
        </>
    );
};