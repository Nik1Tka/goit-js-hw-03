function filterArray(numbers, value) {
     let theArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            theArray.push(numbers[i]);
        }
    }
    return theArray;
}