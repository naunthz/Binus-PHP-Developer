import java.util.Scanner; //

class Mahasiswa {
    private String nama;
    private String nim;
    private String jurusan;

    public Mahasiswa(String nama, String nim, String jurusan) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
    }

    public String getNama() {
        return nama;
    }

    public String getNim() {
        return nim;
    }

    public String getJurusan() {
        return jurusan;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public void setNim(String nim) {
        this.nim = nim;
    }

    public void setJurusan(String jurusan) {
        this.jurusan = jurusan;
    }

    public void tampilkanBiodata() {
        System.out.println("=== Biodata Mahasiswa ===");
        System.out.println("Nama    : " + this.getNama());
        System.out.println("NIM     : " + this.getNim());
        System.out.println("Jurusan : " + this.getJurusan());
    }
}

public class biodatamahasiswa {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Masukkan Nama Mahasiswa: ");
        String namaMahasiswa = input.nextLine();
        
        System.out.print("Masukkan NIM: ");
        String nimMahasiswa = input.nextLine();
        
        System.out.print("Masukkan Jurusan: ");
        String jurusanMahasiswa = input.nextLine();

        Mahasiswa mahasiswa1 = new Mahasiswa(namaMahasiswa, nimMahasiswa, jurusanMahasiswa);

        mahasiswa1.tampilkanBiodata();
        
        input.close(); 
    }
}
