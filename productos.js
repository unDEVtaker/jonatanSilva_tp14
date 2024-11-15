/*
Micro desafío 1:
El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir ejecutando cada una de las siguientes consignas para lograr
el objetivo:
1. En Visual Studio Code crear la carpeta de trabajo y dentro de ella inicializar un repositorio local y vincularlo con un repositorio remoto cuyo nombre debe tener la siguiente nomenclatura: nombreApellido_tp14
2. Crear un archivo llamado products.js
3. Define un array que contenga un conjunto de seis (6) productos de electrodomésticos.
4. Ejecutar sobre el array creado las siguientes acciones:
a. Acceder de manera arbitraria a diferentes elementos del array. Recuerda mostrar por la consola los resultados.
b. Extraer el primer elemento del array y agregarlo al final del mismo.
c. Agregar al final del array dos (2) nuevos productos.
d. Mostrar por la consola la cantidad de elementos que contiene el array.
e. Buscar un elemento del array y crear una condición responsable de establecer si existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje: “Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado no existe”.
f. Unificar todos los elementos del array en una cadena de texto (string), separando los elementos por espacios en blanco.
g. Determinar la cantidad de elementos que posee la cadena de texto obtenida.
h. Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello.
i. Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras de la cadena de texto. Tener en cuenta que los elementos deben estar separados por una coma.
En todos los casos se debe mostrar por consola el resultado obtenido.
*/



//3.Definir un array con seis productos de electro
let productos = ['Heladera', 'Lavarropas', 'Microondas', 'Cocina', 'Aspiradora', 'Licuadora'];

//4.Ejecutar sobre el array las siguientes acciones
//a.Acceder de manera arbitraria a diferentes elementos del array
console.log("Producto en el indice 0:", productos[0]);  //Muestra Heladera
console.log("Producto en el indice 3:", productos[3]);  //Muestra Microondas

//b. Extraer el primer elemento del array y agregarlo al final
//Elimina el primer elemento
let primerProducto = productos.shift();
//Agrega el primer elemento al final
productos.push(primerProducto);
//muestro por consola
console.log("Array despues de mover el primer electrodomestico al final de la lista:", productos);

//c.Agregar al final del array dos nuevos productos
productos.push('Freidora de aire', 'Horno Electrico');
//muestro por consola
console.log("Array despues de agregar nuevos productos:", productos);

//d.Mostrar por la consola la cantidad de elementos que contiene el array
console.log("Cantidad de productos en el array:", productos.length);

//e.Buscar un elemento del array y crear una condición para saber si existe
//uso una funcion para recorrer el array y buscar el productos, con if devuelve un msj si lo encuentra o no
function buscarProducto(productos, productoBuscado) {
    if(productos.includes(productoBuscado)){
        console.log("Producto encontrado");
    }else{
        console.log("El producto buscado no existe");
    }
}

// Llamada a la función
let productoBuscado = 'Lavarropas';
buscarProducto(productos, productoBuscado);

//f.Unificar todos los elementos del array en una cadena de texto separada por espacios
let cadenaDeProductos = productos.join(' ');
console.log("Cadena de productos:", cadenaDeProductos);

//g.Determinar la cantidad de elementos que posee la cadena de texto obtenida
console.log("Cantidad de caracteres en la cadena de texto:", cadenaDeProductos.length);

//h.Cambiar el nombre de algún producto en la cadena de texto por otro con una funcion
function cambiarProducto(cadena, productoActual, productoNuevo) {
    return cadena.replace(productoActual, productoNuevo);
}

//Utilizo la funcion  para cambiar 'Microondas' por 'Televisor'
cadenaDeProductos = cambiarProducto(cadenaDeProductos, 'Microondas', 'Televisor');
console.log("Cadena de productos despues de cambiar 'Microondas' por 'Televisor':", cadenaDeProductos);

// i. Generar un nuevo array con cada una de las palabras de la cadena de texto separadas con comas
let nuevoArray = cadenaDeProductos.split(' ');
console.log("Nuevo array generado a partir de la cadena:", nuevoArray);
