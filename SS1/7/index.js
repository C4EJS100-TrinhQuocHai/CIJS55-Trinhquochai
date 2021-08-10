localStorage.setItem('tên đăng nhập','quochai');
localStorage.setItem('mật khẩu đăng nhập','minhanh1');
var tenDangNhap=localStorage.getItem('tên đăng nhập');
var matKhauDangNhap=localStorage.getItem('mật khẩu đăng nhập');
console.log(` tên đăng nhập là : ${tenDangNhap}`);
console.log(` mật khẩu đăng nhập là: ${matKhauDangNhap}`);
function themGiaTri(){
  var nodeKeyInput=document.getElementById('key');
  var key=nodeKeyInput.value;
  var nodeValueInput=document.getElementById('value');
  var value =nodeValueInput.value;
  localStorage.setItem(key,value);
}
function xoaGiaTri(){
    var nodeKeyInput=document.getElementById('key');
    var key=nodeKeyInput.value;
    localStorage.removeItem(key);
}