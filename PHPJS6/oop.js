// Membuat class Student
class Student {
    constructor(nama = "None", nilai = "None") {
        this.nama = nama;
        this.nilai = nilai;
    }

    // Getter untuk mendapatkan nilai objek
    get getStudent() {
        return `\nNama: ${this.nama} \nNilai: ${this.nilai}`;
    }

    // Setter untuk mengubah data objek
    set setStudent(data) {
        if (data.nama) this.nama = data.nama;
        if (data.nilai) this.nilai = data.nilai;
    }

    // Method untuk menghapus data
    deleteStudent() {
        this.nama = "None";
        this.nilai = "None";
    }
}

// Inisialisasi objek kosong
let student = new Student();

// Perulangan program utama
while (true) {
    let pilihan = prompt(
        "===== Program OOP =====\n" +
        "1. Mendeklarasikan Objek\n" +
        "2. Menampilkan Objek\n" +
        "3. Merubah Nilai Objek\n" +
        "4. Menghapus Objek\n" +
        "5. Keluar Dari Program\n" +
        "Masukkan Pilihan (1/2/3/4/5):"
    );

    // Percabangan sesuai input user
    if (pilihan === "1") {
        let nama = prompt("Masukkan Namamu:");
        let nilai = prompt("Masukkan Nilaimu:");
        student.setStudent = { nama, nilai };
        alert("Data Berhasil Ditambahkan");

    } else if (pilihan === "2") {
        alert(student.getStudent);
        console.log(student.getStudent);

    } else if (pilihan === "3") {
        let ubah = prompt("Apa yang ingin diubah (Nama/Nilai):");
        if (ubah.toLowerCase() === "nama") {
            let nama = prompt("Masukkan Nama Baru:");
            student.setStudent = { nama };
            alert("Data Nama Berhasil Dirubah");
        } else if (ubah.toLowerCase() === "nilai") {
            let nilai = prompt("Masukkan Nilai Baru:");
            student.setStudent = { nilai };
            alert("Data Nilai Berhasil Dirubah");
        } else {
            alert("Pilihan tidak valid.");
        }

    } else if (pilihan === "4") {
        student.deleteStudent();
        alert("Data Berhasil Dihapus");

    } else if (pilihan === "5") {
        alert("Terima Kasih Sudah Menggunakan Program Saya");
        break;

    } else {
        alert("Pilihan tidak valid. Silakan coba lagi.");
    }
}
