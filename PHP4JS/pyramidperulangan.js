const maxValue = parseInt(prompt("Input Nilai Max: "), 10);

if (!isNaN(maxValue) && maxValue > 0) {
    // Bagian atas (piramida terbalik)
    for (let i = maxValue; i >= 1; i--) {
        console.log(String(i).repeat(i));
    }
    
    // Bagian bawah (piramida normal tanpa angka paling atas)
    for (let i = 2; i <= maxValue; i++) {
        console.log(String(i).repeat(i));
    }
} else {
    console.log("Masukkan angka yang valid!");
}
