// var emptyList = []

// var list = [4, 8, 2, 6, 0, -8]
// console.log(list)

// list[2] = 55
// console.log(list)




// var list = [4, 8, 2, 6, 0, -8, 4, 10, 99, 12]

// for (var i in list) {
//     console.log(i)
// }

// for (var i of list) {
//     console.log(i)
// }

// var list = [4, 8, 2, 6, 0, -8, 4, 10, 99, 12]

// var max_element = list[0]
// var min_element = list[0]

// for (var el of list) {
//     if (el > max_element) {
//         max_element = el
//     } else {
//         min_element = el
//     }
// }

// console.log(`Минимальный элемент: ${min_element}, индекс: ${list.indexOf(min_element)}`)
// console.log(`Максимальный элемент: ${max_element}, индекс: ${list.indexOf(max_element)}`)


// var array = []
// var number 
// var sum_even_numbers = 0
// var sum_odd_numbers = 0 


// for (var i = 0; i < 10; i++) {
//     number = +prompt("Введите число: ")
//     array.push(number)

//     if (number % 2 == 0) {
//         sum_even_numbers += number
//     } else {
//         sum_odd_numbers += number
//     }
// }

// console.log("Список:", array)
// console.log("Сумма четных чисел:", sum_even_numbers)
// console.log("Сумма нечетных чисел:", sum_odd_numbers)


// var array = [] 
// var random_number
// var min_range = 1
// var max_range = 100

// for (var i = 0; i <= 10; i++) {
//     random_number = Math.trunc(Math.random() * (max_range - min_range)) + min_range
//     min_range = random_number
//     array.push(random_number)
// }

// console.log("Список:", array)

// ----------------------
// Практика

// var array = []
// var number 

// for (var i = 0; i < 10; i++) {
//     number = +prompt("Введите число: ")
//     array.push(number)
// }

// console.log("Список:", array)

// var max_element = array[0]
// var min_element = array[0]
// var max_index, min_index

// for (var i in array) {
//     if (array[i] > max_element) {
//         max_element = array[i]
//         max_index = i
//     } else {
//         min_element = array[i]
//         min_index = i
//     }
// }

// array[max_index] = min_element
// array[min_index] = max_element

// console.log("Измененный список:", array)

// ------------------------

// var array = []
// var number 
// var sum_even_numbers = 0
// var sum_odd_numbers = 0 


// for (var i = 0; i < 5; i++) {
//     number = +prompt("Введите число: ")
//     array.push(number)

//     if (number % 2 == 0) {
//         sum_even_numbers += number
//     } else {
//         sum_odd_numbers += number
//     }
// }

// var result = sum_even_numbers > sum_odd_numbers ? "Сумма четных элементов больше суммы нечетных элементов" : "Сумма нечетных элементов больше суммы четных элементов"

// console.log("Список:", array)
// console.log("Сумма четных чисел:", sum_even_numbers)
// console.log("Сумма нечетных чисел:", sum_odd_numbers)
// console.log(result)

// ------------------------

// var array = []
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// var string 
// var count_vowels = 0

// for (var i = 0; i < 3; i++) {
//     string = prompt("Введите строку: ")
//     array.push(string)
// }

// console.log("Список:", array)

// for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array[i].length; j++) { 
//         for (var symbol of vowels) {
//             if (array[i][j] == symbol) {
//                 count_vowels += 1
//             }
//         }
//     }
// }

// console.log("Количество гласных букв в списке:", count_vowels)

// ------------------------

// var array = []
// var number 

// for (var i = 0; i < 10; i++) {
//     number = +prompt("Введите число: ")
//     array.push(number)
// }

// console.log("Список:", array)

// var max_element = array[0]
// var min_element = array[0]

// for (var el of array) {
//     if (el > max_element) {
//         max_element = el
//     } else {
//         min_element = el
//     }
// }

// console.log(`Минимальный элемент: ${min_element}`)
// console.log(`Максимальный элемент: ${max_element}`)
// console.log(`Максимальный элемент больше минимального элемента в ${max_element / min_element} раз`)

// ------------------------

// var array = []

// for (var i = 0; i < 10; i++) {
//     number = i ** 2
//     array.push(number)
// }

// console.log("Список:", array)