const debounce = (fn: (...args: string[]) => void, delay: number) => {
    let timeout: ReturnType<typeof setTimeout>;

    return (...args: string[]) => {
        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

export default debounce