import Contenedor from "./contenedor.js";
import Producto from "./producto.js";

const contenedor = new Contenedor();

let product1 = new Producto("Coca cola", 180, null);
let product2 = new Producto("Pepsi", 150, null);

await contenedor.save(product1);
await contenedor.save(product2);

console.log("Get all");
console.log(await contenedor.getAll());
console.log("Get by Id");
console.log(await contenedor.getById(2));
