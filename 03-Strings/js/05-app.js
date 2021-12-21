// Rempalaza una cadena de texto por otra
const producto = "Monitor 20 pulgadas";
console.log(producto);
console.log(producto.replace("Monitor", "Monitor LG"));
console.log(producto);

// Slice para cortar una cadena de texto
console.log(producto.slice(0, 10));
console.log(producto.slice(0, -10));
console.log(producto.slice(9));

// Alternativa a slice para cortar una cadena de texto
console.log(producto.substring(0, 10));
