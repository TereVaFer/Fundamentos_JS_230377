//EJERCICIO 01: DECLARACI+ON DE VARIABLES

// a) Var
var miNombre = "Teresa "
var misApellidos;
var miEdad = 19;

console.warn("Declaración de variables usando: VAR");
//El objeto de console nos permite evitar daños a la terminal y poder visualizar el valor de una variable o resultado de una función o método

console.log("Intentado leer las variables: " ,miNombre, misApellidos); 

misApellidos = "Vargas Fernández"
console.log("Ya que ambas variables  fueron inicializadas vuelvo a intentar leerlas: "  ,miNombre ,misApellidos); 

//Una variable puede cambiar en el proceso de ejecución del programa 


// b) Const


console.warn("-------Declaracion de variables de tipo constante usndo: CONST");
const miUniversidad = "UT Xicotepec ";
const miMatricula = 230377;
console.log("Hola: ",miNombre, " " ,misApellidos, " se que estudias actualmente en: ", miUniversidad ," asignaron la matricula: " ,miMatricula, " y tienes la edad de: " ,miEdad, "años."); 

//Para saber el tipo de dato que tiene una variable o constante opodemos utilizar la función typeof()

console.log("Analizando los datos puedo deducir que: ")
console.log("Mi nombre es del tipo: " ,typeof(miNombre))
console.log("MisApellidos es del tipo: " ,typeof(misApellidos))
console.log("MiUniversidad es del tipo: ", typeof(miUniversidad))
console.log("MiMatricula es de tipo" , typeof(miMatricula))
console.log("MiEdad es del tipo" , typeof(miEdad))


// c) LET
let MiFechaNacimiento= "2005-06-17";
let miColorFavorito;

console.warn("----------Declaración de variables locales usando: LET")
console.log("Genial, te voy conociendo mejor, ahora sé que naciste el :" ,MiFechaNacimiento, " y tu color favorito es: mmmmmmm dejame pensar.... ");
miColorFavorito= "Rojo";
console.log(`Creo que es:  ${miColorFavorito} le atine?`); //La manera de mostrar textos fijos con el valor actual de las variables se le conoce como: 
//interpolación y deben iniciar y finalizar on un  backtic - tilde inversa
console.log("Mi FechaNcimiento es de tipo" , typeof(MiFechaNacimiento))
console.log("miColorFavorito es del tipo" , typeof(miColorFavorito))
