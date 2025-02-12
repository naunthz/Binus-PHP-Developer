let panjang = parseFloat(prompt("Masukin panjang balok (meter): "));
let lebar = parseFloat(prompt("Masukin lebar balok (meter): "));
let tinggi = parseFloat(prompt("Masukin tinggi balok (meter): "));

let volume = panjang * lebar * tinggi;

console.log(`Volume balok: ${volume.toFixed(2)} meter kubik`);
