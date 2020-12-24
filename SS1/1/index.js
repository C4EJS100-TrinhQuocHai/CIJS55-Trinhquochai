function adjacentElementsProduct(inputArray) {
    let max= inputArray[0] * inputArray[1];
    for (let i = 0; i < inputArray.length; i++) {
        const element = inputArray[i] * inputArray[i+1];
        if(element> max){
            max= element;
        }
    }
    return max;
}
console.log(adjacentElementsProduct([9,6,-2,15,5,5,7]));