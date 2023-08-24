// var array = [1, 2, 3, "Text", true]
// console.log(array) 

// for (var item of array) {
//     console.log("Элемент:", item)
// }

// for (var index in array) {
//     console.log("Индекс:", index)
// }

// for (var i = 0; i < array.length; i++) {
//     console.log(`Индекс ${i}: элемент "${array[i]}"`)
// }

// -----

// var array = [1, 2, 3, 4, 5]
// var second_array = [6, 7]
// var third_array = array.concat(second_array)

// array.forEach((element) => {
//     second_array.push(element)
// })

// array.push(6, 7, 8, 9, 10)
// array.pop()
// array.unshift(6)
// array.shift()

// console.log(array)
// console.log(second_array)
// console.log(third_array)

// -----

// var array = [1, "string", true, '$']

// array.forEach((element) => {
//     console.log(`Элемент ${element}: индекс ${array.indexOf(element)}`)
// })

// -----

// function Sum(a, b) {
//     var result = a + b
//     alert("Succes!")
//     alert(result)
// }

// -----

// function notRepeat(first_array, second_array) { 
//     var array = first_array.concat(second_array)
//     var resultArray = []

//     array.forEach((element) => {
//         if (!resultArray.includes(element)) { 
//             resultArray.push(element)
//         }
//     })

//     return resultArray
// }

// first_array = [1, 2, 3, 4, 5]
// second_array = [2, 4, 6, 7, 8]
// console.log(notRepeat(first_array, second_array))

// -----

// function notRepeatArray(first_array, second_array) { 
//     var resultArray = []

//     first_array.forEach((element) => {
//         if (!second_array.includes(element)) { 
//             resultArray.push(element)
//         }
//     })

//     return resultArray
// }

// first_array = [1, 2, 3, 4, 5]
// second_array = [2, 4, 6, 7, 8]
// console.log(notRepeatArray(first_array, second_array))

// -----

// function notRepeatArray(first_array, second_array) { 
//     var resultArray = []

//     first_array.forEach((element) => {
//         if (second_array.includes(element)) { 
//             resultArray.push(element)
//         }
//     })

//     return resultArray
// }

// first_array = [1, 2, 3, 4, 5]
// second_array = [2, 4, 6, 7, 8]
// console.log(notRepeatArray(first_array, second_array))

// -----

var fruits = ["Банан", "Апельсин", "Лимон", "Яблоко", "Манго"];
var lowerLetters = "а, б, в, г, д, е, ё, ж, з, и, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ъ, ы, ь, э, ю, я".split(",");

var swapped;
do {
    swapped = false;

    for (var i = 0; i < fruits.length - 1; i++) {
        currentElement = fruits[i];
        nextElement = fruits[i + 1];
        if (lowerLetters.indexOf(currentElement[0].toLowerCase()) + 1 < lowerLetters.indexOf(nextElement[0].toLowerCase()) + 1) {
            let temp = currentElement;
            fruits[i] = fruits[i + 1];
            fruits[i + 1] = temp;
            swapped = true;
        }
    }
} while (swapped);

console.log(fruits);


