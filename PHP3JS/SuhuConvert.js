let suhu = parseFloat(prompt("Masukkan suhu: "));
let pilihan = parseInt(prompt("Pilih konversi:\n1. Celcius ke Fahrenheit\n2. Celcius ke Kelvin\n3. Fahrenheit ke Celcius\n4. Fahrenheit ke Kelvin\n5. Kelvin ke Celcius\n6. Kelvin ke Fahrenheit"));

let hasil;
switch (pilihan) {
    case 1:
        hasil = (suhu * 9/5) + 32;
        console.log(`Hasil: ${hasil}°F`);
        break;
    case 2:
        hasil = suhu + 273.15;
        console.log(`Hasil: ${hasil}K`);
        break;
    case 3:
        hasil = (suhu - 32) * 5/9;
        console.log(`Hasil: ${hasil}°C`);
        break;
    case 4:
        hasil = (suhu - 32) * 5/9 + 273.15;
        console.log(`Hasil: ${hasil}K`);
        break;
    case 5:
        hasil = suhu - 273.15;
        console.log(`Hasil: ${hasil}°C`);
        break;
    case 6:
        hasil = (suhu - 273.15) * 9/5 + 32;
        console.log(`Hasil: ${hasil}°F`);
        break;
    default:
        console.log("Pilihan tidak valid.");
}
