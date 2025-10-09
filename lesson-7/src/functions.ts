function addArrayElements(arr: number[] | string[]): number | string {
    if (arr.length === 0) return '';
    if (typeof arr[0] === 'string') {
        return (arr as string[]).reduce((sum, str) => sum + str, '');
    } else {
        return (arr as number[]).reduce((sum, num) => sum + num, 0);
    }
}

console.log(addArrayElements([1, 2, 3, 4])); // 10
console.log(addArrayElements(['a', 'b', 'c'])); // 'abc'
console.log(addArrayElements([])); // ''
