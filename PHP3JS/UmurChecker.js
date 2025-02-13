let umur = parseInt(prompt("Masukkan umur: "));

if (umur < 0) {
    console.log("Umur tidak bisa negatif.");
} else if (umur <= 1) {
    console.log("Kategori: Bayi");
} else if (umur <= 3) {
    console.log("Kategori: Batita");
} else if (umur <= 5) {
    console.log("Kategori: Balita");
} else if (umur <= 12) {
    console.log("Kategori: Anak-Anak");
} else if (umur <= 17) {
    console.log("Kategori: Remaja");
} else if (umur <= 21) {
    console.log("Kategori: ABG");
} else if (umur <= 30) {
    console.log("Kategori: Pra Dewasa");
} else if (umur <= 50) {
    console.log("Kategori: Dewasa");
} else if (umur <= 70) {
    console.log("Kategori: Pra Lansia");
} else {
    console.log("Kategori: Lansia");
}
