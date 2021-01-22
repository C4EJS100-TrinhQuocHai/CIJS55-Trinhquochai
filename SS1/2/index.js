function findOddNumber(inputArr) {
    let outputArray = [];
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] % 2 !==0) {
            outputArray.push(inputArr[i]);
        }
        
    }
    return outputArray;
}
console.log(findOddNumber([7,5,8,9,-4,11,-6,12]));