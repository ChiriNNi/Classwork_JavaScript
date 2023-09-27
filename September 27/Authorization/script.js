// function save() {
//     localStorage.setItem("data", txtIn.value)
//     alert("Done")
// }

// function get() {
//     txtOut.innerText = localStorage.getItem("data")
// }


function save() {
    localStorage.setItem("email", email.value)
    localStorage.setItem("password", password.value)
    
}

function show() {
    regist.style.visibility = "hidden"
    auth.style.visibility = "visible"
}

function check() {
    var email = emailAuthorization.value
    var password = passwordAuthorization.value 

    if ((localStorage.email == email) && (localStorage.password == password)) {
        alert("OK")
    } else {
        alert("NOT OK")
    }
}

console.log(localStorage)