

let precioUnitario = 25;
let cantidad = 60;
let precioFinal;

if (cantidad < 10) {
    precioFinal = precioUnitario * cantidad;
} else if (cantidad >= 10 && cantidad < 50) {
    precioFinal = precioUnitario * cantidad * 0.90; // 10% de descuento
} else if (cantidad >= 50) {
    precioFinal = precioUnitario * cantidad * 0.80; // 20% de descuento
}

console.log(precioFinal.toFixed(2));
