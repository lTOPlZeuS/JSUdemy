/* Reglas para crear una cadena de texto String
  1. Cadena de texto entre comillas dobles o simples
  2. No se puede usar al mismo tiempo comillas simples y dobles
*/
const producto = "Monitor 20 pulgadas";
console.log(producto);

const producto2 = String("Monitor 25 pulgadas");
console.log(producto2);

const producto3 = new String("Monitor 30 pulgadas");
console.log(producto3);
console.log(producto3[2]);
