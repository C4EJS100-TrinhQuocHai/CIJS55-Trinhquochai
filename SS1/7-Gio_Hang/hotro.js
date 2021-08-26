// xây dựng hàm tạo id tự động ,id là duy nhất

function taoId(){
    var id='';
    // sinh ID 
    id= Math.random().toString().substr(2,10)+"_" +new Date().getTime();
    
    return id;
   
}

    console.log(taoId());


