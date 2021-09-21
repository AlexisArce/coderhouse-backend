import Contenedor from "./contenedor.js";
import Producto from "./producto.js";

const contenedor = new Contenedor();

console.log("Datos iniciales: ");
console.log(await contenedor.getAll());

await contenedor.deleteAll();

console.log("Datos luego de invocar a deleteAll()");
console.log(await contenedor.getAll());

let product1 = new Producto("Coca cola", 180, null);
let product2 = new Producto("Pepsi", 150, null);

await contenedor.save(product1);
await contenedor.save(product2);

console.log("Datos luego de crear dos productos con save");
console.log(await contenedor.getAll());

console.log("Get by Id == 2");
console.log(await contenedor.getById(2));

await contenedor.deleteById(1);

console.log("Datos luego de eliminar el producto con id == 1");
console.log(await contenedor.getAll());
