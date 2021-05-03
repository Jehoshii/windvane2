let now = new Date();

let h5 = document.querySelector("h5");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let mins = now.getMinutes();
if (mins < 10) {
  mins = `0${mins}`;
}
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
h5.innerHTML = `${day} ${month} ${date} ${year}, ${hours}:${mins}`;

function curiosity(event) {
  event.preventDefault();
  let apiKey = `13d9fcdae5c8ed4497e6b27254968acc`;
  let city = document.querySelector("#place-data").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(weatherWatch);
  let placeElement = document.querySelector("#place");
  let placeData = document.querySelector("#place-data");
  placeElement.innerHTML = placeData.value;
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", curiosity);

function weatherWatch(response) {
  let imageElement = document.querySelector("#imagery");

  document.querySelector("#place").innerHTML = response.data.name;
  document.querySelector("#degree").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humid").innerHTML = response.data.main.humidity;
  document.querySelector("#windsweep").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#describe").innerHTML = response.data.weather[0].description;
  imageElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}