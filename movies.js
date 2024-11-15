/* Micro desafío 2 (opcional NO ENTREGABLE):

El Tech Leader de la empresa DH-Movies requiere conocer la estructura de datos del nuevo proyecto, para ello debes tener presente lo siguiente:

1. En la carpeta ya creada, crea un el archivo movies.js
2. Crear una estructura para almacenar un conjunto de películas, tales como: ‘Turno de día’, ‘30 noches con mi ex’, ‘Bestia’, ‘El monte’, ‘Top gun maverick', ‘Elvis’,‘Thor: amor y trueno’.
3. Más tarde desde la producción indicaron que la película más vendida era: ‘Thor: amor y trueno’. Por lo tanto, en la estructura creada querían ver primero dicha película y con letras en mayúsculas. Para ello el tech leader, te solicita que crees una función, la cual recibirá por parámetro la película indicada y deberá retornar la misma pero en mayúscula. Para ello sería bueno que investigues sobre el método .toUpperCase(). Con ese valor recibido, deberás colocarla primero en la estructura creada.
4. Una vez terminada la actividad, nos indican que debemos crear una cadena de texto para las siguientes películas próximas a estrenar:
a. Counter-Strike
b. NOP
c. Vértigo
d. Nick
e. Avatar
Nos piden crear una estructura parecida a la trabajada en el punto 2, teniendo en cuenta que cada elemento debe estar separado por una coma.
5. Finalmente, el Tech Leader te solicita crear una función que reciba por parámetro ambas estructuras creadas y debe devolver un nueva nueva estructura con todas las películas, para ello te recomendamos que investigues lo que hace el método .concat().
En todos los casos se debe mostrar por consola el resultado obtenido
*/

//2.Crear el array 
let peliculas = ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick', 'Elvis', 'Thor: amor y trueno'];

//3.funcion para mover thor al primer lugar y en mayusculas

function moverPeliculaAlInicio(peliculas, nombrePelicula) {
    // Convertir la película a mayúsculas
    const peliculaEnMayusculas = nombrePelicula.toUpperCase();
    
    // Encontrar el índice de la película
    const indice = peliculas.indexOf(nombrePelicula);
    
    // Si la película se encuentra, la elimino pero la agrego al inicio
    if (indice !== -1) {
        peliculas.splice(indice, 1);
        peliculas.unshift(peliculaEnMayusculas);
    }
    return peliculas;
}

//llamo a la funcion y muestro por consola
peliculas = moverPeliculaAlInicio(peliculas, 'Thor: amor y trueno');
console.log('Películas ordenadas:', peliculas);

//3.Crear una cadena de texto con las películas próximas a estrenar
const proximosEstrenos = 'Counter-Strike, NOP, Vértigo, Nick, Avatar';

// Convertir la cadena en una estructura de array como en el punto 2 y separo por comas
const proximosEstrenosArray = proximosEstrenos.split(', ');
console.log('Proximos Estrenos:', proximosEstrenosArray);

//4. crear un funcion para combinar ambas estructuras
function combinarPeliculas(listaPeliculas1, listaPeliculas2) {
    //combinar las estructuras usando .concat()
    return listaPeliculas1.concat(listaPeliculas2);
}

//llamo a la funcion y muetro por consola
const listadoCompletoDePeliculas = combinarPeliculas(peliculas, proximosEstrenosArray);
console.log('Todas las películas:', listadoCompletoDePeliculas);