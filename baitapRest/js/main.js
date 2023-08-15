let showThongTin = (diemToan, diemLy, diemHoa, ...khoiLopHai) => {


    console.log(diemToan, diemLy, diemHoa, khoiLopHai);

}


let tinhDiemTrungBinh = () => {
    let diemVan = document.getElementById('inpVan').value * 1
    let diemSu = document.getElementById('inpSu').value * 1
    let diemDia = document.getElementById('inpDia').value * 1
    let diemEnglish = document.getElementById('inpEnglish').value * 1
    let diemToan = document.getElementById('inpToan').value * 1
    let diemLy = document.getElementById('inpLy').value * 1
    let diemHoa = document.getElementById('inpHoa').value * 1


    let dtbKhoi1 = (diemToan + diemLy + diemHoa) / 3
    let dtbKhoi2 = (diemVan + diemSu + diemDia + diemEnglish) / 4

    document.getElementById('tbKhoi1').innerHTML = dtbKhoi1
    document.getElementById('tbKhoi2').innerHTML = dtbKhoi2
}


