var longitude = document.getElementById("longitude")
var latitude = document.getElementById("latitude")
var apikey = "3cffd53dfe4cf45dbecf5f556f6af630"

function showInfo(){
    const xhr = new XMLHttpRequest() 
    var response
    xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.value}&lon=${longitude.value}&appid=${apikey}`)
    

    xhr.onload = () => {
        response = JSON.parse(xhr.response)
        console.log(response)
        document.getElementById('city').innerHTML="Город: " + response.name;
        document.getElementById('date').innerHTML="Дата: " + Date();
        document.getElementById('description').innerHTML="Описание погоды: " + response.weather[0].description;
        document.getElementById('icon').innerHTML="Иконка: " + `<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png"></img>`;
        document.getElementById('current_temperature').innerHTML="Текущая температура: " + response.main.temp;
        document.getElementById('min_temperature').innerHTML="Минимальная температура: " + response.main.temp_min;
        document.getElementById('max_temperature').innerHTML="Максимальная температура: " + response.main.temp_max;
        document.getElementById('wind_speed').innerHTML="Скорость ветра: " + response.wind.speed;
    }
    xhr.send()
}



