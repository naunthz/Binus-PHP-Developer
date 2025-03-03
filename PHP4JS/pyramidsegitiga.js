const maxValue = parseInt(prompt("Input Nilai Max: "), 10);

if (!isNaN(maxValue) && maxValue > 0) {
    for (let i = maxValue; i >= 1; i--) {
        console.log(String(i).repeat(i));
    }
} else {
    console.log("Masukkan angka yang valid!");
}
