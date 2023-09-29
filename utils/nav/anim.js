import { transition } from '../utils'

const visible = [
    ['nav .overlay', { display: 'block' }, transition(0, 0)],
    ['.hero .grid', { scale: 0.95 }, transition(0.8, 0)],
    ['nav .overlay', { opacity: 1 }, transition(0.8, 0)],
    ['nav .icon span:first-of-type', { y: '0.2rem', rotate: 45 }, transition(0.4, 0)],
    ['nav .icon span:last-of-type', { y: '-0.2rem', rotate: -45 }, transition(0.4, 0)],
    ['nav .menu', { y: 0 }, transition(0.8, 0)],
    ['nav .menu div', { y: 0 }, transition(0.8, 0)],
    ['nav .menu li', { y: 0 }, transition(0.8, 0, 0.15)],
    ['nav .menu .active + span', { scaleX: 1 }, transition(0.8, 0.5)],
]

const hidden = [
    ['nav .overlay', { display: 'none' }, transition(0, 0)],
    ['.hero .grid', { scale: 1 }, transition(0.8, 0)],
    ['nav .overlay', { opacity: 0 }, transition(0.8, 0)],
    ['nav .icon span:first-of-type', { y: 0, rotate: 0 }, transition(0.4, 0)],
    ['nav .icon span:last-of-type', { y: 0, rotate: 0 }, transition(0.4, 0)],
    ['nav .menu', { y: '-100%' }, transition(0.8, 0)],
    ['nav .menu div', { y: '100%' }, transition(0.8, 0)],
    ['nav .menu li', { y: '100%' }, transition(0.8, 0, 0.15)],
    ['nav .menu .active + span', { scaleX: 0 }, transition(0.8, 0.5)],
]

export { visible, hidden }
