// O(n)
const selectFromInterval = (arr, start, end) => {
    if (!Array.isArray(arr)) throw new Error('В функцию нужно передать массив из чисел');
    if (!isFinite(start) || !isFinite(end)) throw new Error('Введите число');

    const max = Math.max(start, end);
    const min = Math.min(start, end);

    return arr.filter(number => {
        if (!isFinite(number)) throw new Error('Массив должен состоять только из чисел');
        return number >= min && number <= max
    })
}
