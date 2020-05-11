var keyLocalItemGioHang = 'danhSachItemGioHang';
function SanPham(hinhAnh , ten, gia , phanTramGiamGia,ID ) {
    var sanPham = new Object();
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.gia = gia;
    sanPham.ID = ID;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    sanPham.giaSauKhiGiam = function () {
        var tien =  this.gia*(100-this.phanTramGiamGia)/100;
        return (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(tien))
    }
    return sanPham;
}
taoSanPham();

function taoSanPham() {
    var sanPham1 = SanPham("https://static.wixstatic.com/media/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.png/v1/fill/w_250,h_250,al_c,q_85,usm_0.66_1.00_0.01/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.webp","GO BARS Box",250000,15,taoID());
    var sanPham2 = SanPham("https://static.wixstatic.com/media/94e66f_369ba69efe004a85b6ed680383d81b0e~mv2_d_1500_1500_s_2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/94e66f_369ba69efe004a85b6ed680383d81b0e~mv2_d_1500_1500_s_2.webp","GO BARS Box",250000,15,taoID());
    var sanPham3 = SanPham("https://static.wixstatic.com/media/94e66f_5a31fa41056347149ffdfdf8d4d6f04c~mv2_d_1500_1500_s_2.png/v1/fill/w_250,h_250,al_c,q_85,usm_0.66_1.00_0.01/94e66f_5a31fa41056347149ffdfdf8d4d6f04c~mv2_d_1500_1500_s_2.webp","GO BARS Box",250000,15,taoID()); 
    var sanPham4 = SanPham("https://static.wixstatic.com/media/94e66f_f35d7dd31f924e0796ae1e2d1e710dcf~mv2_d_1500_1500_s_2.png/v1/fill/w_250,h_250,al_c,q_85,usm_0.66_1.00_0.01/94e66f_f35d7dd31f924e0796ae1e2d1e710dcf~mv2_d_1500_1500_s_2.webp","GO BARS Box",250000,15,taoID());
    var sanPham5 = SanPham("https://static.wixstatic.com/media/94e66f_d063dd5fb09040468c9a5843ca56016b~mv2_d_1500_1500_s_2.png/v1/fill/w_250,h_250,al_c,q_85,usm_0.66_1.00_0.01/94e66f_d063dd5fb09040468c9a5843ca56016b~mv2_d_1500_1500_s_2.webp","GO BARS Box",250000,15,taoID());
    var sanPham6 = SanPham("https://static.wixstatic.com/media/94e66f_b09daca690184c64b5f73459e0e249df~mv2_d_1500_1500_s_2.png/v1/fill/w_250,h_250,al_c,q_85,usm_0.66_1.00_0.01/94e66f_b09daca690184c64b5f73459e0e249df~mv2_d_1500_1500_s_2.webp","GO BARS Stick",60000,10,taoID());
    var sanPham7 = SanPham("https://static.wixstatic.com/media/94e66f_cd2d327f8e5c42b98f51fb1b694e6ada~mv2_d_1499_1499_s_2.png/v1/fill/w_250,h_250,al_c,q_85,usm_0.66_1.00_0.01/94e66f_cd2d327f8e5c42b98f51fb1b694e6ada~mv2_d_1499_1499_s_2.webp","GO BARS Stick",60000,10,taoID());
    var sanPham8 = SanPham("https://static.wixstatic.com/media/94e66f_80b826bbaccd461398f595df03476b57~mv2_d_1500_1500_s_2.png/v1/fill/w_250,h_250,al_c,q_85,usm_0.66_1.00_0.01/94e66f_80b826bbaccd461398f595df03476b57~mv2_d_1500_1500_s_2.webp","GO BARS Stick",60000,10,taoID());
    var sanPham9 = SanPham("https://static.wixstatic.com/media/94e66f_0a1c01f9740449eabd578eed50399a13~mv2_d_1500_1500_s_2.png/v1/fill/w_250,h_250,al_c,q_85,usm_0.66_1.00_0.01/94e66f_0a1c01f9740449eabd578eed50399a13~mv2_d_1500_1500_s_2.webp","GO BARS Stick",60000,10,taoID());
    var sanPham10 = SanPham("https://static.wixstatic.com/media/94e66f_07e1b97f034247b8908322ed9da90247~mv2_d_1500_1500_s_2.png/v1/fill/w_250,h_250,al_c,q_85,usm_0.66_1.00_0.01/94e66f_07e1b97f034247b8908322ed9da90247~mv2_d_1500_1500_s_2.webp","GO BARS Stick",60000,10,taoID());
    var DSSP = new Array();
    DSSP=laySpTuLocal();

    if (DSSP == null){
        dssp= new Array();
        dssp.push(sanPham1);
        dssp.push(sanPham2);
        dssp.push(sanPham3);
        dssp.push(sanPham4);
        dssp.push(sanPham5);
        dssp.push(sanPham6);
        dssp.push(sanPham7);
        dssp.push(sanPham8);
        dssp.push(sanPham9);
        dssp.push(sanPham10);
        localStorage.setItem('dssp' , JSON.stringify(dssp));
    }

}
function taoID() {
    var layNgay = new Date();
    return Math.floor(Math.random()*100).toString() + layNgay.getTime().toString();
}

function laySpTuLocal() {
   return JSON.parse(localStorage.getItem('dssp'));
}

function xuatSP() {
    var danhSachSanPham = laySpTuLocal();
    var HTMLTong = '';
    for (let i = 0; i < danhSachSanPham.length; i++) {       
        HTMLTong+=chuyenSpThanhHYML(danhSachSanPham[i]);
    }
    document.getElementById('Nodesanpham').innerHTML= HTMLTong;
}
function chuyenSpThanhHYML(sanPham) {
    sanPham=SanPham(sanPham.hinhAnh , sanPham.ten, sanPham.gia , sanPham.phanTramGiamGia , sanPham.ID);
    var HTML = "";
    HTML += '<div class="sp">'
    HTML += '    <div class="chuaImg">'
    HTML += '        <img src="'+sanPham.hinhAnh+'">'
    HTML += '        <div class="themVaoGioHang" onclick="luuGioHang('+sanPham.ID+')">Add Cart</div>'
    HTML += '    </div>'
    HTML += '    <div class="noiDungSanPham">'
    HTML += '        <div class="tenSanPham">'+sanPham.ten+'</div>'
    HTML += '        <div class="giaSanPham">'+sanPham.giaSauKhiGiam()+'</div>'
    HTML += '    </div>'
    HTML += '    <div class="phanTramGiamGia">Sale '+sanPham.phanTramGiamGia+'%</div>  '           
    HTML += '</div>';
    return HTML;

}
function layDanhSachItemGioHang() {
    var danhSachItemGioHang = new Array();
    /* lấy chuỗi json lưu trữ xuống local */
    var jsonDanhSachItemGioHang = localStorage.getItem(keyLocalItemGioHang);
    /* chuyển từ json qua danh sách item giỏ hàng */
    if(jsonDanhSachItemGioHang != null ){
        danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);
    }
    return danhSachItemGioHang;
}

function taoDoiTuongItemGioHang(ID , soLuong) {
    var ItemGioHang = new Object();
    ItemGioHang.ID = ID;
    ItemGioHang.soLuong = soLuong;
    return ItemGioHang;
}

function luuVaoLocal(danhSachItemGioHang) {
    var jsonDSITGH = JSON.stringify(danhSachItemGioHang);
    localStorage.setItem(keyLocalItemGioHang,jsonDSITGH);
}
function luuGioHang(ID) {
    alert('Thêm thành công' + ID);
    /* lấy dsgh trong local lên để lấy toàn bộ giỏ hàng */
    var danhSachItemGioHang = layDanhSachItemGioHang();

    var tonTaiGioHang = false;
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        var ItemGioHangHienTai = danhSachItemGioHang[i];
        /* nếu tồn tại thì tăng số lượng */
        if(ItemGioHangHienTai.ID == ID){
            danhSachItemGioHang[i].soLuong++;
            tonTaiGioHang = true;
        }
    }
    console.log(danhSachItemGioHang);
    /* nếu k có thì tạo mới */
    if(tonTaiGioHang==false){
        var itemGioHang = taoDoiTuongItemGioHang(ID,1);
        danhSachItemGioHang.push(itemGioHang);
    }
    /* lưu trữ vô lại local */
    luuVaoLocal(danhSachItemGioHang);
}

