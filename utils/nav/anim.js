import { transition } from '../utils'

const visible = [
    ['.icon span:first-of-type', { y: '0.2rem', rotate: 45 }, transition(0.4, 0)],
    ['.icon span:last-of-type', { y: '-0.2rem', rotate: -45 }, transition(0.4, 0)],
    ['.menu', { y: 0 }, transition(0.8, 0)],
    ['.menu div', { y: 0 }, transition(0.8, 0)],
    ['.menu li', { y: 0 }, transition(0.8, 0, 0.15)],
    ['.menu .active + span', { scaleX: 1 }, transition(0.8, 0.5)]
]

const hidden = [
    ['.icon span:first-of-type', { y: 0, rotate: 0 }, transition(0.4, 0)],
    ['.icon span:last-of-type', { y: 0, rotate: 0 }, transition(0.4, 0)],
    ['.menu', { y: '-100%' }, transition(0.8, 0)],
    ['.menu div', { y: '100%' }, transition(0.8, 0)],
    ['.menu li', { y: '100%' }, transition(0.8, 0, 0.15)],
    ['.menu .active + span', { scaleX: 0 }, transition(0.8, 0.5)]
]

export { visible, hidden }