let a = parseFloat(prompt("Masukkan sisi A: "));
let b = parseFloat(prompt("Masukkan sisi B: "));
let c = parseFloat(prompt("Masukkan sisi C: "));

if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Bukan Segitiga");
} else if (a === b && b === c) {
    console.log("Segitiga Sama Sisi");
} else if (a === b || a === c || b === c) {
    console.log("Segitiga Sama Kaki");
} else if ((a * a + b * b === c * c) ||
           (a * a + c * c === b * b) ||
           (b * b + c * c === a * a)) {
    console.log("Segitiga Siku-Siku");
} else {
    console.log("Segitiga Sembarang");
}
