const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchedMovieListContainer = document.getElementById("searchedMovieListContainer");
const savedMovieListContainer = document.getElementById("savedMovieListContainer");
const movieContainer = document.getElementById("movieContainer");
const addWatchlistBtn = document.getElementById("addWatchlistBtn");
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
      const {Title, imdbRating, Runtime, Genre, Plot, Poster} = data;

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
              <button class="btn" id="addWatchlistBtn" onclick="addWatchlist(this)">
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

function addWatchlist(element) {
  //placeholderDivWatchlist.classList.add("hidden");
  const grandGrandParentElement = element.parentElement.parentElement.parentElement;
}

searchForm.addEventListener("submit", searchMovie);
