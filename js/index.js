let nombre= prompt("Por favor, ingrese su nombre: ");
let apellido= prompt("Por favor, ingrese su apellido: ");
function bienvenida (nombre, apellido){
    alert("Bienvenido " + nombre + " " + apellido);
}
bienvenida (nombre, apellido);

const CARRITO = [
    {
        articulo: "Shirt IJU", precio: 1800
    },
    {
        articulo: "Pants SEA", precio: 2400
    },
    {
        articulo: "Tshirt BREEZE", precio: 1200
    },
    {
        articulo: "Sweater COMFY", precio: 2600
    },
    {
        articulo: "3xSocks", precio: 600
    },
    {
        articulo: "Hat SUMMER", precio: 500
    }
];

let totalPrecio = 0;

do{
    let adicion= prompt("Por favor, indique el producto que desea añadir al carrito");

    let productoSeleccionado = CARRITO.find(product => product.articulo.toUpperCase() === adicion.toUpperCase());

    if (productoSeleccionado){
        totalPrecio += productoSeleccionado.precio;
        console.log(`Producto añadido: ${productoSeleccionado.articulo}`);
        console.log(`Precio total: ${totalPrecio}`);
    } else {
        console.log("Producto no encontrado. Por favor, elija un producto válido.");
    }

    let continuar = prompt("Desea añadir otro producto a su carrito? (SI / NO)");

    if (continuar.toUpperCase() !== 'SI'){
        break;
    }

} while (true);

console.log(`El precio total de su carrito es: $ ${totalPrecio}`);

const descuento = 0.20;
let precioConDescuento = totalPrecio;

CARRITO.forEach(product => {
    precioConDescuento -= product.precio * descuento;
});

console.log(`Gracias por tu compra! Buenas noticias, obtienes un 20%OFF por nuestro SUMMER SALE!`);
console.log(`El precio final con el descuento aplicado es: $ ${precioConDescuento}`);

