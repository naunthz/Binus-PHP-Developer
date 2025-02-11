function cekKelulusan() {
    let Nilai = parseFloat(prompt("Masukkan Nilai:"));
    if (Nilai >= 80) {
        console.log("Lulus dengan Nilai =", Nilai);
    } else {
        console.log("Tidak Lulus dengan Nilai =", Nilai);
    }
}

cekKelulusan();
