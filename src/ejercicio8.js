// src/ejercicio8.js

let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;
let precioFinal;

if (edad < 18) {
    precioFinal = tarifaBase * 0.80; // 20% descuento
} else if (edad >= 65) {
    precioFinal = tarifaBase * 0.60; // 40% descuento
} else {
    precioFinal = tarifaBase; // sin descuento
}

console.log(precioFinal.toFixed(2));
