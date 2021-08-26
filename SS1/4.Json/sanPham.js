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
    sanPham.tinhGiaBan = function(){
        var giaBan= this.giaGoc *(1-this.phanTramGiamGia);
        return giaBan;
     }
     sanPham.toJson=function(){
         var json=JSON.stringify(this);
         return json;
     }
     // tu json chuyen thanh 1 doi tuong day du cac phuong thuc
     /* 
        input:json
        output: doi tuong day du 
      */
     sanPham.fromJSON=function(json){
        var doiTuongDayDu=new Object();
        // buoc 1:chuyen tu json sang doi tuong 
        var doiTuong=JSON.parse(json)
        // buoc 2 chuyen doi tuong thanh doi tuong day du
        var doiTuongDayDu=taoDoiTuongSanPham(doiTuong.hinhanh,doiTuong.ten,doiTuong.giaGoc,doiTuong.phanTramGiamGia,doiTuong.khuVuc)
        return doiTuongDayDu;
     }
    return sanPham;
}
