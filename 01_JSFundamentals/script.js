//console.log('Hello World!')

// +================+
// | TIPOS DE DATOS |
// +================+

// PRIMITIVOS (los que no son objetos)
// ===================================

// 1. Number --> Números, tanto decimales como enteros

let age = 23;

console.log(age, typeof age);

// 2. String --> Secuencia de caracteres. Usado para texto

let firstName = 'Jonas';

console.log(firstName, typeof firstName);

// 3. Boolean --> Tipo lógico (true o false). Usado para la toma de decisiones

let fullAge = true;

console.log(fullAge, typeof fullAge);
console.log(typeof 45 > 30);


// 4. Undefined --> Valor tomado por una variable declarada pero que no ha recibido un valor.

let children;

console.log(children, typeof children);

// 5. Null --> Variable que ha sido declarada y a la que se asigna el valor null a propósito.
// El operador typeof devuelve como tipo de dato Object (es un fallo)

let actualJob = null;

console.log(actualJob, typeof actualJob);

// 6. Symbol (ES2015 or ES6) --> Valor que es único y no puede ser cambiado

// 7. BigInt (ES2020) --> Números grandes que no pueden ser tratados como number


//==================================================================================================
// JavaScript es un lenguaje de tipo dinámico. El tipo de dato de una variable viene determinado
// por el tipo de dato que esta contiene. Son los datos los que tienen tipo, no las variables.
// No se asigna un tipo de dato estático al declarar la variable, como en JAVA, por ejemplo. 
// De hecho, el tipo de dato que una variable contiene puede cambiar durante la ejecución del código.
//===================================================================================================

// +===========================================+
// | DECLARACIÓN DE VARIABLES: LET, CONST, VAR |
// +===========================================+

// let
// ===

// Se usa let para declarar una variable cuyo valor puede cambiar.

let myAge = 30; // Declara la variable myAge y le asigna el valor de 30
myAge = 31; // Reasigna el valor 31 a la variable myAge

console.log(myAge);

// También se usa let para declarar variables a las que no se les asigna valor inicialmente.

let address;

console.log(address);

// const
// =====

// Se usa const para declarar variables cuyo valor no puede cambiar. Tampoco se puede declarar una variable
// y no asignarle valor con const.

const dni = "35123456Z"  // el valor del dni no puede cambiar.

// var
// ===

// Es la forma antigua de declarar variables (anterior a ES2015 o ES6) y funciona prácticamente igual que let.
// La diferencia es que let es block-scope y var es function-scope (se explicará más adelante).

// Es recomendable utilizar siempre let y const, en función de si el valor de la variable debe o no cambiar.


// +====================+
// | OPERADORES BÁSICOS |
// +====================+

// Los operadores permiten modificar valores o combinar varios valores en un único valor.

// Operadores aritméticos
// ======================

// Los principales son + - * / % (modulo) ** (potencia)...
// El operador + puede usarse con strings para unir valores de tipo string

const myFirstName = 'Alberto';
const myLastName = 'Sanchez';

const fullName = myFirstName + ' ' + myLastName;

console.log(fullName);

// Operadores de asignación
// ========================

// = --> Asigna el valor de la parte derecha de la expresión

let x = 15;

// +=  *= -= etc --> Asigna a la variable el valor de la operación y el valor asignada por el operador

x += 10; // Suma 10 al valor anterior de x (25)
x *= 4; // Multiplica por 4 el valor de x (100)

x++ // x = x + 1
x-- // x = x - 1

console.log(x);

// Operadores de comparación --> Devuelven valores boolean (< > >= <=)
// ===================================================================

console.log(145 > 45); // true

// Para comparar igualdad se usa el operador de comparación ==
// Un signo de igual es operador de asignación. Dos signos es operador de comparación
// Tres signos igual compara valores y tipo

let y = 45;
let z = '45';

console.log(y == z); // true
console.log(y === z); // false


// Otros operadores
// ================

// typeof

