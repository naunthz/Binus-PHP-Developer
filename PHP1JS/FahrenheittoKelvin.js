function isNumber(value) {
    return !isNaN(value) && value !== null && value !== "";
}

function fahrenheitToKelvin() {
    let F;
    do {
        F = prompt("Silahkan Menginput Suhu Fahrenheit:");
    } while (!isNumber(F));

    F = parseFloat(F);
    let Kelvin = (5 / 9) * (F - 32) + 273.15;
    alert(`Suhu dalam Kelvin: ${Kelvin}`);
}

fahrenheitToKelvin();
