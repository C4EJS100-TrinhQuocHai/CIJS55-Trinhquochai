var Array=[2,3,-5,-2,4];
var Max= 0;
function TichLienKeMax(Array){ 
    for(var i=0;i<Array.length;i++){
        if((Array[i])*(Array[i+1]) > Max){
            Max=(Array[i])*(Array[i+1]);
        }
        
    }
    return Max;
}TichLienKeMax(Array)
console.log(Max);
