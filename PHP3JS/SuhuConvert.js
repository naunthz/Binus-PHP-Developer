let suhu = parseFloat(prompt("Masukkan suhu: "));
let pilihan = parseInt(prompt("Pilih konversi:\n1. Celcius ke Fahrenheit\n2. Celcius ke Kelvin\n3. Fahrenheit ke Celcius\n4. Fahrenheit ke Kelvin\n5. Kelvin ke Celcius\n6. Kelvin ke Fahrenheit"));

let hasil;

if (pilihan === 1) {  
    hasil = (suhu * 9/5) + 32;  
    console.log(`Hasil: ${hasil.toFixed(2)}°F`);  
} else if (pilihan === 2) {  
    hasil = suhu + 273.15;  
    console.log(`Hasil: ${hasil.toFixed(2)}K`);  
} else if (pilihan === 3) {  
    hasil = (suhu - 32) * 5/9;  
    console.log(`Hasil: ${hasil.toFixed(2)}°C`);  
} else if (pilihan === 4) {  
    hasil = (suhu - 32) * 5/9 + 273.15;  
    console.log(`Hasil: ${hasil.toFixed(2)}K`);  
} else if (pilihan === 5) {  
    hasil = suhu - 273.15;  
    console.log(`Hasil: ${hasil.toFixed(2)}°C`);  
} else if (pilihan === 6) {  
    hasil = (suhu - 273.15) * 9/5 + 32;  
    console.log(`Hasil: ${hasil.toFixed(2)}°F`);  
} else {  
    console.log("Pilihan tidak valid.");  
}
