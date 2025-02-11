function isNumber(value) {
    return !isNaN(value) && value !== null && value !== "";
}

function kelvinToCelcius() {
    let K;
    do {
        K = prompt("Silahkan Menginput Suhu Kelvin:");
    } while (!isNumber(K));

    K = parseFloat(K);
    let Celcius = K - 273.15;
    alert(`Suhu dalam Celcius: ${Celcius}`);
}

kelvinToCelcius();
