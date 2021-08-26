/* 
mô tả : để tạo ra đối tượng dựa vào các thuộc tính được truyền vào 
input: các thuộc tính
output: một đối tượng

 */
function taoDoiTuongSanPham(hinhanh,ten,giaGoc,phanTramGiamGia,khuVuc){
    var sanPham=new Object();
    /* buoc 1: gan cac thuoc tinh cho doi tuong */
    sanPham.hinhanh=hinhanh;
    sanPham.ten=ten;
    sanPham.giaGoc=giaGoc;
    sanPham.phanTramGiamGia=phanTramGiamGia;
    sanPham.khuVuc=khuVuc;
    // buoc 2: viet cac phuong thuc cho doi tuong
    sanPham.tinhGiaBan =function(){
        var giaBan= this.giaGoc *(1-this.phanTramGiamGia);
        return giaBan;
    }
    return sanPham;
}
var iphone5=taoDoiTuongSanPham('https://fptshop.com.vn/uploads/originals/2014/11/17//201411171108097959_image001.jpg','iphone 5',50000,0.15,'ha noi');
//buoc 3: luu tru vao local storage;
console.log(iphone5);
localStorage.setItem('sanPham',iphone5)
// buoc 4 : truy xuat du lieu de lay ra doi tuong
var iphone5LayRaTuLocalStorage= localStorage.getItem('sanPham')
console.log(iphone5LayRaTuLocalStorage)
console.log(iphone5LayRaTuLocalStorage.hinhanh);
