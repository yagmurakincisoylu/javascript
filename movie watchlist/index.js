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
  getMovieId(searchInput.value);
  resetSearch();
}

const resetSearch = () => {
  searchedMovieListContainer.innerHTML = "";
  searchInput.value = "";
}

const getMovieId = async value => {
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
      let btnImg = "./images/plus.png";
      let btnText = "Watchlist";
      let btnFunc = "addWatchlist(this)";
      let btnClass = "";

      const getmovieIdArray = JSON.parse(localStorage.getItem("movieIdArray"));

      if(getmovieIdArray.includes(data.imdbID)) {
        for(let i = 0; i < getmovieIdArray.length; i++) {
          if(getmovieIdArray[i] === data.imdbID){

            btnImg = "./images/added.png";
            btnText = "Added";
            btnFunc = "notClickable(this)";
            btnClass = "disabled";

            searchedMovieListContainer.appendChild(getMovieHtml(data, btnImg, btnText, btnFunc, btnClass));
          }
        }
      } else {
        searchedMovieListContainer.appendChild(getMovieHtml(data, btnImg, btnText, btnFunc, btnClass));
      }
    })
}

const getMovieHtml = (data, btnImg, btnText, btnFunc, btnClass) => {
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
        <button class="btn ${btnClass}" onclick="${btnFunc}"
        data-movie-id="${imdbID}">
          <img src="${btnImg}">
          ${btnText}
        </button>
      </div>
  
      <p>${Plot}</p>
    </div>
    `;

    return newDiv;
}

const movieIdArray = JSON.parse(localStorage.getItem("movieIdArray"));

function addWatchlist(element) {
  notClickable(element);
  element.innerHTML = `<img src="./images/added.png" />Added`;
  const elementId = element.getAttribute("data-movie-id");
  const getmovieIdArray = JSON.parse(localStorage.getItem("movieIdArray"));
  getmovieIdArray.push(elementId);
  localStorage.setItem("movieIdArray", JSON.stringify(getmovieIdArray));
}

function removeWatchlist(element) {
  const elementId = element.getAttribute("data-movie-id");
  const getmovieIdArray = JSON.parse(localStorage.getItem("movieIdArray"));
  const indexOfElement = getmovieIdArray.indexOf(elementId);
  getmovieIdArray.splice(indexOfElement, 1);
  localStorage.setItem("movieIdArray", JSON.stringify(getmovieIdArray));
  savedMovieListContainer.innerHTML = "";
  renderWatchlist();
}

function notClickable(element) {
  element.classList.add("disabled");
}

const renderWatchlist = () => {
  
  const movieIdArray = JSON.parse(localStorage.getItem("movieIdArray"));

  if(movieIdArray.length) {
    placeholderDivWatchlist.classList.add("hidden");

    for(let i = 0; i < movieIdArray.length; i++) {
      fetch(`http://www.omdbapi.com/?i=${movieIdArray[i]}&apikey=e9610482`)
        .then(response => response.json())
        .then(data => {
          let btnImg = "./images/minus.png";
          let btnText = "Remove";
          let btnFunc = "removeWatchlist(this)";
          let btnClass = "";

          savedMovieListContainer.appendChild(getMovieHtml(data, btnImg, btnText, btnFunc, btnClass));
        })
    }
  } else {
    placeholderDivWatchlist.classList.remove("hidden");
  }
}

searchForm.addEventListener("submit", searchMovie);
renderWatchlist();
