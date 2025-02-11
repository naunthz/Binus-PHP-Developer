let K;
do {
    K = prompt("Silahkan Menginput Suhu Kelvin");
} while (isNaN(K));  // Cek apakah input adalah angka

let Fahrenheit = (9 / 5) * (parseFloat(K) - 273.15) + 32;
console.log("Suhu dalam Fahrenheit: " + Fahrenheit);
