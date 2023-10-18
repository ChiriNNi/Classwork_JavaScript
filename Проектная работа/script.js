const apiKey = "68aaf7ab-50f7-4ff2-a18f-44511ece9a28";
const movieContainer = document.getElementById("movieContainer");
let currentFunction; 
let currentArgument;

function createFilmContainer(movies) {
  movies.forEach((movie) => {
    // Главный контейнер
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("grid-item");

    // Контейнер для изображения
    const movieImageDiv = document.createElement("div")
    
    // Контейнер для информации о фильме
    const movieInfoDiv = document.createElement("div")
    movieInfoDiv.classList.add("grid-cont")

    // Название фильма
    const title = document.createElement("h1");
    title.classList.add("grid-title")
    if (movie.nameRu){
      title.textContent = movie.nameRu;
    } else {
      title.textContent = movie.nameEn;
    }
    
    const description = document.createElement("p");
    description.textContent = movie.description;

    const image = document.createElement("img");
    image.src = movie.posterUrl;
    image.alt = movie.name;
    image.classList.add("grid-image")

    movieImageDiv.appendChild(image)
    movieDiv.appendChild(movieImageDiv)

    movieInfoDiv.appendChild(title)
    movieInfoDiv.appendChild(description)
    movieDiv.appendChild(movieInfoDiv)

    movieContainer.appendChild(movieDiv);
  });
}

// Загрузка контента при запуске сайта
document.addEventListener("DOMContentLoaded", function () {

    function loadContent() {
      currentFunction = loadContent

      const xhr = new XMLHttpRequest();
      xhr.open("GET", `https://kinopoiskapiunofficial.tech/api/v2.1/films/top?type=TOP_100_POPULAR_FILMS&page=${currentPage}`, true);
      xhr.setRequestHeader("X-API-KEY", apiKey);
    
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const response = xhr.responseText;
          const data = JSON.parse(response);
          const movies = data.films;

          movieContainer.innerHTML = ''
    
          createFilmContainer(movies)
        }
      };
  
      xhr.send();
    }

    loadContent()
    
});


// Фильтрация по данным
function fetchMoviesByGenre(array) {
  currentFunction = fetchMoviesByGenre

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${array[0]}&countries=${array[1]}&yearFrom=${array[2]}&yearTo=${array[3]}&page=${currentPage}`, true);
  xhr.setRequestHeader("X-API-KEY", apiKey);

  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          const response = xhr.responseText;
          const data = JSON.parse(response);
          const movies = data.items;

          movieContainer.innerHTML = "";

          if (movies.length != 0) {
            createFilmContainer(movies)
          } else { 
            const text = document.createElement("h1");
            text.textContent = 'Ничего не найдено';
            movieContainer.appendChild(text);
          }

          
      }
  };
  xhr.send();
}

// Обработчик нажатия кнопки "Применить фильтр"
document.getElementById("applyFilterButton").addEventListener("click", function () {
  const selectedGenre = document.querySelector('input[name="genre"]:checked');
  const selectedCountry = document.querySelector('input[name="country"]:checked');
  const selectedYear = document.querySelector("li.dropdown-item select");

  const genreValue = selectedGenre ? selectedGenre.value : "";
  const countryValue = selectedCountry ? selectedCountry.value : "";
  const yearValue = selectedYear ? selectedYear.value : ""; 

  console.log(yearValue.split('-'))

  if (yearValue.split('-').length == 1) { 
    yearFrom = yearValue
    yearTo = yearValue
  } else { 
    yearFrom = yearValue[0]
    yearTo = yearValue[1]
  }


  currentArgument = [genreValue, countryValue, yearFrom, yearTo]; 
  console.log(currentArgument)
  fetchMoviesByGenre(currentArgument);
});


// Поиск по ключевому слову
const movieSearchInput = document.getElementById("movieSearchInput");
const movieSearchButton = document.getElementById("movieSearchButton");

function searchMovies(query) {
  currentFunction = searchMovies

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://kinopoiskapiunofficial.tech/api/v2.2/films?keyword=${query}&page=${currentPage}`, true);
  xhr.setRequestHeader("X-API-KEY", apiKey);

  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          const response = xhr.responseText;
          const data = JSON.parse(response);
          const movies = data.items;

          movieContainer.innerHTML = "";

          if (movies.length != 0) {
            createFilmContainer(movies)
          } else { 
            const text = document.createElement("h1");

            text.textContent = 'Ничего не найдено';
            movieContainer.appendChild(text);
          }
      }
  };

  xhr.send();
}

movieSearchButton.addEventListener("click", function () {
    const searchQuery = movieSearchInput.value;
    currentArgument = searchQuery
    searchMovies(searchQuery);
});


// Перемещение по страницам
let currentPage = 1; 
const currentPageSpan = document.getElementById("currentPage");
const nextPageButton = document.getElementById("nextPageButton");
const prevPageButton = document.getElementById("prevPageButton");

nextPageButton.addEventListener("click", function () {
  currentPage++;
  currentFunction(currentArgument);
  currentPageSpan.textContent = currentPage;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

prevPageButton.addEventListener("click", function () {
  if (currentPage > 1) {
      currentPage--;
      currentFunction(currentArgument);
      currentPageSpan.textContent = currentPage;

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }
});