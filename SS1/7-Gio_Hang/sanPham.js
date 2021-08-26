
function taoDoiTuongSanPham(hinhanh,ten,giaGoc,phanTramGiamGia,khuVuc,id){
    var sanPham=new Object();
    /* buoc 1: gan cac thuoc tinh cho doi tuong */
    sanPham.hinhanh=hinhanh;
    sanPham.ten=ten;
    sanPham.giaGoc=giaGoc;
    sanPham.phanTramGiamGia=phanTramGiamGia;
    sanPham.khuVuc=khuVuc;
    if(id != null){
        sanPham.id=id;
    }else{
    sanPham.id=taoId();

    }
   
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
     /*  từ json của danh sách sản phẩm trả về 1  danh sách sản phẩm có đầy đủ các phương thức */
     sanPham.fromJSONs=function(jsonDanhSachSanPham){
         var danhSachSanPhamDayDu= new Array();
         var danhSachSanPham=JSON.parse(jsonDanhSachSanPham);
        for(var i=0;i<danhSachSanPham.length;i++){
            var sanPham=danhSachSanPham[i];
            var sanPhamDayDu=taoDoiTuongSanPham(sanPham.hinhanh,sanPham.ten,sanPham.giaGoc,sanPham.phanTramGiamGia,sanPham.khuVuc)
            danhSachSanPhamDayDu[i]=sanPhamDayDu;
        }
         return danhSachSanPhamDayDu;
     }
    return sanPham;
}
/*  CHuyển 1 danh sách đối tượng thành một đoạn html để hiển thị được danh sách sản phẩm 
input: danh sách sản phẩm
output:HTML hiển thị danh sách sản phẩm  */
function chuyenDanhSachDoiTuongSanPhamThanhHTML(danhSachSanPham){
    var HTMLDanhSachSanPham =  ` <div  class="items"> `;
    for(var i=0;i<danhSachSanPham.length;i++){
        var sanPham=danhSachSanPham[i];
        var HTMLSanPham=chuyenDoiTuongSanPhamThanhHTML(sanPham);
        HTMLDanhSachSanPham=HTMLDanhSachSanPham+HTMLSanPham;
    }
    HTMLDanhSachSanPham=HTMLDanhSachSanPham+'</div>';
    
    return HTMLDanhSachSanPham;
}
// chuyển 1 đối tượng thành html 
// 
function chuyenDoiTuongSanPhamThanhHTML(sanPham){
    sanPham=taoDoiTuongSanPham(sanPham.hinhanh,sanPham.ten,sanPham.giaGoc,sanPham.phanTramGiamGia,sanPham.khuVuc,sanPham.id)
    var html=`<div class="item">
    <div class="item-thumb">
        <img src=${sanPham.hinhanh} alt=${sanPham.ten}>
    </div>
    <h2 class="item-title">
        ${sanPham.ten}
    </h2>
    <div class="item-price">
        <span class="item-price-origin">${sanPham.giaGoc}đ </span>
        <span class="item-price-sale">${sanPham.tinhGiaBan()}đ</span>
    </div>
    <button class="btn btn-primary" onclick="onClickDuaVaoGioHang(\'${sanPham.id}\')"> Đưa vào giỏ hàng </button>
    
</div>`;

    return html;
}
function truyXuatSanPhamTheoId(id){
    // bước 1: lấy lên toàn bộ danh sách đối tượng 
    var jsonDanhSachSanPham=localStorage.getItem('danhSachSanPham');
    var danhSachSanPham=JSON.parse(jsonDanhSachSanPham);
    // Bước 2: duyệt toàn bộ sản phẩm xem id của sản phẩm có bằng id truyền vào không 
    // duyệt sản phẩm 
    for(var i=0;i<danhSachSanPham.length;i++){
        var sanPhamHienTai=danhSachSanPham[i];
        if(sanPhamHienTai.id==id){
            return sanPhamHienTai;
        }
    }
}
function laySanPhamTheoId(idSanPham){
    // input: id san pham
    // output: doi tuong san pham
    var sanPham= new Object();
    var danhSachSanPham=layDanhSachSanPhamDuoiLocalStorage();
    //console.log(danhSachSanPham);
    for(var i=0;i<danhSachSanPham.length;i++){
        var sanPhamHienTai =danhSachSanPham[i];
        console.log(sanPhamHienTai.id);
        if(sanPhamHienTai.id == idSanPham){
           
            sanPham = sanPhamHienTai;
        }
    }
    //.log(sanPham);
    sanPham =taoDoiTuongSanPham(sanPham.hinhanh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc,sanPham.id);
    //console.log(sanPham);
    return sanPham;
}
function layDanhSachSanPhamDuoiLocalStorage(){
    var jsonDanhSachSanPham= localStorage.getItem('danhSachSanPham');
    
    var danhSachSanPham=JSON.parse(jsonDanhSachSanPham);
    //console.log(danhSachSanPham);
    return danhSachSanPham;
}