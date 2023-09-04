const key = "d4afe77fa4726132a9e572c18912deee";

function putDataOnScreen(data) {
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
}

async function searchCity(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br`
  ).then((response) => response.json());
  putDataOnScreen(data);
}

function clickOnButton() {
  const city = document.querySelector(".search-input").value;

  searchCity(city);
}
