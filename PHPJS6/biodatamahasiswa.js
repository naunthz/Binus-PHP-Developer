class Mahasiswa {
    constructor(nama, nim, jurusan) {
        this._nama = nama;
        this._nim = nim;
        this._jurusan = jurusan;
    }

    get nama() {
        return this._nama;
    }

    get nim() {
        return this._nim;
    }

    get jurusan() {
        return this._jurusan;
    }

    set nama(nama) {
        this._nama = nama;
    }

    set nim(nim) {
        this._nim = nim;
    }

    set jurusan(jurusan) {
        this._jurusan = jurusan;
    }

    tampilkanBiodata() {
        console.log("=== Biodata Mahasiswa ===");
        console.log(`Nama    : ${this.nama}`);
        console.log(`NIM     : ${this.nim}`);
        console.log(`Jurusan : ${this.jurusan}`);
    }
}

const namaMahasiswa = prompt("Masukkan Nama Mahasiswa: ").trim();
const nimMahasiswa = prompt("Masukkan NIM: ").trim();
const jurusanMahasiswa = prompt("Masukkan Jurusan: ").trim();

const mahasiswa1 = new Mahasiswa(namaMahasiswa, nimMahasiswa, jurusanMahasiswa);
mahasiswa1.tampilkanBiodata();
