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
  let placeElement = document.querySelector("#place");
  let placeData = document.querySelector("#place-data");
  placeElement.innerHTML = placeData.value;
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", curiosity);

let apiKey = "15d8ba808a69e2b1ca9d3e09a94e4096";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}";
