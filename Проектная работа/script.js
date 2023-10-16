document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "68aaf7ab-50f7-4ff2-a18f-44511ece9a28";
    const movieContainer = document.getElementById("movieContainer");
  
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://kinopoiskapiunofficial.tech/api/v2.1/films/top?type=TOP_100_POPULAR_FILMS&page=1", true);
    xhr.setRequestHeader("X-API-KEY", apiKey);
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = xhr.responseText;
        const data = JSON.parse(response);
        const movies = data.films;
  
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
          title.textContent = movie.nameRu;

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
    };
  
    xhr.send();
  });


  document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "68aaf7ab-50f7-4ff2-a18f-44511ece9a28";
    const movieContainer = document.getElementById("movieContainer");
    const genreRadios = document.querySelectorAll("input[name='genre']");
    const countryRadios = document.querySelectorAll("input[name='country']");
    const ratingRadios = document.querySelectorAll("input[name='rating']");

    // Функция для отправки запроса на сервер с выбранными фильтрами
    function fetchMoviesWithFilters() {
        const selectedGenre = document.querySelector("input[name='genre']:checked").value;
        const selectedCountry = document.querySelector("input[name='country']:checked").value;
        const selectedRating = document.querySelector("input[name='rating']:checked").value;

        const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/top?type=TOP_100_POPULAR_FILMS&page=1&genre=${selectedGenre}&country=${selectedCountry}&rating=${selectedRating}`;

        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader("X-API-KEY", apiKey);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = xhr.responseText;
                const data = JSON.parse(response);
                const movies = data.films;

                // Очистка контейнера перед добавлением новых фильмов
                movieContainer.innerHTML = "";

                movies.forEach((movie) => {
                    // Создание элементов фильма как ранее
                    // ...

                    movieContainer.appendChild(movieDiv);
                });
            }
        };

        xhr.send();
    }

    // Обработчики событий для радио кнопок (и других элементов фильтрации)
    genreRadios.forEach((radio) => {
        radio.addEventListener("change", fetchMoviesWithFilters);
    });

    countryRadios.forEach((radio) => {
        radio.addEventListener("change", fetchMoviesWithFilters);
    });

    ratingRadios.forEach((radio) => {
        radio.addEventListener("change", fetchMoviesWithFilters);
    });

    // Инициализация загрузки фильмов при загрузке страницы
    fetchMoviesWithFilters();
});
