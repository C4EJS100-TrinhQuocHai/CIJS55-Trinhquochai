/* Bước 1:lấy danh sách sản phẩm dưới localStorage  */

var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');
var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
console.log(danhSachSanPham);
if (danhSachSanPham == null) {
    danhSachSanPham = new Array();
}
/* Bước 2: chuyển danh sách đối  tượng sang đoạn html */

var HTML = chuyenDanhSachDoiTuongSanPhamThanhHTML(danhSachSanPham);
/* Bước 3: gắn đoạn HTML đó vào section  */
var nodeProducts = document.getElementById('products');
nodeProducts.innerHTML = HTML;
//console.log(danhSachSanPham);

function onClickDuaVaoGioHang(idSanPham) {
    alert('Thêm vào giỏ hàng thành công!');

    var danhSachItemGioHang = layDanhSachItemGioHang();
    var coTonTaiTrongDanhSachItemGioHang = false;
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        var itemGioHangHienTai = danhSachItemGioHang[i];
        // neu ton tai thi tang so luong 
        if (itemGioHangHienTai.idSanPham == idSanPham) {
            danhSachItemGioHang[i].soLuong++;
            coTonTaiTrongDanhSachItemGioHang = true;
        }
    }// neu khong ton tai thi tao ra 1 doi tuong moi  
    if (coTonTaiTrongDanhSachItemGioHang == false) {
        var itemGioHang = TaoDoiTuongItemGioHang(idSanPham, 1);
        danhSachItemGioHang.push(itemGioHang);
    }
    luuDanhSachItemGioHangVaolocalStorage(danhSachItemGioHang);
}