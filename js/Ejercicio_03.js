//Objetos
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

console.warn("Practica 5 - Repaso de Objetos en Java Script")
console.log('%c1. Variables Independientes', style_console)

let Producto_Nombre = "Camioneta"
let Producto_Marca = "Ford"
let Producto_Modelo = "Lobo"
let Producto_Precio=  350000
let Producto_Disponible = true
let Producto_Sku = Symbol("RRF12")
let Producto_Stock = 20
let Producto_Imagen = null
let Producto_Barcode;
let Producto_Categorias = ["Camionetas", "Automotriz", "Mejores precios", "Nuevo Lanzamiento"]



//Accedemos a los valores de las caracteristicas del producto de manera independiente
console.log(`Los datos del PRODUCTO son: 
    Nombre: ${Producto_Nombre}, Tipo de Dato: ${typeof(Producto_Nombre)}
    Marca: ${Producto_Marca}, Tipo de Dato: ${typeof(Producto_Marca)}
    Modelo: ${Producto_Modelo}, Tipo de Dato: ${typeof(Producto_Modelo)}
    Precio: ${Producto_Precio}, Tipo de Dato: ${typeof(Producto_Precio)}
    Disponible: ${Producto_Disponible}, Tipo de Dato: ${typeof(Producto_Disponible)}
    Stock: ${Producto_Stock}, Tipo de Dato: ${typeof(Producto_Stock)}
    Imagen: ${Producto_Imagen}, Tipo de Dato: ${typeof(Producto_Imagen)}
    Categorias: ${Producto_Categorias}, Tipo de Dato: ${typeof(Producto_Categorias)}`);    

console.log("En el caso del SKU anterior, no se puede concatenar a la cadena de la impresion anterior")
console.log(Producto_Sku)
console.log(typeof(Producto_Sku))

console.log('%c2. Objeto', style_console)
//Ahora se declara como un OBJETO
const producto = {
    ID: 180823,
    Producto_Nombre: " Televisión",
    Producto_Marca: "Samsung",
    Producto_Modelo: "Smart TV",
    Producto_Precio: 12000,
    Producto_Disponible: true,
    Producto_Sku: Symbol("TVRR125"),
    Producto_Stock: 23,
    Producto_Imagen: null,
    Producto_Barcode: null,
    Producto_Categorias:["Electronicos", " Mejores precios", " Electronicos", " Nuevo Lanzamiento"]
}

console.warn("--- Ahora el mismo producto como un OBJETO ---")
//Imprimir el objeto
console.log(producto)
console.table(producto)

//Acceder a las propiedades de un objeto
console.warn("Leyendo las propiedades especificas del objeto.")  
console.log(`Nombre del producto: ${producto.Producto_Nombre}`)
console.log(`Nombre de la marca: ${producto.Producto_Marca}`)
console.log(`Nombre del modelo: ${producto.Producto_Modelo}`)
console.log(`Precio del producto: ${producto.Promducto_Precio}`)
if(producto.Producto_Disponible == 0){
    console.log(`Estatus: Agotado`)
}else{
    console.log(`Estatus: ${Producto_Stock} unidades disponibles.`)
}


//Destructuracion
console.log('%c3. Destructuracion', style_console)

let Producto2 = {
    Clave: 285,
    Nombre: "iPhone 14",
    Marca: "Apple",
    Modelo: 14,
    Precio: 10500,
    Disponibilidad: true,
    Stock: 200,
    SKU: "AP-IPHONE-14",
    Imagen: "../Assets/iphonee14.jpg",
    Barcode: "194253244962",
    Categorias: ["Electrónica", "Teléfonia", "Fotografia", "iPhone", "Rendimiento"]
}

let Comprador = {
    ID : 112,
    Clave: 1808,
    Nombres: "Teresa ",
    Apellidos: "Vargas Fernández",
    Tipo: "Nuevo",
    Correo: "terevf@gmail.com",
    PaisOrigen: "Mexico",
    SaldoActual: 35000.00
}

let Pedido = {
    ID: 120203,
    Producto_ID: 285,
    Comprador_ID: 1808,
    Cantidad: 3,
    Estatus: "Carrito de Compra",
    TipoPago: "Tarjeta de Crédito"
}

//En base a los 3 objetos necesitamos calcular el casto de compra y si le alcanza con sus saldo a favor

let {Precio: Producto_Precio2} = Producto2
let {Cantidad: Pedido_Cantidad} = Pedido
let {SaldoActual: Cliente_SaldoActual} = Comprador
let Costo_Compra = Producto_Precio2 * Pedido_Cantidad

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: ${Costo_Compra}`)
if(Costo_Compra < Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente")

console.log('%c4. Actualizacion de los valores de las propiedades de un Objeto', style_console)

console.log(`El objeto actualmente tiene los siguientes valores`)
console.log(JSON.stringify(Producto2, null, 2)) //stringify encadena lo que se imprime

//Convierte el objeto a una cadena para evitar problemas con la referencia
console.log(`Por cuestiones de inflacion el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a $6,915.50`)

//Para podificar el valor de un objeto basta con igualar el nuevo valor de la propiedad deseada
Producto2.Precio = 15000
console.log("Los nuevos valores del producto son: ")
console.log(Producto2);

//¿Puedo cambiar no solo el valor, sino el tipo de dato ded un objeto en Js?
console.log(`-----------------------------------------`)
console.log(`El objeto actual tiene los siguientes valores`)
let tipoDisponibilidad = typeof(Producto2.Disponibilidad)
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
console.log(JSON.stringify(Producto2, null, 2));
Producto2.Disponibilidad="Si";
let nuevoTipoDisponibilidad= typeof(Producto2.Disponibilidad)
console.log(Producto2)
console.log(Producto2)
console.log(`El nuevo tipo de dato de la disponibilidad es:${nuevoTipoDisponibilidad}`)
//Si


//Agregar nuevas propiedades a un objetos existente
console.log('%c5. Agregación de las Propiedades de un Objeto', style_console)
console.log("Objetos antes de ser Modificados")
console.table(Comprador)

//Agregabdo propiedades
Comprador[`Dirección `]= "Av. 17 Junio, Privada de Aldama, Xicotepec de Juárez"
Comprador[`Tipo `]= "Premium"
Comprador[`Estatus `]= "Inactivo"
Comprador[`Saldo `]= 35000.00
console.log("Objeto despuués de ser modificado:")
console.table(Comprador)


//Eliminar las propiedades de un objeto existente.
console.log('%c6. Eliminación de las Propiedades de un Objeto', style_console)
console.log("Objetos antes de ser Modificados")
console.table(Pedido)
//Eliminamos las propiedades de tipoPago de Pedido
delete Pedido.TipoPago

console.log("Objeto Modificado: ")
console.table(Pedido)


console.log('%c7. Métodos para controlar la mutabilidad de los Objetos, Congelación (FREEZE) ', style_console)
//Si deseamos no permitir que los Objetos sean modificados ni en estructura, ni en valor utilizaremos el método FREEZE(Congelar)
console.log(`La estructura actual del objeto COMPRADOR es: `)
console.table(Comprador)
Object.freeze(Comprador)
//Intentamos agregar, eliminar o modificar los valores de sus propiedades
Comprador.FechaUltimaCompra = "01/052024 19:10:15"
delete Comprador.Tipo
Comprador.Direccion="Calle 16 de Septiembre #102, Col Manantiales, Huauchinango Puebla, México"
console.log(`Verificamos si se realiaron los cambios en el Objeto Comprador: `)
console.table(Comprador)


console.log('%c8. Métodos para controlar la mutabilidad de los Objetos, Sellado (SEAL) ', style_console);
//Sin embargo, en el caso que deseamos poder modificar los valores de lads propiedades del Objeto, pero no su eswtructura, usaremos SEAL
console.log(`Objeto antes de ser Modificado`)
console.table(Pedido)
//Sellamos el Objeto
Object.seal(Pedido)
//Intentamos modificar su estructura
Pedido[`FechaPedido`]= "25/05/2024 11:12:20"
delete Pedido[`Cantidad`]
console.log(`Verificamos si se realizaron los cambios en el Objeto PEDIDO:`)
console.table(Pedido)
//Ahora intentamos modificar el valor de las propiedades
console.Cantidad=5
console.log(`Verificamos si se realizaron cambios en el Objeto PEDIDO:`)
console.table(Pedido)


//Desestruración de 2 o más objetos
console.log('%c9. Desestruración de 2 o más objetos ', style_console);

let{} = {Precio: productoPrecio,  Marca: productoMarca} = producto
let{} = {Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo:clienteTipo} = Comprador

//Tranformar valores cuantitativos en cualitativos
if(productoPrecio  > 2000){
    productoPrecio= "Caro"
}else{
    productoPrecio= "Barato"
}
if(clienteSaldo > 0){
    clienteSaldo= "A favor"
}else if (clienteSaldo < 0){
    clienteSaldo= "En contra"
}else{
    clienteSaldo="Sin deuda"
}

//Transformar valores cualitativos en cuantitativos
let clienteNivel;
if(clienteTipo=="Premium")
    clienteNivel=1
if(clienteTipo=="Freemium")
    clienteNivel=2
if(clienteTipo=="No identificado")
    clienteNivel=3


// Clasificar al cliente por su país de Origen
if(clientePais== "México")
    clientePais="Nacional"
else
    clientePais= "Extrangero"




//OLE - Object Literal Enhacement
let datosClientePromociones={clienteCorreo, clientePais, clienteNivel, clienteSaldo, productoMarca, productoPrecio}

//El nuevo objeto que creamos sería un ejemplo de la información  que enviaremos al area de marketing para la disfuión de promociones
console.log(`Los datos del cliente y sus habitos de compras son:`)
console.table(datosClientePromociones)





//Operaciones sobre objetos
//Unión de Objetos
console.log('%c10. Métodos para controlar la mutabilidad de los Objetos, Sellado (SEAL) ', style_console);

console.log("Imprimimos la estructura y valores del Objeto PRODUCTO")
console.table(producto)

console.log("Imprimimos la estructura y valores del Objeto PEDIDO")
console.table(Pedido)
//Suponiendo que el usuario ya realizó el pago el pedido se convierta en una VENTA que requiere información de ambos objetos
//IMPORTANTE: ASSIGN, no solo permite la fusión de 2 o más objetos, también muta los objetos originales, perdiendo el valor original del ID en este caso
let Producto3 = {...producto}
const Venta = Object.assign(Producto3, Pedido);
console.log("Consultamos este nuevo objeto VENTA")
console.table(Venta)





//Union de Objetos usando SPRED OPERATOR para evitar la perdida de informacion con objetoos que comparten el mismo nombre de sus propiedades
console.log('%c11. Unión de Objetos usando el SPREAD OPERATOR) ', style_console);

console.table(producto)
console.table(Comprador)
console.table(Pedido)

let Venta2 ={
    producto:{...producto},
    comprador: {...Comprador},
    pedido: {...Pedido}
}
console.log("Fusionamos los 3 objetos en uno nuevo, sin perdida de Información")
console.table(Venta2)

console.log('%c12. Unión de Objetos de POST UNION ', style_console);
//Vamos a verificar el estatus de mutabilidad de los objetos
console.log("Vamos a modificar el estatus de Mutabilidad del Objeto PEDIDIO")
console.log(`¿Esta el objeto de Pedido Congelado? : ${Object.isFrozen(Pedido)}`);
console.log(`¿Esta el Objeto de Pedido Sellado? ${Object.isSealed(Pedido)}`);

console.log("Vamos a modificar el estatus de Mutabilidad del Objeto COMPRADOR")
console.log(`¿Esta el objeto de Pedido Congelado? : ${Object.isFrozen(Comprador)}`)
console.log(`¿Esta el Objeto de Pedido Sellado? ${Object.isSealed(Comprador)}`)

console.log("Vamos a modificar el estatus de Mutabilidad del Objeto PRODUCTO")
console.log(`¿Esta el objeto de Pedido Congelado? : ${Object.isFrozen(producto)}`)
console.log(`¿Esta el Objeto de Pedido Sellado? ${Object.isSealed(producto)}`)

//Modificamos la estructura de producto, agregando una nueva propiedad
producto[`isLegacy`] = false
console.table(producto)
console.table(Venta2)