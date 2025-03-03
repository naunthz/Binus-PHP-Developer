function hitungRataRata() {
    const nilaiHuruf = {
        "A": 4.00, "A-": 3.75, "B+": 3.50, "B": 3.00, "B-": 2.75,
        "C+": 2.50, "C": 2.00, "C-": 1.75, "D": 1.50, "E": 1.20
    };
    
    let totalNilai = 0;
    let jumlahInput = 0;
    
    while (true) {
        let input = prompt("Masukkan Kategori Nilai (Tekan Enter Untuk Berhenti):").trim().toUpperCase();
        if (input === "") break;
        
        if (nilaiHuruf[input] !== undefined) {
            totalNilai += nilaiHuruf[input];
            jumlahInput++;
        } else {
            console.log("Kategori nilai tidak valid, coba lagi!");
        }
    }
    
    if (jumlahInput > 0) {
        let rataRata = totalNilai / jumlahInput;
        let predikat = Object.keys(nilaiHuruf).find(key => nilaiHuruf[key] === Math.round(rataRata * 4) / 4) || "Tidak diketahui";
        
        console.log(`Rata-rata nilainya adalah ${rataRata.toFixed(2)} dengan Predikat ${predikat}`);
    } else {
        console.log("Tidak ada nilai yang dimasukkan.");
    }
}

hitungRataRata();
