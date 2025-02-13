let a = parseFloat(prompt("Masukkan nilai A: "));
let b = parseFloat(prompt("Masukkan nilai B: "));
let c = parseFloat(prompt("Masukkan nilai C: "));

if (a === 0) {
    console.log("Bukan merupakan akar persamaan kuadrat");
} else {
    let diskriminan = b * b - 4 * a * c;
    console.log(`Persamaan kuadrat: ${a}x² + ${b}x + ${c} = 0`);
    console.log(`Nilai diskriminan: ${diskriminan}`);
    
    function sqrt(n) {
        let x = n;
        let y = (x + n / x) / 2;
        while (y < x) {
            x = y;
            y = (x + n / x) / 2;
        }
        return x;
    }
    
    if (diskriminan > 0) {
        let akarDiskriminan = sqrt(diskriminan);
        let x1 = (-b + akarDiskriminan) / (2 * a);
        let x2 = (-b - akarDiskriminan) / (2 * a);
        console.log("Merupakan Akar Berbeda");
        console.log(`Akar x1: ${x1}`);
        console.log(`Akar x2: ${x2}`);
    } else if (diskriminan < 0) {
        console.log("Merupakan Akar Imajiner");
        console.log(`Akar x1: (-${b} + sqrt(${(-1) * diskriminan})) / (2 * ${a})`);
        console.log(`Akar x2: (-${b} - sqrt(${(-1) * diskriminan})) / (2 * ${a})`);
    } else {
        let x = -b / (2 * a);
        console.log("Merupakan Akar Kembar");
        console.log(`Akar: ${x}`);
    }
}
