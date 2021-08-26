// Bước 1 : lấy danh sách sản phẩm đã có trong local Storage  


var danhSachSanPham=JSON.parse(localStorage.getItem('danhSachSanPham'))
//console.log(danhSachSanPham);
if(danhSachSanPham==null){
    danhSachSanPham=new Array();
   
}
console.log(danhSachSanPham);
function onClickTaoSanPham(){
    //console.log('ok');
    var nodeHinhAnh=document.getElementById('hinhAnh');
    var hinhAnh=nodeHinhAnh.value;
    //console.log(hinhAnh);
    nodeHinhAnh.value='';

    var nodeTen=document.getElementById('ten');
    var ten=nodeTen.value;
    //console.log(ten);
    nodeTen.value='';

    var nodeGiaGoc=document.getElementById('giaGoc');
    var giaGoc=parseInt(nodeGiaGoc.value);// parseInt là lấy số nguyên 
    //console.log(typeof(giaGoc)); trả về kiểu dữ liệu string hết!
    //console.log(typeof(giaGoc));
   // console.log(giaGoc);
    nodeGiaGoc.value='';

    var nodePhanTramGiamGia=document.getElementById('phanTramGiamGia');// trả về kiểu dữ liệu string 
    var phanTramGiamGia=parseFloat(nodePhanTramGiamGia.value);// KIỂU DỮ LIỆU THẬP PHÂN .
   // console.log(phanTramGiamGia);
    //console.log(typeof(phanTramGiamGia));
    nodePhanTramGiamGia.value='';

    var nodeKhuVuc=document.getElementById('khuVuc');
    var khuVuc=nodeKhuVuc.value;
   // console.log(khuVuc);
    nodeKhuVuc.value='';

    //console.log(typeof(khuVuc));
    /* 
        Bước 2: tạo đối tượng từ các dữ liệu người dùng nhập vào 

    */
   var sanPham12=taoDoiTuongSanPham(hinhAnh,ten,giaGoc,phanTramGiamGia,khuVuc,null);
  // console.log(sanPham12);
   //console.log(sanPham12.ten);
   //  Bước 3: đưa sản phẩm vào danh sách 
   danhSachSanPham.push(sanPham12);
   console.log(danhSachSanPham);
   /*  lưu trữ danh sách sản phẩm xuống local storage */ 
   var jsonDanhSachSanPham=JSON.stringify(danhSachSanPham)// phải chuyên sang kiểu dữ liệu JSON mới lưu được.
   localStorage.setItem('danhSachSanPham',jsonDanhSachSanPham);
}