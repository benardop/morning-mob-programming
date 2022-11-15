function rotateLeft(d, arr) {
    const arr1 = arr.slice(0, d);
    const arr2 = arr.slice(d);
    return [...arr2, ...arr1]
}
