// Задание №1
// var number = +prompt("Введите число: ")
// var i = 1
// while(i <= number) {
//     console.log("#")
//     i++
// }

// Задание №2
// var number = +prompt("Введите число: ")
// while (number >= 0) {
//     console.log(number)
//     number--
// }

// Задание №3
// var number = +prompt("Введите число: ")
// var degree = +prompt("Введите степень: ")
// var i = 1

// while (i < degree){
//     number *= number   
//     i++
// }
// console.log("Результат:", number)

// Задание №4
// var first_number = +prompt("Введите первое число: ")
// var second_number = +prompt("Введите второе число: ")
// var min_number = first_number < second_number ? first_number: second_number
// var i = 1

// while (i <= min_number) {
//     if (first_number % i == 0 && second_number % i == 0) {
//         console.log("Общий делитель:", i)
//     }
//     i++
// }

// Задание №5
// var number = +prompt("Введите число: ")
// var i = 1
// var result = 1

// while (i <= number) {
//     result *= i
//     i++
// }
// console.log("Результат:", result)

// var i = 1
// do {
//     console.log(i)
//     i++
// } while (i <= 5)

// var txt 
// do {
//     txt = prompt("Confirm: yes or no")
// } while(txt != "yes" && txt != "no")

// Задание №1
// var answer = 2 + 2 * 2

// do {
//     var user_answer = +prompt("Решите пример: 2+2*2")
// } while (user_answer != answer)

// Задание №2
// var number = 1000
// var count = 0
// do {
//     number /= 2
//     count++
// } while (number > 50)

// console.log("Количество делений:", count)
// console.log("Число:", number)

// for (var i = 0; i < 10; i++){
//     console.log(i)
// }

// Задание №1
// var number = +prompt("Введите число: ")
// for (var i = 1; i < 100; i++) {
//     if (i % number == 0) {
//         console.log(i)
//     }
// }

// Задание №2
// var minRange = +prompt("Введите минимальное значение диапазона: ")
// var maxRange = +prompt("Введите максимальное значение диапазона: ")
// for (var i = minRange; i < maxRange; i+=4){
//     console.log(i)
// }

// for (var i = 0; i < 10; i++){
//     var result = Math.random() * 10
//     console.log(Math.trunc(result))
// }

// var randomNumber = Math.trunc(Math.random() * 10)
// var count = 0

// do {
//     var userNumber = +prompt("Введите число от 1 до 10: ")
//     count += 1

//     if (userNumber < randomNumber) {
//         alert("Введите число побольше!")
//     }
//     else if (userNumber > randomNumber) {
//         alert("Введите число поменьше!")
//     }
//     else {
//         alert(`Вы выиграли! \nКоличество попыток: ${count} \nРезультат: ${randomNumber}`)
//     }
// } while (randomNumber != userNumber) 

var i1 = prompt("r - p - s -")
var i2 = prompt("r - p - s -")
var c1 = 0
var c2 = 0

for (var i = 0; i < 5; i++){
    if (i1 == i2) {
        console.log("draw")
    }
    else if ((i1 == "p" && i2 == "r") || (i1 == "r" && i2 == "s") || (i1 == "s" && i2 == "p")) {
        c1++
    }
    else if ((i1 == "r" && i2 == "p") || (i1 == "s" && i2 == "r") || (i1 == "p" && i2 == "s")) {
        c2++
    }
    else {
        console.log("error")
    }
}
console.log(c1, c2)