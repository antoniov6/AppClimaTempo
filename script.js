const key = "d4afe77fa4726132a9e572c18912deee";

function putDataOnScreen(data) {
  console.log(data);
  document.querySelector(".city").innerHTML = "Tempo em " + data.name;
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
  document.querySelector(
    ".forecast-img"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  document.querySelector(".forecast-txt").innerHTML =
    data.weather[0].description;
  document.querySelector(".humidity").innerHTML =
    "Umidade: " + data.main.humidity + "%";
}

async function searchCity(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());
  putDataOnScreen(data);
}

function clickOnButton() {
  const city = document.querySelector(".search-input").value;

  searchCity(city);
}
