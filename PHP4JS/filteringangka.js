let ulangi = true;

while (ulangi) {
    let angka = parseInt(prompt("Masukkan Angka Bebas: "), 10);
    
    if (!isNaN(angka)) {
        if (angka % 2 === 0) {
            console.log(`Angka ${angka} merupakan genap`);
        } else {
            console.log(`Angka ${angka} merupakan ganjil`);
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
