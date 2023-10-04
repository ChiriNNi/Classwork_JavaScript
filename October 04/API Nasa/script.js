var apikey = "5aDPRUaF4dEo5R3pNK1BRZuf7oMDpOcd11TwNe69"


const xhr = new XMLHttpRequest() 
var response
xhr.open("GET", `https://api.nasa.gov/planetary/apod?api_key=5aDPRUaF4dEo5R3pNK1BRZuf7oMDpOcd11TwNe69`)


xhr.onload = () => {
response = JSON.parse(xhr.response)
console.log(response)
document.getElementById('photo').innerHTML=`<img src="${response.hdurl}"></img>`;
document.getElementById('explanation').innerHTML="Описание: " + response.explanation;

}
xhr.send()




