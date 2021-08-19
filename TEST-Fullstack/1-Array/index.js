var Array = [60,40,55,75,64]
var Array2 = [];
function sumArray1(Array){
    var sum = 0;
    for (var i = 0; i < Array.length; i+=2){
        sum += Array[i];
    }
    Array2.push(sum);
    
}sumArray1(Array);
function sumArray2(Array){
    var sum = 0;
    for (var i = 1; i < Array.length; i+=2){
        sum += Array[i];
    }
    Array2.push(sum);
    
}sumArray2(Array);
 console.log(Array2);

