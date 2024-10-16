//Tiposde Datos en JS   

// 1. Undefined 
console.warn("--------- Tipo de Dato: UNDEFINED")
let cliente;
console.log(`El cliente es: ${cliente}` ); //La manera de mostrar textos fijos con el valor actual de las variables se le conoce como: 
//interpolación y deben iniciar y finalizar on un  backtic - tilde inversa
console.log(`El tipo de dato de la variable cliente es:  ${typeof(cliente)}`);

cliente = "Juan Romero";
console.log(`El cliente es: ${cliente}` );
console.log(`El tipo de dato de la variable cliente es:  ${typeof(cliente)}`);

cliente = 180823
console.log(`El cliente es: ${cliente}` );
console.log(`El tipo de dato de la variable cliente es:  ${typeof(cliente)}`);

//Undefined es el tipo que por defecto se asigna a variables no inicializadas o no declaradas.

// 2. BOOLEAN
console.warn("--------- Tipo de Dato: BOOLEAN (Boleano - True/ False")

let esPremium = "No lo sé ";
console.log(`¿Es el cliente Premium? : ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es:  ${typeof(esPremium)}`);

esPremium= "true";
console.log(`Asignando el valor "true" a la variable` );
console.log(`El tipo de dato de la variable esPremium es:  ${typeof(esPremium)}`);

esPremium= true;
console.log(`¿Es el cliente Premium? : ${typeof(esPremium)}`);
console.log(`El tipo de dato de la variable esPremium es:  ${typeof(esPremium)}`);
console.log(`Asignando el valor true a la variable` );

if (esPremium){
    console.log("El cliente pagó por usar el servicio");
}else{
    console.log("El cliente que recibe los servicios gratuitos")
}


// 3. Number

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_trasaccion;

console.warn("------ Tipo de Dato - NUMBER (Numeros, positivos, ngativos, decimales, flotantes"),
console.log(`Tu saldo del dia de hoy es de: ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta, ${costo_producto}`);
cantidad= 8;
console.log(`Has elegido comprar: ${cantidad} de productos`);
console.log(`El importe total de la compra es: ${cantidad*costo_producto} `);

saldo_cuenta=saldo_cuenta- (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de:  ${saldo_cuenta}`);
//El cliente realiza un abono de 1500
monto_trasaccion=1500; 
console.log(`Tu abono de : ${monto_trasaccion} ha sido recibido, tu nuevo saldo es de : ${(saldo_cuenta+monto_trasaccion)}`) ;



//4. Strings o cadenas de texto
const alumno = "Teresa Vargas Fernández"
let producto;

console.warn("--- Tipo de dato - String (Cadena o caractéres");
console.log(`El nombre del alumno es : ${alumno}, que es un tipo de dato ${typeof alumno}`)
producto = "Monitor 20 pulgadas"
console.log(`El nombre del producto es : ${producto}, que es un tipo de dato ${typeof producto}`)

//Manipulando los Strings
console.log(`Más adelante podremos transformar el contenido de los String usando funciones especificas como convertir a mayusculas: ${alumno} => ${alumno.toUpperCase()}`)
console.log(`o en su defecto a minusculas: ${producto} => ${producto.toLowerCase()}`);

//5. BigInt (Entero de Dimensiones Amplias) - Generalmente utilizado en sistemas matemáticos físicos o especiales donde se requiere de una excelente precición numerica
console.warn("---Tipo de Dato - BigInt (Número amplio)");
const numeroGrande = 1234567890
const numeroGrande2 = 12345678901234567890
let numeroGrande3 = 123456789012345678901234567890
let numeroGrande4 = 1234567890123456789012345678901234567890

console.log(`El primer experimento de un numero grande es ${numeroGrande}, que si es soportado por NUMBER, y su tipoo de dato es: ${typeof(numeroGrande)}`)
console.log(`El primer experimento de un numero grande es ${numeroGrande2}, que si es soportado por NUMBER, y su tipoo de dato es: ${typeof(numeroGrande2)}`)
console.log(`El primer experimento de un numero grande es ${numeroGrande3}, que si es soportado por NUMBER, y su tipoo de dato es: ${typeof(numeroGrande3)}`)
console.log(`El primer experimento de un numero grande es ${numeroGrande4}, que si es soportado por NUMBER, y su tipoo de dato es: ${typeof(numeroGrande4)}`)

//Para definif el tipo de dato BigInt debemos iniciar la función BigInt o usar una letra "n " al final del número en la asignación del valor.
console.log("Declaramos los valores númericos grand tamaño...")
numeroGrande3= BigInt(123456789012345678901234567890);
numeroGrande4 = BigInt(1234567890123456789012345678901234567890);

console.log(`El segundo experimento de un número grande es: ${numeroGrande3}, y us tipo de dato es: ${typeof(numeroGrande3)}`)
console.log(`El segundo experimento de un número grande es: ${numeroGrande4}, y us tipo de dato es: ${typeof(numeroGrande4)}`)

//hay que considerar que los tipos de datos declarados como BigInt no son operables con los de tipo number

let numero= 238;

//Si intentamos realizar una operación matematica entre datos estos dos tipos de datos, obtendremos un error critico de operaciones

console.log(`El resultado de la operación de: numeroGrande/numero es = a: ${numeroGrande4/BigInt(numero)}`);

//6. Symbol
console.warn("--- Tipo de dato - Symbol(Simbolo o forzar la Unidad)");
//Declaramos diferentes variables con valores similares 
const numero1 = 2
const numero2 = 2.0
const numero3 = "2"
const numero4 = "2.0"
const numero5 = Symbol(2)
const numero6 = Symbol(2.0)
const numero7 = Symbol("2")
const numero8 = Symbol("2.0")

//Prueba de comparación 1: ¿es 2 = 2.0?
console.log(`Prueba de comparación 1: `);
if (numero1 == numero2){
    console.log(`Se han comparado los valores de numero1 y numero2, confirmandoque tiene el mismo valor.`)
}
else{
    console.log(`Se han comparado los valores de numero1 y numero2, confirmando que NO tienen el mismo valor`)
}

//Prueba de comparación 2: ¿es 2 = 2.0?
console.log(`Prueba de comparación 2: `);
if (numero1 == numero3){
    console.log(`Se han comparado los valores de numero1 y numero3, confirmando que tiene el mismo valor.`)
}
else{
    console.log(`Se han comparado los valores de numero1 y numero3, confirmando que NO tienen el mismo valor`)
}

//Prueba de comparación 3: ¿Es 2 estrictamente = a "2"?
console.log(`Prueba de comparación 3: ¿Es 2 estrictamente = "2"`);
if (numero1 === numero3){
    console.log(`Se han comparado los valores de numero1 y numero3, confirmando que tiene el mismo valor.`)
}
else{
    console.log(`Se han comparado los valores de numero1 y numero3, confirmando que NO tienen el mismo valor`)
}

//Prueba de comparación 4: ¿Es 2 estrictamente = "2.0"?
console.log(`Prueba de comparación 4: ¿Es 2 estrictamente = "2.0"`);
if (numero1 === numero4){
    console.log(`Se han comparado los valores de numero1 y numero4, confirmando que tiene el mismo valor.`)
}
else{
    console.log(`Se han comparado los valores de numero1 y numero4, confirmando que NO tienen el mismo valor`)
}

//Prueba de comparación 5: ¿Es 2 estrictamente = = Symbol(2.0)?
console.log(`Prueba de comparación 5: ¿Es 2 estrictamente = "2.0"`);
if (numero1 === numero5){
    console.log(`Se han comparado los valores de numero1 y numero5, confirmando que tiene el mismo valor.`)
}
else{
    console.log(`Se han comparado los valores de numero1 y numero5, confirmando que NO tienen el mismo valor`)
}

//Prueba de comparación 6
console.log(`Prueba de comparación 6: `);
if (numero1 === numero4){
    console.log(`Se han comparado los valores de numero1 y numero4, confirmando que tiene el mismo valor.`)
}
else{
    console.log(`Se han comparado los valores de numero1 y numero4, confirmando que NO tienen el mismo valor`)
}

//Prueba de comparación 7: ¿Es Symbol(2) = Symbol (\"2\") ?
console.log(`Prueba de comparación 7:  ¿Es Symbol(2) = Symbol (\"2\") ? `);
if (numero5 === numero7){
    console.log(`Se han comparado los valores de numero1 y numero4, confirmando que tiene el mismo valor.`)
}
else{
    console.log(`Se han comparado los valores de numero1 y numero4, confirmando que NO tienen el mismo valor`)
}

//Prueba de comparación 8: 
console.log(`Prueba de comparación 8:  ¿Es Symbol(2) = Symbol (\"2\") ? `);
if (numero5 === numero8){
    console.log(`Se han comparado los valores de numero1 y numero4, confirmando que tiene el mismo valor.`)
}
else{
    console.log(`Se han comparado los valores de numero1 y numero4, confirmando que NO tienen el mismo valor`)
}

//7 . NULL
console.warn("---Tipo de Dato NULL (Nulo o vacío");
//El tipo de dato nulo se asgina cuando el sistema o el usuario saben de la variable pero prefieren dejarlo vacío, bajo su consentimiento, a diferencia del UNDEFINED que es un valor desconocido asignado por DEFAULT por JS

let nombreUsuario = null
let passUusuario = null
let generoUsuario = null
let estatusRelacionadosSentimental = null;
let fecha_ultimoPost;

//Supongamos que estamos programando una Red Social, tipo Facebook en la que parte de la información se publicará en el perfil del usuario


//Si el usuario no ha iniciado sesió 

//En la UH (Historia de Usuario) , que el usuario desea ingresar su numero telefonico o correo electronico y una contraseña que deberemos 

nombreUsuario = "teresa@gmail.com"
passUusuario = "tere123"


console.log(`El usuario : ${nombreUsuario} esta intentando logearse con una contraseña de: ${passUusuario}`);

//Lo que prosigue es que el sistema cotejara los datos ingesados con la base de datos y en caso de que los datos sean correctos comenzara la sesión u plataforma actualizando estos valores

//Dado que Teresa es del genero Femenino, y denota que su estatus de relación no ha sido capturado o lo mantiene privado esto genera la actualización de los valores de las variables
generoUsuario= "F"
estatusRelacionadosSentimental= null 

console.log(`El usuario: ${nombreUsuario}, se ha logeado exitosamente, al tener acceso a su información de perfil podemos deducir que es del género${generoUsuario} y su última publicación la realizó el: ${fecha_ultimoPost}`)


//Comparando NULL vs UNDEFINED 
//Si bien UNDEFINED y NULL tienen el mismo valor, no tiene el mismo tipo de dato

console.log("Comparación de la equidad entre UNDEFINED y NULL")
console.log(
(fecha_ultimoPost==estatusRelacionadosSentimental)?"Ambas variables tienen el mismo valor":"Las variables no tienen el mismo valor");

console.log("Comparación de la identidad entre UNDEFINED y NULL")
console.log(
(fecha_ultimoPost===estatusRelacionadosSentimental)?"Ambas variables tienen el mismo valor y el mismo tipo de dato" : "Las variables no tienen el mismo valor, pero no  el mismo tipo de dato");

//8. FUCTION (Funciones)
console.warn("---Tipo de Dato FUNCTION (Función")

//Declaramos una función que nos permita recibir un parametro en este caso el nombre de la persona al saludar, y le enviamos un saludo esta funación la asignamos una constante
const saludar = function(nombre) {return `Hola, ${nombre}!`}

//Invocamos a la funnción declarada
console.log(saludar(`Teresa`));

//Y que tipo de dato tiene esta constante
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`);