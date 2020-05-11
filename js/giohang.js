
function chuyenItemGioHangThanhHTML(sanPham) {
    var saveSoLuong = sanPham.soLuong;
    sanPham = SanPham(sanPham.hinhAnh , sanPham.ten , sanPham.gia, sanPham.phanTramGiamGia,sanPham.ID );
    sanPham.soLuong = saveSoLuong;

    var html = '   <div class="giohang">  ' +
        '       <div class="item-giohang">  ' +
        '           <div class="hinhanh">  ' +
        '               <img src="'+sanPham.hinhAnh+'" alt="">  ' +
        '           </div>  ' +
        '           <p class="ten">  ' +
        '               '+sanPham.ten+'' +
        '           </p>  ' +
        '           <div class="gia">  ' +
        '               <span class="giagoc">'+sanPham.gia+'</span>  ' +
        '               <span class="giaban">'+sanPham.giaSauKhiGiam()+'</span>  ' +
        '           </div>  ' +
        '           <input type="number" class="soluong" value="'+sanPham.soLuong+'">  ' +
        '           <p class="tongtien">'+sanPham.soLuong*((sanPham.gia *(100- sanPham.phanTramGiamGia))/100)+'</p>  ' +
        '           <div class="hanhdong">  ' +
        '               <i class="fas fa-trash"></i>  ' +
        '           </div>  ' +
        '       </div>  ' +
        '  </div>  ';
    return html;
}
function chuyeDanhSachThanhHTML(danhSachItem) {
    var htmlTong='';
    for(var i =0 ; i<danhSachItem.length;i++){
        htmlTong = htmlTong + chuyenItemGioHangThanhHTML(danhSachItem[i]);
    }
    return htmlTong;
}

hienThiDS();

function hienThiDS() {
    var danhsachitem = layDanhSachItemGioHang();
    //lấy danh sách item giỏ hàng
    var layDanhSachItem = new Array();
    for (let i = 0; i < danhsachitem.length; i++) {
        console.log(danhsachitem[i].ID);
        layDanhSachItem.push(xuatSanPhamTheoID(danhsachitem[i].ID));
        layDanhSachItem[(layDanhSachItem.length-1)].soLuong = danhsachitem[i].soLuong;
    }

    //đưa ID vào hàm xuất sản phẩm theo id
    var HTMl = chuyeDanhSachThanhHTML(layDanhSachItem);

    var nodeGioHang = document.getElementById('giohang');
    nodeGioHang.innerHTML= nodeGioHang.innerHTML + HTMl;
}
function  xuatSanPhamTheoID(id) {
    var danhSachSanPham = JSON.parse(localStorage.getItem("dssp"));
    for (let i = 0; i < danhSachSanPham.length; i++) {
        if(danhSachSanPham[i].ID == id) return danhSachSanPham[i];  
    }
}
function sendNow() {
    if(kiemTraGui()==true){
        alert('Send Products Successful');
    }
}
function kiemTraGui() {
    var hopLe = true;
            var nodeInputTen = document.getElementById('tenKH');
            var nodeInputDiaChi = document.getElementById('diaChiKH');
            var nodeInputSDT = document.getElementById('soDT');
            var nodeInputMail = document.getElementById('mailKH');

            var ten = nodeInputTen.value;
            var diaChi = nodeInputDiaChi.value;
            var soDT = nodeInputSDT.value;
            var mail = nodeInputMail.value;

            var nodeHienthiloi1 = document.getElementById('loiTen');
            var nodeHienthiloi2 = document.getElementById('loiDiaChi');
            var nodeHienthiloi3 = document.getElementById('loiSDT');
            var nodeHienthiloi4 = document.getElementById('loiMail');
            
            nodeHienthiloi1.innerHTML ='';
            nodeHienthiloi2.innerHTML ='';
            nodeHienthiloi3.innerHTML ='';
            nodeHienthiloi4.innerHTML ='';

            if(ten==null || ten.length ==0 ){
                hopLe = false;
                nodeHienthiloi1.innerHTML = 'Tên không được trống';
            }
            if(diaChi==null || diaChi.length ==0 ){
                hopLe = false;
                nodeHienthiloi2.innerHTML = 'Địa chỉ không được trống';
            }
            if(soDT.length != 10){
                hopLe = false;
                nodeHienthiloi3.innerHTML ='Số điện thoại có 10 số';
            }
            if(mail==null || mail.length ==0 ){
                hopLe = false;
                nodeHienthiloi4.innerHTML ='Gmail không được để trống';
            }

            return hopLe;
    
}