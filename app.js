const numbers = [0, 0];

function moveZeroToEnd(array) {
    const onlyZeroes = [];
    const allOtherNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            onlyZeroes.push(array[i]);
        } else {
            allOtherNumbers.push(array[i]);
        }
    }
    const mergedArray = allOtherNumbers.concat(onlyZeroes);
    return mergedArray;
}

console.log(moveZeroToEnd([1, 2, 0, 0, 4, 0, 5]));
console.log(moveZeroToEnd([0, 0, 2, 0, 5]));
console.log(moveZeroToEnd([4, 4, 5]));
console.log(moveZeroToEnd([0, 0]));
