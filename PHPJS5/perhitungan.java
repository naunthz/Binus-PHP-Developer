import java.util.Scanner;

public class perhitungan {
    
    public static void printHeader() {
        System.out.println("-----------------------------");
        System.out.println("| Muhammad Naufal Athallah |");
        System.out.println("|         Bintaro         |");
        System.out.println("-----------------------------");
    }

    public static double calculate(char operator, double num1, double num2) {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return (num2 != 0) ? num1 / num2 : Double.NaN; 
            case '%':
                return (num2 != 0) ? num1 % num2 : Double.NaN; 
            default:
                return Double.NaN; 
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        printHeader();

        while (true) {
            System.out.print("Masukkan Menu (+|-|/|*|%|stop): ");
            String input = scanner.next();

            if (input.equalsIgnoreCase("stop")) {
                System.out.println("Program Berhenti, Terima Kasih telah menggunakan program saya");
                break;
            }

            char operator = input.charAt(0);
            
            System.out.print("Masukkan Nilai 1: ");
            double num1 = scanner.nextDouble();
            
            System.out.print("Masukkan Nilai 2: ");
            double num2 = scanner.nextDouble();

            double result = calculate(operator, num1, num2);

            if (!Double.isNaN(result)) {
                System.out.printf("Hasil %s %.2f %c %.2f adalah %.2f%n", 
                                  (operator == '+' ? "Penjumlahan" :
                                   operator == '-' ? "Pengurangan" :
                                   operator == '*' ? "Perkalian" :
                                   operator == '/' ? "Pembagian" :
                                   "Modulus"),
                                  num1, operator, num2, result);
            } else {
                System.out.println("Operator tidak valid atau terjadi kesalahan!");
            }
        }

        scanner.close();
    }
}
