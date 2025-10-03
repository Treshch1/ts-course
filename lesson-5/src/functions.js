function addArrayElements(arr) {
    return arr.reduce((sum, num) => sum + num, typeof arr[0] === 'string' ? '' : 0);
}

console.log(addArrayElements([1, 2, 3, 4])); // 10
console.log(addArrayElements(['a', 'b', 'c'])); // 'abc'
