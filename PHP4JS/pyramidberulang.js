import java.util.Scanner;

public class pyramidberulang {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Input Nilai Max: ");
        int max = scanner.nextInt();
        scanner.close();
        
        for (int i = max; i >= 1; i--) {
            for (int j = 0; j < i; j++) {
                System.out.print(i);
            }
            System.out.println();
        }
        
        for (int i = 2; i <= max; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print(i);
            }
            System.out.println();
        }
    }
}
