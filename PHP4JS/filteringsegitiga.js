let ulangi = true;

while (ulangi) {
    let sisiA = parseInt(prompt("Masukkan Sisi A: "), 10);
    let sisiB = parseInt(prompt("Masukkan Sisi B: "), 10);
    let sisiC = parseInt(prompt("Masukkan Sisi C: "), 10);
    
    if (!isNaN(sisiA) && !isNaN(sisiB) && !isNaN(sisiC)) {
        if (sisiA === sisiB && sisiB === sisiC) {
            console.log("Merupakan Segitiga Sama Sisi");
        } else if (sisiA === sisiB || sisiB === sisiC || sisiA === sisiC) {
            console.log("Merupakan Segitiga Sama Kaki");
        } else {
            console.log("Merupakan Segitiga Sembarang");
        }
    } else {
        console.log("Masukkan angka yang valid!");
        continue;
    }
    
    let jawab = prompt("Ingin mengulanginya lagi? (Y/N): ").trim().toUpperCase();
    if (jawab !== 'Y') {
        ulangi = false;
        console.log("Program Berhenti");
        console.log("Terima kasih telah menggunakan program saya ^^\n");
    }
}
