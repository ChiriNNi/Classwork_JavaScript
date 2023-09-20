// function sayHello() {
//     console.log("Hello")
// }

// sayHello() 


// function sayHello(name) {
//     console.log("Hello", name)
// }

// sayHello("Anelya") 

// function returnHello(name) { 
//     return "Hello " + name
// }

// console.log(returnHello("Anelya"))

// function func(...params) {
//     for (let i in params) {
//         console.log(i)
//     }

//     for (let i of params) {
//         console.log(i)
//     }
// }

// func(10, 11, 12, 13, 14, 15)

// function minNumber(first_number, second_number) {
//     return first_number > second_number ? second_number : first_number
// }

// console.log(minNumber(2, 5)) 

// function isSimpleNumber(number) {
//     count = 0 
//     for (let i = 1; i <= number; i++) {
//         if (number % i == 0) {
//             count += 1 
//         } 
//     }

//     return count == 2 ? "Данное число простое!" : "Данное число НЕ простое!"
// }

// console.log(isSimpleNumber(5))


// var human = {
//     age : 32, 
//     name : "Victoria",

//     dog : {
//         nick : "Sam", 
//         gender : false
//     }, 

//     not_needed_info : "Anelya"
// }

// human["gender"] = "women"
// human.race = "asian"
// console.log(human)

// delete human.not_needed_info
// console.log(human)

// if ("Age" in human) { 
//     console.log("Exists")
// } else {
//     console.log("Not exists")
// }

// for (let i in human) {
//     // console.log(`${i} : ${human[i]}`)
//     console.log(human[i])
// }

// class Rectangle { 
//     constructor(height, width) {
//         this.height = height
//         this.width = width
//     }

//     getArea() {
//         console.log(this.height * this.width)
//     }
// }

// let first_rectangle = new Rectangle(34, 54)
// let second_rectangle = new Rectangle(2, 23)
// let third_rectangle = new Rectangle(41, 33)

// first_rectangle.getArea() 
// second_rectangle.getArea()
// third_rectangle.getArea()

// class Person {
//     constructor(name, surname) {
//         this.name = name
//         this.surname = surname
//         this.qualification = Math.trunc(Math.random() * 10) + 1
//     }

//     getInfo() {
//         console.log(`Имя: ${this.name}\nФамилия: ${this.surname}\nКвалификация: ${this.qualification}`)
//     }
// }

// first_person = new Person("Анель", "Рустамова")
// second_person = new Person("Виталий", "Немыкин")
// third_person = new Person("Ильяс", "Жунусов")
// persons = [first_person, second_person, third_person]
// min_qualitification_person = first_person


// for (let person of persons) {
//     if (person.qualification < min_qualitification_person.qualification) {
//         min_qualitification_person = person
//     }
// }

// min_qualitification_person.getInfo()


// function isDivider(first_number, second_number) { 
//     return first_number % second_number == 0
// }

// console.log(isDivider(4, 2))

// function SimpleNumbersCount(array) {
//     simple_element_count = 0 
//     for (let element of array) {
//         count = 0 
//         for (let j = 1; j <= element; j++) {
//             if (element % j == 0) {
//                 count += 1 
//             } 
//         }

//         if (count == 2) {
//             simple_element_count += 1
//         }
//     }

//     return simple_element_count
// }

// console.log(SimpleNumbersCount([5, 2, 4, 7, 8, 2, 3]))

// class Bank {
//     constructor(amountOfMoney, maximumStock, loanPercentage, depositPercentage) {
//         this.amountOfMoney = amountOfMoney
//         this.maximumStock = maximumStock
//         this.loanPercentage = loanPercentage
//         this.depositPercentage = depositPercentage
//     }

//     getCredit(creditTime, creditOfMoney) {
//         var monthlyAmountMoney = (creditOfMoney + (creditOfMoney * (this.loanPercentage / 100))) / creditTime
//         return `${creditOfMoney}$ на ${creditTime} месяцев => месячная выплата составляет ${monthlyAmountMoney}$`
//     }
// }

// bank = new Bank(100000, 1000000, 15, 1.5)
// console.log(bank.getCredit(12, 100000))

// class Auto {
//     constructor(initialMoney, repairState) {
//       this.money = initialMoney
//       this.repairState = repairState
//     }
  
//     calculateRepairsCount(costPerRepair) {
//       if (costPerRepair <= 0) {
//         return 0
//       }
  
//       var repairsCount = Math.floor(this.money / costPerRepair)
//       return repairsCount
//     }
//   }
  
// var myCar = new Auto(5000, 'годен к использованию')
// var costOfRepair = 1000
// var repairsCount = myCar.calculateRepairsCount(costOfRepair)

// console.log(`У вас достаточно денег для ${repairsCount} ремонтов.`)
  

// class Building {
//     constructor(height, width, length, countOfFloor, undergroundFloor) {
//         this.height = height
//         this.width = width
//         this.length = length
//         this.countOfFloor = countOfFloor
//         this.undergroundFloor = undergroundFloor
//     }

//     getArea() {
//         return (this.height * this.width * this.length) * this.countOfFloor
//     }

//     addFloor() {
//         this.countOfFloor += 1
//         return this.countOfFloor
//     }

//     removeFloor() {
//         this.countOfFloor -= 1
//         return this.countOfFloor
//     }
// }

// building = new Building(100, 100, 100, 10, false)
// console.log("Площадь внутри здания (учитывая этажи):", building.getArea(), "м2")
// console.log("Добавлен новый этаж! Количество этажей:", building.addFloor())
// console.log("Удален этаж! Количество этажей:", building.removeFloor())

// function generatePassword(length, useSpecialChars, useNumbers) {
//     var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?"
//     var numbers = "0123456789"

//     var allowedChars = charset
  
//     if (useSpecialChars) {
//       allowedChars += specialChars
//     }
  
//     if (useNumbers) {
//       allowedChars += numbers
//     }
  
//     var password = ""
  
//     for (let i = 0; i < length; i++) {
//         var randomIndex = Math.floor(Math.random() * allowedChars.length)
//         password += allowedChars[randomIndex]
//     }
  
//     return password
//   }
  

//   const newPassword = generatePassword(10, true, true)
//   console.log("Пароль:", newPassword)
  
