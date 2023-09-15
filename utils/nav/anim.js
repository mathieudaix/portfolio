const animIconTop = {
    visible: { y: '0.2rem', rotate: 45 },
    hidden: { y: 0, rotate: 0 }
}

const animIconBottom = {
    visible: { y: '-0.2rem', rotate: -45 },
    hidden: { y: 0, rotate: 0 }
}

const animMenu = {
    visible: { y: 0 },
    hidden: { y: '-100%' }
}

const animMenuBg = {
    visible: { y: 0 },
    hidden: { y: '100%' }
}

const animLink = {
    visible: { y: 0 },
    hidden: { y: '100%' }
}

const animLine = {
    visible: { scaleX: 1 },
    hidden: { scaleX: 0 }
}

export { animIconTop, animIconBottom, animMenu, animMenuBg, animLink, animLine }