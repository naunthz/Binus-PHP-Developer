let r = parseFloat(prompt("Masukkan jari-jari tabung (meter): "));
let t = parseFloat(prompt("Masukkan tinggi tabung (meter): "));

let pi = 3.14159;
let volume = pi * (r * r) * t; 

console.log(`Volume tabung: ${volume.toFixed(2)} meter kubik`);
