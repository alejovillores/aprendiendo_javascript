// Metodos y usos de cadenas en javascript

//concat() -> + ;
let cadena1 = "cadena 1";
let cadena2 = " cadena 2";
let cadenaConcatenada  = cadena1.concat(cadena2);

// startsWith() -> boolean
let boleano = cadena2.startsWith(" ");

// endsWith() -> boolean
let boleano2 = cadena1.endsWith("1");

// includes() -> boolean
let cadenaLarga = "soy alejo villores";
let esta = cadenaLarga.includes("alejo"); // True

// indexOf -> posicion de la primer letra, -1 si no está
let posicion = cadenaLarga.indexOf("alejo"); // 4

// lastIndexOf -> posicion de la ultima letra, -1 si no está
let posicion = cadenaLarga.lastIndexOf("alejo"); 

//repeat -> n veces que quiera
let cadenaRepetida = cadena1.repeat(2) // "cadena 1cadena 1"

//split() -> como python
let listaConPalabras = cadena1.split(" ");

//subtring() -> divide en cadenas chiquitas
let cadenaChiquita = cadenaLarga.substring(0,2); // indexInicio, indexFin

//toUpperCase -> a mayusculas
//toLowerCase -> a minusculas
let nombre = "aLeJo";
let nombreMayuscula = nombre.toUpperCase();
let nombreMinuscula = nombre.toLowerCase();

// trim() -> elimina espacios
let espacios = "    alejo   ";
let sinEspacios = espacios.trim(); // "alejo"


