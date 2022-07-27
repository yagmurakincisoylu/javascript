const homeScoreEl = document.getElementById("homeScoreEl");
const guestScoreEl = document.getElementById("guestScoreEl");
const scoreBtn = document.querySelectorAll(".btn");
const newGameBtn = document.getElementById("newGameBtn");

homeScoreEl.textContent = 0;
guestScoreEl.textContent = 0;



function incrementScore(i, t) {
  let score= Number(t.textContent);
  score += i;
  t.textContent = score;

  let homeScore = Number(homeScoreEl.textContent);
  let guestScore = Number(guestScoreEl.textContent);
  
  if(homeScore > guestScore) {
    homeScoreEl.classList.add("leader");
    guestScoreEl.classList.remove("leader");
  } else if(homeScore < guestScore) {
    guestScoreEl.classList.add("leader");
    homeScoreEl.classList.remove("leader");
  } else {
    guestScoreEl.classList.remove("leader");
    homeScoreEl.classList.remove("leader")
  }
}

function incrementHomeScore(scoreBtn) {
  const i = Number(scoreBtn.value)
  const t = homeScoreEl;
  incrementScore(i, t)
}

function incrementGuestScore(scoreBtn) {
  const i = Number(scoreBtn.value)
  const t = guestScoreEl;
  incrementScore(i, t)
}

newGameBtn.addEventListener("click", () => {
  guestScoreEl.textContent = 0;
  homeScoreEl.textContent = 0;
  guestScoreEl.classList.remove("leader");
  homeScoreEl.classList.remove("leader");
  homeScore = 0;
  guestScore = 0;
})








