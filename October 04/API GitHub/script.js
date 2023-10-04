var prompt_login = document.getElementById("prompt_login")

function showInfo(){
    console.log(prompt_login.value)
    const xhr = new XMLHttpRequest() 
    var response
    xhr.open("GET", `https://api.github.com/users/${prompt_login.value}`)
    

    xhr.onload = () => {
        response = JSON.parse(xhr.response)
        console.log(response)
        document.getElementById('photo').innerHTML="Фото: " + `<img src="${response.avatar_url}" width=125.5px height=125.5px></img>`;
        document.getElementById('name').innerHTML="Имя: " + response.name;
        document.getElementById('login').innerHTML="Логин: " + response.login;
        document.getElementById('city').innerHTML="Город: " + response.location;
        document.getElementById('mail').innerHTML="Почта: " + response.email;
    }
    xhr.send()
}



