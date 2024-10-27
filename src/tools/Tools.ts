export const _debounce = <T extends (...args:any[]) => void>(callback: T, timeout: number = 300) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
        clearTimeout(timer);
        timer = setTimeout(() => { callback(...args); }, timeout);
    };
}

