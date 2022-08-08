const btn = document.getElementById("btn");
const activityText = document.getElementById("activityText");
const title = document.getElementById("title");

const getActivity = () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
  .then(res => res.json())
  .then(data => postActivity(data.activity))
  .catch(err => console.error(err))
}

const postActivity = (activity) => {
  title.textContent = `🎊 notBoredBot 🎉`
  document.body.classList.add("not-bored-bg");
  activityText.textContent = `✨ ${activity} ✨`;
}

btn.addEventListener("click", getActivity);

