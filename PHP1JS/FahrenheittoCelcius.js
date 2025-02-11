function isNumber(value) {
    return !isNaN(value) && value !== null && value !== "";
}

function fahrenheitToCelcius() {
    let F;
    do {
        F = prompt("Silahkan Menginput Suhu Fahrenheit:");
    } while (!isNumber(F));

    F = parseFloat(F);
    let Celcius = (F - 32) * (5 / 9);
    alert(`Suhu dalam Celcius: ${Celcius}`);
}

fahrenheitToCelcius();
