let C;
do {
    C = prompt("Silahkan Menginput Suhu Celcius");
} while (isNaN(C));  // Cek apakah input adalah angka

let Kelvin = parseFloat(C) + 273.15;
console.log("Suhu dalam Kelvin: " + Kelvin);
