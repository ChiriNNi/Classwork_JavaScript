function toggleForm() {
    var formTitle = document.getElementById("formTitle");
    var formDescription = document.getElementById("formDescription");
    var formSwitch = document.getElementById("formSwitch");
    var authForm = document.getElementById("authForm");

    if (formTitle.textContent === "Register") {
        formTitle.textContent = "Authorization";
        formDescription.textContent = "Please fill in this form to sign in an account.";
        formSwitch.innerHTML = 'Don\'t have an account? <a href="#" type="button" onclick="toggleForm()">Register</a>.';
    } else {
        formTitle.textContent = "Register";
        formDescription.textContent = "Please fill in this form to create an account.";
        formSwitch.innerHTML = 'Already have an account? <a href="#" type="button" onclick="toggleForm()">Sign in</a>.';
    }
}

function handleFormSubmit() {
    var formTitle = document.getElementById("formTitle");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (formTitle.textContent === "Register") {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    } else {
        var storedEmail = localStorage.getItem("email");
        var storedPassword = localStorage.getItem("password");

        if (email === storedEmail && password === storedPassword) {
            window.location.href = '../index.html';
        } else {
            alert("NOT OK");
        }
    }
}
