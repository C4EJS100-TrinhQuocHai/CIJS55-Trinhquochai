/*  yêu cầu tạo ta đối tượng item giỏ hàng 
input: idSanPham,soLuong
output: đối tượng item giỏ hàng   */
function layGioHangTuLocalStorage(){
    var gioHang= new Array();
    var jsonGioHang=localStorage.getItem('danhSachItemGioHang');
    if( jsonGioHang != null){
        gioHang=JSON.parse(jsonGioHang);
    }
    return gioHang;
}
var keyLocalStorageItemGioHang='danhSachItemGioHang'
function TaoDoiTuongItemGioHang(idSanPham,soLuong){
    var itemGioHang= new Object();
    itemGioHang.idSanPham=idSanPham;
    itemGioHang.soLuong=soLuong;
    return itemGioHang;
}
//console.log( TaoDoiTuongItemGioHang('123',20))
/*  yêu cầu: lấy ra toàn bộ các item giỏ hàng được lưu trữ trong local
input:
output:danh sách toàn bộ item giỏ hàng lưu trữ  */
function layDanhSachItemGioHang (){
    var danhSachItemGioHang= new Array();
     // bước 1 : lấy chuỗi json lưu trữ trong local
     var jsonDanhSachItemGioHang =localStorage.getItem(keyLocalStorageItemGioHang);
        
     // bước 2 : chuyển từ json qua danh sách Item giỏ hàng 
     if(jsonDanhSachItemGioHang != null)
     danhSachItemGioHang=JSON.parse(jsonDanhSachItemGioHang);
     
    return danhSachItemGioHang;
}
/*  luu tru danh sach item gio hang
input: danh sach item */
function luuDanhSachItemGioHangVaolocalStorage(danhSachItemGioHang){
    // buoc1: chuyen thanh json
    var jsonDanhSachItemGioHang=JSON.stringify(danhSachItemGioHang);
    // buoc 2 : luu danh sach item gio hang vao local
    localStorage.setItem(keyLocalStorageItemGioHang,jsonDanhSachItemGioHang);

}