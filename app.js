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
    console.log(mergedArray);
}

moveZeroToEnd(numbers);