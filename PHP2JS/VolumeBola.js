let r = parseFloat(prompt("Masukin jari-jari bola (meter): "));

let pi = 3.14159;
let volume = (4 / 3) * pi * (r * r * r); // r^3 ditulis sebagai r * r * r

console.log(`Volume bola: ${volume.toFixed(2)} meter kubik`);
