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