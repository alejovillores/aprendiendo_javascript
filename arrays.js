//Metodos y manejos de arrays
let lista = ['alejo', 'jorge', 'esteban', 'jose'];

// pop() -> elimina el ultimo elemento del array
let ultimoElemento = lista.pop(); //jose -> ahora el array es de 3 elementos

//shift() ->elimina el primero, como pop
let primerElemento = lista.shift(); // alejo -> ahora el array es de 2

//push(); -> el famoso add
let listaNueva = lista.push('jaime');

//reverse() -> cambia los sentidos
let lista2 = ['alejo', 'jorge', 'esteban', 'jose'];
let listaAlRevez = lista2.reverse(); // let lista = ['jose', 'esteban', 'jorge', 'alejo'];

//sort() -> como python
let listaNumerica = [0, 3, 2, 1, 6, 8, 5];
let listaOrdenada = listaNumerica.sort(); //[0,1,2,3,5,6,8]

//splice() -> elimina los elementos repetidos
// join() -> de una array genera un string
// slice()

//filter() -> crea un nuevo array con los elementos que cumplan las condiciones (va iterando sobre los elementos)
let arrayFiltrado = listaNumerica.filter(numero => numero > 5); // [6,8]

//forEach() -> parecido al filter pero no devuelve el array q cumpla las condiciones

