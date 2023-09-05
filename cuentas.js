alert("Bienvenido al Restaurante. Esta es tu cuenta:");
var entrada = parseInt(prompt("Costo de Entrada"));
var fuerte = parseInt(prompt("Costo del Plato Principal"));
var postre = parseInt(prompt("Costo del Postre"));
var cuenta = entrada + fuerte + postre;
var igv = (cuenta * 0.18) + cuenta
console.log("El costo de la Entrada es: s/ " + entrada);
console.log("El costo del Plato Principal es: s/ " + fuerte);
console.log("El costo del Postre es: s/ " + postre);
console.log("El costo Total es: s/ " + cuenta);
console.log("El costo Total con IGV es: s/ " + igv);