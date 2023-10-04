// function HelloWorld() {
//     alert("Hello World!")
// }

// setTimeout(HelloWorld, 1000)

// function Sum(a, b) {
//     alert(a + b)
// }

// setTimeout(Sum, 1000, 1, 2)

// setTimeout(function() {
//     alert("Hi!")
// }, 1000)

// setTimeout(function(a, b) {
//     alert(a * b)
// }, 1000, 3, 7)


const xhr = new XMLHttpRequest() 
var response
xhr.open("GET", `https://api.quotable.io/random`)

count=0
function writeText(text) {
    if (text.length == count) {
        clearInterval(id)
        return
    }
    document.write(text[count])
    count++
}

xhr.onload = () => {
    response = JSON.parse(xhr.response)
    console.log(response)
    setInterval(writeText, 200, response.content)

}
xhr.send()


