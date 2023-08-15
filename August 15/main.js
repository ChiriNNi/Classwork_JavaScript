// var a = 456; 
// let b = 456; 

// console.log("Hello World!") 

// var n = prompt("Enter number: ")
// console.log(n)
// alert(n)

// var fisrt = +prompt("Введите первую переменную: ")
// var second = +prompt("Введите вторую переменную: ")
// console.log(fisrt + second)

// var isAdult = confirm("Under 18?")
// console.log(isAdult)

// const username = "Dauren"

// var a
// console.log(a)
// console.log(b)

// var x = 45 
// var y = "45"
// console.log(x == y)
// console.log(x === y)
// console.log(x != y)
// console.log(x !== y)

// var n = 45
// n = n + 5
// n += 5
// n -= 5
// n *= 5
// n /= 5
// console.log(n)
// console.log(n**2)

// const income = 50
// if (income > 50) {
//     console.log("Доход больше 50")
// }
// else if (income === 50) {
//     console.log("Доход равен 50")
// }
// else {
//     console.log("Доход меньше 50")
// }


// Практика
// Задание №1
// var number = +prompt("Введите значение: ")
// console.log(number**2)

// // Задание №2
// var km = +prompt("Введите количество километров: ")
// const mile = 0.621371
// console.log("Количество миль: ", km * mile)

// Задание №3
// var first_number = +prompt("Введите первое значение: ")
// var second_number = +prompt("Введите второе значение: ")
// console.log("Сумма: ", first_number + second_number)
// console.log("Разность: ", first_number - second_number)
// console.log("Произведение: ", first_number * second_number)
// console.log("Частное: ", first_number / second_number)

// Задание №4
// var hours = +prompt("Введите нынешний час: ")
// var minutes = +prompt("Введите нынешние минуты: ")
// console.log("До следующего дня осталось: ", 23-hours, " часов", 60-minutes, " минут.")

// Задание №5
// var salary = +prompt("Введите сумму продаж: ")
// console.log("Зарплата: ", 250 + (salary * 0.1), "$")


// Задание №1
// var number = +prompt("Введите значение: ")
// if (number > 0) {
//     console.log("Число положительное!")
// }
// else {
//     console.log("Число отрицательное!")
// }

// Задание №2
// var age = +prompt("Введите возраст: ")
// if (0 <= age && age <= 120) {
//     console.log("Данные введены корректно!")
// }
// else {
//     console.log("Данные введены некорректно!")
// }

// Задание №3
// var number = +prompt("Введите значение: ")
// if (number > 0) {
//     console.log(number)
// }
// else {
//     console.log(-number)
// }

// Задание №4
// var hours = +prompt("Введите часы: ")
// var minutes = +prompt("Введите минуты: ")
// var seconds = +prompt("Введите секунды: ")
// if (hours < 24 && minutes < 60 && seconds < 60 && hours > 0 && minutes > 0 && seconds > 0) {
//     console.log("Данные введены корректно!")
// }
// else {
//     console.log("Данные введены некорректно!")
// }

// Задание №5
// var x = prompt("Введите координату x: ")
// var y = prompt("Введите координату y: ")
// console.log(x, y)
// if (x > 0 && y > 0) {
//     console.log("Первая четверть")
// }
// else if (x < 0 && y > 0) {
//     console.log("Вторая четверть")
// }
// else if (x < 0 && y < 0) {
//     console.log("Третья четверть")
// }
// else if (x > 0 && y < 0) {
//     console.log("Четвертая четверть")
// }
// else if (x === 0){
//     console.log("Точка принадлежит оси Ox")
// }
// else if (y === 0){
//     console.log("Точка принадлежит оси Oy")
// }


// Задание №1
// var a = +prompt("Введите значение: ")
// var b = +prompt("Введите значение: ")
// var result = (a > b) ? a : b
// console.log(result)

// Задание №2
// var n = +prompt("Введите значение: ")
// var result = (n % 5 == 0) ? "Число кратно 5" : "Число НЕкратно 5"
// console.log(result)

// Задание №3
// var planet = prompt("Введите название планеты: ")
// var result = (planet == "Земля" || planet == "земля") ? "Привет, землянин!" : "Привет, инопланетянин!"
// console.log(result)


// Задание №1
// var first_number = +prompt("Введите первое значение: ")
// var second_number = +prompt("Введите второе значение: ")
// var symbol = prompt("Введите операцию над числами: ")
// switch (symbol) {
//     case "+":
//         console.log("Результат: ", first_number + second_number)
//         break
//     case "-":
//         console.log("Результат: ", first_number - second_number)
//         break
//     case "*":
//         console.log("Результат: ", first_number * second_number)
//         break
//     case "/":
//         console.log("Результат: ", first_number / second_number)
//         break
//     default:
//         console.log("Данные введены некорректно!")
// }
