const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchedMovieListContainer = document.getElementById("searchedMovieListContainer");
const savedMovieListContainer = document.getElementById("savedMovieListContainer");
const movieContainer = document.getElementById("movieContainer");
const placeholderDivSearch = document.getElementById("placeholderDivSearch");
const placeholderDivWatchlist = document.getElementById("placeholderDivWatchlist");
const placeholderWarnDiv = document.getElementById("placeholderWarnDiv");

const searchMovie = (event) => {
  event.preventDefault();
  searchedMovieListContainer.innerHTML = "";
  getMoviesId(searchInput.value);
  searchInput.value = "";
}

const getMoviesId = async value => {
  const response = await fetch(`http://www.omdbapi.com/?s=${value}&apikey=e9610482`);
  const data = await response.json();
  const {Search: movieArray, Response} = data;

  if(Response === "False") {
    placeholderWarnDiv.classList.remove("hidden");
    placeholderDivSearch.classList.add("hidden");
  } else {
    placeholderWarnDiv.classList.add("hidden");

    for(let i = 0; i < movieArray.length; i++) {
      renderMovies(movieArray[i].imdbID)
    }
  }
}

const renderMovies = id => {
  placeholderDivSearch.classList.add("hidden");

  fetch(`http://www.omdbapi.com/?i=${id}&apikey=e9610482`)
    .then(response => response.json())
    .then(data => {
      const {Title, imdbRating, Runtime, Genre, Plot, Poster, imdbID} = data;
      const newDiv = document.createElement("div");
      newDiv.classList.add("movie-container");
      newDiv.innerHTML = `
          <img src="${Poster}" />      
          
          <div class="movie-info">
            <div class="movie-title">
              <h3>${Title}</h3>
              <img src="./images/star.png" />
              <span>${imdbRating}</span>
            </div>
          
            <div class="movie-category">
              <p>${Runtime} ${Genre}</p>
              <button class="btn" onclick="addWatchlist(this)"
              data-movie-id="${imdbID}">
                <img src="./images/plus.png">
                Watchlist
              </button>
            </div>
        
            <p>${Plot}</p>
          </div>
      `;

      searchedMovieListContainer.appendChild(newDiv);
    })
}

const elementIdArray = [];

function addWatchlist(element) {
  element.disabled = true;
  element.innerHTML = `<img src="./images/added.png" class="icon"/>Added`;
  const elementId = element.getAttribute("data-movie-id")
  elementIdArray.push({id: elementId, hasAdded: true});
  localStorage.setItem("movieIdsArray", JSON.stringify(elementIdArray));
}

function removeWatchlist(element) {
  const elementId = element.getAttribute("data-movie-id");
  const movieIdsArray = JSON.parse(localStorage.getItem("movieIdsArray"));
  const indexOfElement = movieIdsArray.indexOf(elementId);
  movieIdsArray.splice(indexOfElement, 1);
  localStorage.setItem("movieIdsArray", JSON.stringify(movieIdsArray));
  savedMovieListContainer.innerHTML = "";
  renderWatchlist();
}

const renderWatchlist = () => {
  
  const movieIdsArray = JSON.parse(localStorage.getItem("movieIdsArray"));

  if(movieIdsArray.length) {
    placeholderDivWatchlist.classList.add("hidden");

    for(let i = 0; i < movieIdsArray.length; i++) {
      fetch(`http://www.omdbapi.com/?i=${movieIdsArray[i].id}&apikey=e9610482`)
        .then(response => response.json())
        .then(data => {
          const {Title, imdbRating, Runtime, Genre, Plot, Poster, imdbID} = data;
          const newDiv = document.createElement("div");
          newDiv.classList.add("movie-container");
          newDiv.innerHTML = `
              <img src="${Poster}" />      
              
              <div class="movie-info">
                <div class="movie-title">
                  <h3>${Title}</h3>
                  <img src="./images/star.png" />
                  <span>${imdbRating}</span>
                </div>
              
                <div class="movie-category">
                  <p>${Runtime} ${Genre}</p>
                  <button class="btn" onclick="removeWatchlist(this)"
                  data-movie-id="${imdbID}">
                    <img src="./images/minus.png">
                    Remove
                  </button>
                </div>
            
                <p>${Plot}</p>
              </div>
          `;

          savedMovieListContainer.appendChild(newDiv);
        })
    }
  } else {
    placeholderDivWatchlist.classList.remove("hidden");
  }
}

searchForm.addEventListener("submit", searchMovie);
renderWatchlist();