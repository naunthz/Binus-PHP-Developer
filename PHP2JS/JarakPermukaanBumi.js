// Fungsi buat ngitung jarak antara dua titik di bumi
function hitungJarak(lat1, lon1, lat2, lon2) {
    const R = 6371; // Jari-jari bumi dalam km

    // Ubah derajat ke radian (karena Math di JS pakai radian)
    let dLat = (lat2 - lat1) * (Math.PI / 180);
    let dLon = (lon2 - lon1) * (Math.PI / 180);
    
    let radLat1 = lat1 * (Math.PI / 180);
    let radLat2 = lat2 * (Math.PI / 180);

    // Rumus Haversine (buat ngitung jarak di bola bumi)
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(radLat1) * Math.cos(radLat2);
    
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    return R * c; // Hasilnya dalam km
}

// Minta user masukin koordinat titik A & B
let latA = parseFloat(prompt("Masukin Latitude Titik A: "));
let lonA = parseFloat(prompt("Masukin Longitude Titik A: "));
let latB = parseFloat(prompt("Masukin Latitude Titik B: "));
let lonB = parseFloat(prompt("Masukin Longitude Titik B: "));

// Hitung jaraknya
let jarak = hitungJarak(latA, lonA, latB, lonB);

// hasilnya
console.log(`Jarak antara Titik A dan Titik B: ${jarak.toFixed(2)} km`);
