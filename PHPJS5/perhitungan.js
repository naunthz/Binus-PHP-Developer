function printHeader() {
    console.log("---------------------");
    console.log("| Muhammad Naufal Athallah |");
    console.log("|      Bintaro      |");
    console.log("---------------------");
}

function calculate(operator, num1 = 0, num2 = 0) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? (num1 / num2).toFixed(2) : "Tidak bisa dibagi nol!";
        case "%":
            return num2 !== 0 ? num1 % num2 : "Tidak bisa modulus dengan nol!";
        default:
            return "Operator tidak valid!";
    }
}

function main() {
    printHeader(); 

    while (true) {
        let operator = prompt("Masukkan Menu (+|-|/|*|%|stop):");
        if (operator.toLowerCase() === "stop") {
            console.log("Program Berhenti, Terima Kasih telah menggunakan program saya");
            break;
        }

        let num1 = parseFloat(prompt("Masukkan Nilai 1:"));
        let num2 = parseFloat(prompt("Masukkan Nilai 2:"));

        let result = calculate(operator, num1, num2);

        switch (operator) {
            case "+":
                console.log(`Hasil Penjumlahan ${num1} + ${num2} adalah ${result}`);
                break;
            case "-":
                console.log(`Hasil Pengurangan ${num1} - ${num2} adalah ${result}`);
                break;
            case "*":
                console.log(`Hasil Perkalian ${num1} * ${num2} adalah ${result}`);
                break;
            case "/":
                console.log(`Hasil Pembagian ${num1} / ${num2} adalah ${result}`);
                break;
            case "%":
                console.log(`Hasil Modulus ${num1} % ${num2} adalah ${result}`);
                break;
            default:
                console.log("Operator tidak valid! Silakan coba lagi.");
        }
    }
}

main(); //Menjalankan Program
