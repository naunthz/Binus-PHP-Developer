function isNumber(value) {
    return !isNaN(value) && value !== null && value !== "";
}

function celciusToFahrenheit() {
    let C;
    do {
        C = prompt("Silahkan Menginput Suhu Celcius:");
    } while (!isNumber(C));

    C = parseFloat(C);
    let Fahrenheit = (9 / 5) * C + 32;
    alert(`Suhu dalam Fahrenheit: ${Fahrenheit}`);
}

celciusToFahrenheit();
