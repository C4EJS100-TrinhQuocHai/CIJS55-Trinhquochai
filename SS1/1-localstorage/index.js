// buoc 1:luu tru xuong local storage
localStorage.setItem('tenDangNhap','maianh');
localStorage.setItem('matKhauDangNhap','123456');

// buoc 2 truy xuat du lieu trong local storage;
var tenDangNhap=localStorage.getItem('tenDangNhap')
console.log(`ten dang nhap la : ${tenDangNhap}`);
console.log(localStorage.getItem('matKhauDangNhap'));
//buoc 3 xoa du lieu trong localSrorage
function onClickThemGiaTriVaoLocalStorage(){
    console.log('goi vao ham  them gia tri');
    // buoc 1 :de them gia tri lay ra key va value trong cac node
    var nodeInputKey=document.getElementById('key');
    var key=nodeInputKey.value;
    var nodeInputValue=document.getElementById('value');
    var value=nodeInputValue.value;

    //buoc 2 : thuc hien luu xuong local
    localStorage.setItem(key,value);
    alert('them gia tri thanh cong!')
}
function onClickXoaGiaTriVaoLocalStorage(){
   // buoc 1: lay du lieu key trong nodeinput
   var nodeInputKey=document.getElementById('key');
   var key=nodeInputKey.value;
   // buoc 2 : xoa khoi local storage 
   localStorage.removeItem(key);
}