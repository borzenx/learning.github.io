import parksData from "./nationalParksOfPolandData.json" assert { type: "json" };

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get("parkname");

if (name == null) {
  window.location.href = "index.html";
}
window.addEventListener("DOMContentLoaded", () => {
  displayData();
});

const displayData = () => {
  const parkData = parksData.filter((element) => element.name == name);
  const description = parkData[0].description;
  const date = parkData[0].date;
  const title = parkData[0].title;
  const symbol = parkData[0].symbol;
  const area = parkData[0].area;
  const voivodeship = parkData[0].voivodeship;
  const splittedText = description.split("Historia");

  console.log(parkData);
  document.querySelector("#informations").innerHTML = `
  <table>
      <tr>
          <td>Symbol</td>
          <td>Nazwa</td>
          <td>Województwo</td>
          <td>Powierzchnia</td>
      </tr>
      <tr>
          <td><img src="${symbol}"></td>
          <td>${title}</td>
          <td>${voivodeship}</td>
          <td>${area}</td>
      </tr>
  </table>
  `;
  document.querySelector(
    "#homeBox"
  ).style.background = `url('img/${name}.jpg')`;
  document.querySelector("#title").innerHTML = title;
  document.querySelector("#description-long").innerHTML =
    splittedText[0].replace(/ *\[[^)]*\] */g, "");
  document.querySelector("#description-history").innerHTML =
    date + splittedText[1]?.replace(/ *\[[^)]*\] */g, "");
};
//${splittedText[1].replace(/ *\[[^)]*\] */g, "")}
