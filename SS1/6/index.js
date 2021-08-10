function taoSanPham() {
    var hinh_anh_san_pham = document.getElementById("hinhAnhSanPham").value;
    var ten_san_pham = document.getElementById("tenSanPham").value;
    var gia_san_pham = document.getElementById("giaSanPham").value;
    var p = document.getElementById("hien_thi_san_pham");
    // p.innerHTML=" hiển thị sản phẩm:"+hinh_anh_san_pham+ten_san_pham +"  giá "+gia_san_pham;
    var html = '';
    html += '<div class="san-pham">';
    html += '<div class="hinh-anh-san-pham">';
    html += ' <img src="' + hinh_anh_san_pham + '" alt="">';
    html += ' </div>';
    html += ' <h1> ' + ten_san_pham + '</h1>';
    html += '<p class="gia-san-pham"> ' + gia_san_pham + '</p>';
    html += ' <button class="btn">thêm vào giỏ hàng </button>';
    html += '</div>';
    p.innerHTML = html;
    html += '<div class="san-pham">';
    html += '<div class="hinh-anh-san-pham">';
    html += ' <img src="' + hinh_anh_san_pham + '" alt="">';
    html += ' </div>';
    html += ' <h1> ' + ten_san_pham + '</h1>';
    html += '<p class="gia-san-pham"> ' + gia_san_pham + '</p>';
    html += ' <button class="btn">thêm vào giỏ hàng </button>';
    html += '</div>';
    p.innerHTML = html;
    html += '<div class="san-pham">';
    html += '<div class="hinh-anh-san-pham">';
    html += ' <img src="' + hinh_anh_san_pham + '" alt="">';
    html += ' </div>';
    html += ' <h1> ' + ten_san_pham + '</h1>';
    html += '<p class="gia-san-pham"> ' + gia_san_pham + '</p>';
    html += ' <button class="btn">thêm vào giỏ hàng </button>';
    html += '</div>';
    p.innerHTML = html;
    html += '<div class="san-pham">';
    html += '<div class="hinh-anh-san-pham">';
    html += ' <img src="' + hinh_anh_san_pham + '" alt="">';
    html += ' </div>';
    html += ' <h1> ' + ten_san_pham + '</h1>';
    html += '<p class="gia-san-pham"> ' + gia_san_pham + '</p>';
    html += ' <button class="btn">thêm vào giỏ hàng </button>';
    html += '</div>';
    p.innerHTML = html;
    
    var htmlDanhSachSanPham = '';
    for (var i = 0; i<= 4; i++) {
        htmlDanhSachSanPham = htmlDanhSachSanPham + html;
        
    }
    var hienThiDanhSachSanPham = document.getElementById("hien-thi-danh-sach-san-pham");
        hienThiDanhSachSanPham.innerHTML = htmlDanhSachSanPham;
} 