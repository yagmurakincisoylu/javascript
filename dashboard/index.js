// background image
const photographerDiv = document.getElementById("photographer");

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
.then(res => {
  if(!res.ok) {
    throw Error("Something went wrong");
  }
  return res.json();
})
.then(data => {
  document.body.style.backgroundImage = `url(${data.urls.full})`;
  photographerDiv.textContent = `Photo by: ${data.user.name}`;
})
.catch(err => {
  console.error(err);
  
  document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1458441087617-24d758e383f1?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjA1NjA1ODU&ixlib=rb-1.2.1&q=80)";
  
  photographer.textContent = "Photo by: Aaron Burden";
})

// time
const timeDiv = document.getElementById("time");

function getTime() {
  let date = new Date();
  let time = date.toLocaleTimeString([], {timeStyle: "short"});
  
  timeDiv.textContent = time;
}

setInterval(getTime, 1000);


// coin
const coinDiv = document.getElementById("coin");

const dogecoinInput = document.getElementById("dogecoinInput");
const bitcoinInput = document.getElementById("bitcoinInput");
const ethereumInput = document.getElementById("ethereumInput");

const dogecoinText = document.getElementById("dogecoinText");
const bitcoinText = document.getElementById("bitcoinText");
const ethereumText = document.getElementById("ethereumText");

const dogecoinImg = document.getElementById("dogecoinImg");
const bitcoinImg = document.getElementById("bitcoinImg");
const ethereumImg = document.getElementById("ethereumImg");

function getCoin(coinName, coinImgDiv) {
  fetch(`https://api.coingecko.com/api/v3/coins/${coinName}`)
    .then(res => {
      if(!res.ok) {
        throw Error("Something went wrong")
      }
      return res.json();
    })
    .then(data => {
      const {name, image} = data;
      const {thumb} = image;
      
      coinImgDiv.innerHTML = `
        <img src="${thumb}" />
        <p>${name}</p>
      `;
    })
    .catch(err => console.error(err))
}

getCoin("dogecoin", dogecoinImg);
getCoin("bitcoin", bitcoinImg);
getCoin("ethereum", ethereumImg);


function getCoinDetails(coinName, coinTextDiv) {
  fetch(`https://api.coingecko.com/api/v3/coins/${coinName}`)
  .then(res => {
    if(!res.ok) {
      throw Error("Something went wrong")
    }
    return res.json();
  })
  .then(data => {
    const {name, market_data} = data;

    coinTextDiv.innerHTML = `
      <p>🔴 $${market_data.current_price.usd.toFixed(3)}</p>
      <p>📈 $${market_data.high_24h.usd.toFixed(3)}</p>
      <p>📉 $${market_data.low_24h.usd.toFixed(3)}</p>
    `;

    displayText(name);
  })
  .catch(err => console.error(err))
}


function displayText(coinName) {
  const coinArray = ["Dogecoin", "Bitcoin", "Ethereum"];
  const coinTextArray = [dogecoinText, bitcoinText, ethereumText];
  
  for(let i = 0; i < coinArray.length; i++) {
    if(coinName === coinArray[i]) {
      coinTextArray[i].style.display = "block";
      coinTextArray.splice(i, 1);
    } else {
      for(let i = 0; i < coinTextArray.length; i++) {
        coinTextArray[i].style.display = "none";
      }
    }
  }
}

function check() {
  if(dogecoinInput.checked) {
    getCoinDetails("dogecoin", dogecoinText);
  } else if(bitcoinInput.checked) {
    getCoinDetails("bitcoin", bitcoinText);
  } else if(ethereumInput.checked) {
    getCoinDetails("ethereum", ethereumText);
  }
}

document.addEventListener("click", event => {
  let isCoinDivClicked = coinDiv.contains(event.target);

  if(!isCoinDivClicked) {
    const coinTextArray = [dogecoinText, bitcoinText, ethereumText];
    const coinInputArray = [dogecoinInput, bitcoinInput, ethereumInput];

    for(let i = 0; i < coinTextArray.length; i++) {
      coinTextArray[i].style.display = "none";
      coinInputArray[i].checked = false;
    }
  } 
})

// weather
const weatherDiv = document.getElementById("weather");

navigator.geolocation.getCurrentPosition(position => {

  fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
    .then(res => {
      if(!res.ok) {
        throw Error("Something went wrong")
      }
      return res.json()
    })
    .then(data => {
      console.log(data)
      const {name, main, weather} = data;
      const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
      const temp = main.temp.toFixed(0);

      weatherDiv.innerHTML = `
          <div>
            <img src="${iconUrl}" />
            <p>${temp}°</p>
          </div>
          <p>${name}</p>
        `;
    })
    .catch(err => console.error(err));
});