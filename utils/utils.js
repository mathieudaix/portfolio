const transition = (duration, delay) => {
    const value = {
        type: 'tween',
        ease: [0.265, 0.84, 0.44, 1],
        duration: duration,
        delay: delay
    }

    return value
}

export { transition }