/**
 * Used to throttle a function. The supplied callback function will only be called
 * after a delay of the specified number (default 250).
 */
export const throttle = (callback: Function, delay: number = 250) => {
    let shouldWait = false;

    return (...args: any[]) => {

        if (shouldWait) {
            return;
        }
        shouldWait = true;

        callback(...args);

        setTimeout(() => {
            shouldWait = false;
        }, delay)
    }
}

/**
 * Supply an array of String arrays. 
 * Calculate the frequency of the string values and return result in Map.
 */
export const getMostOccurrences = (lists: string[][]) => {

    const counts = new Map<string, number>();
    lists.forEach((array) => {
        array.forEach((testString) => {
            let entryCount = counts.get(testString) || 0;
            counts.set(testString, entryCount + 1);
        });
    });
    return counts;
};