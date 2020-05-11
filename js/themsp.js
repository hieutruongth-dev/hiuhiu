function taoSanPham1() {
    if (kiemTraHopLe() == true) {
        var product = layTTTuInput();
        var danhSach = [];

        // b3: lấy danh sách từ Local Storage
        if (localStorage.getItem('dssp') != null) {
            danhSach = JSON.parse(localStorage.getItem('dssp'));
        }

        // b4: đưa thêm sản phẩm vào danh sách
        danhSach.push(product);

        // b5: cập nhật lại danh sách vào Local Strorage
        var jsonDanhSach = JSON.stringify(danhSach);
        localStorage.setItem('dssp', jsonDanhSach);
    }

}

function layTTTuInput() {
    // b1: truy cập các node input để lấy thông tin sản phẩm
    var nodeHinhAnh = document.getElementById('hinhAnh')
    var hinhAnh = nodeHinhAnh.value;
    console.log(hinhAnh);
    nodeHinhAnh.value = '';

    var nodeTen = document.getElementById('ten');
    var ten = nodeTen.value;
    console.log(ten);
    nodeTen.value = '';

    var nodeGiaGoc = document.getElementById('giaGoc');
    var giaGoc = nodeGiaGoc.value;
    console.log(giaGoc);
    nodeGiaGoc.value = '';

    var nodePhanTramGiamGia = document.getElementById('phanTramGiamGia');
    var phanTramGiamGia = nodePhanTramGiamGia.value;
    console.log(phanTramGiamGia);
    nodePhanTramGiamGia.value = '';

    // b2: tạo ra các đối tượng thuộc tính
    var sanPhamNew = SanPham(ten, hinhAnh, giaGoc, phanTramGiamGia);
    return sanPhamNew;
}
function kiemTraHopLe() {
    var hopLe = true;
    var nodeInputHinhAnh = document.getElementById('hinhAnh');
    var nodeInputTen = document.getElementById('ten');
    var nodeInputGiaGoc = document.getElementById('giaGoc');
    var nodeInputPhanTramGiam = document.getElementById('phanTramGiamGia');
    var hinhAnh = nodeInputHinhAnh.value;
    var ten = nodeInputTen.value;
    var giaGoc = nodeInputGiaGoc.value;
    var phanTramGiamGia = nodeInputPhanTramGiam.value;
    var nodeHienthiloi1 = document.getElementById('loi1');
    var nodeHienthiloi2 = document.getElementById('loi2');
    var nodeHienthiloi3 = document.getElementById('loi3');
    var nodeHienthiloi4 = document.getElementById('loi4');
    nodeHienthiloi1.innerHTML = '';
    nodeHienthiloi2.innerHTML = '';
    nodeHienthiloi3.innerHTML = '';
    nodeHienthiloi4.innerHTML = '';
    if (hinhAnh == null || hinhAnh.length == 0) {
        hopLe = false;
        nodeHienthiloi1.innerHTML = 'Hình ảnh không được trống';
    }
    if (ten == null || ten.length == 0) {
        hopLe = false;
        nodeHienthiloi2.innerHTML = 'Tên không được trống';
    }
    if (giaGoc == null || giaGoc.length == 0) {
        hopLe = false;
        nodeHienthiloi3.innerHTML = 'Giá gốc không được trống';
    }
    if (phanTramGiamGia < 0 || phanTramGiamGia > 100) {
        hopLe = false;
        nodeHienthiloi4.innerHTML = 'Phần trăm giảm giá nằm trong khoảng từ 1-100';
    }
    return hopLe;
}