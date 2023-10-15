//               forEach

// Iterar y mostrar cada elemento de un arreglo

const frutas = ['Manzana', 'Pera', 'Banana']
// forEach, iteraciones sencillas de preferencia que no modifiquen los elementos
// se trabaja sobre el arreglo original
//  puede ser funcion de flecha ó anónima
frutas.forEach(function(fruta) {
    console.log(fruta)
});


const numbers = [1,2,3,4,5]
// la función puede recibir 3 parámetros;  elemento, indice, arregloCompleto
numbers.forEach((number, index, allArray) => {
    // console.log(`${index} ${element} ${allArray}`)
    allArray[index] = number * 2;
});

console.log(numbers)

const values = [10, 20, 30, 40, 50]
let sum = 0

values.forEach(value => {
    sum += value
})
console.log(sum)

// los arreglos y objetos son una referencia 
// valores primitivos como boolean, number, string



//------------------------------------------------
//                 MAP
// se utiliza para crea un nuevo arreglo a partir de otro
// genera transformaciones sobre un arreglo dado

// recibe un arreglo
// crea una copia de sus valores
// y duplicarlo

// debe retornar algo

const numbers2 = [1,2,3,4,5]

const number2Duplicate = numbers2.map(number => {
    return number * 2
})
console.log(numbers2)
console.log(number2Duplicate)

const names = ['Juan', 'Paco', 'Pedro']

const greetings =names.map(name => {
    return `¡Hola, ${name}!`
})

console.log('Array of names', names)
console.log('Array of greetings', greetings)

//Ejercicio

const words = ['Apple', 'Rare', 'Beauty', 'Pikmin'];
const lengths = words.map(word => {
    return word.length
})

console.log('this is the array of words: ', words)
console.log('this is the length of each word: ', lengths)



//        OPERADOR TERNARIO
// asignar un valor en función de una condicion

const edad = 18

const mensaje = edad >= 18 ? 'Ya eres mayor de edad :P' : 'Noup, hasta los 18'

console.log(mensaje)

const isItLabourable = true

const activities = isItLabourable ? 'You need to work, sorry' : 'Go to sleep, today no work'

console.log(activities)

// Find even numbers

function isEven(number) {
    return number%2 === 0 ? true : false
}

console.log(isEven(7))

// operador de propagaciones

const numeritos = [1,2,3]
// no estamos guardando un valor, estamos asignando una referencia (pasa con arreglos y objetos)
const copiaDeNumeritos = numeritos

// esta modificación también se aplicó a numeritos (el arreglo original)
copiaDeNumeritos[1] = 9

// para copiar un arreglo sin modificar el original (clonar) con spread operator
const cloneArray = [...numeritos]
cloneArray[1] = 10

console.log('original array', numeritos)
console.log('copia', copiaDeNumeritos)
console.log('clon', cloneArray)