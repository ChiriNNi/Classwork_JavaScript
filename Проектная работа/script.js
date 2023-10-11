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
          const movieDiv = document.createElement("div");
          movieDiv.classList.add("movie");
  
          const title = document.createElement("h2");
          title.textContent = movie.name;
  
          const originalTitle = document.createElement("p");
          originalTitle.textContent = movie.nameOriginal;
  
          const description = document.createElement("p");
          description.textContent = movie.description;
  
          const duration = document.createElement("p");
          duration.textContent = `Duration: ${movie.filmLength} min`;
  
          const image = document.createElement("img");
          image.src = movie.posterUrl;
          image.alt = movie.name;

          const skip = document.createElement("br")
  
          movieDiv.appendChild(title);
          movieDiv.appendChild(originalTitle);
          movieDiv.appendChild(description);
          movieDiv.appendChild(duration);
          movieDiv.appendChild(image);
          movieDiv.appendChild(skip)
  
          movieContainer.appendChild(movieDiv);
        });
      }
    };
  
    xhr.send();
  });
  