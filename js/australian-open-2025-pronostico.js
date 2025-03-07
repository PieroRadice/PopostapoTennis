import { players } from "./players.js";
//import { predictions } from "./predictions.js";
//import { primo } from "./primo.js";
// Hamburger menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

export function creaColonne(predictions) {
  const totali = [];
  const columnContainer = document.getElementById("columns");

  predictions.forEach((prediction) => {
    let totale = 0;
    const column = document.createElement("div");
    column.className = "column";
    const headerCell = document.createElement("div");
    headerCell.className = "header-cell";
    headerCell.innerHTML = `
    <img src="${prediction.img}" alt="Immagine ${prediction.name}" />
    ${prediction.name}
  `;
    column.appendChild(headerCell);

    const content = document.createElement("div");
    content.className = "content";

    const createCell = (title, playerName, isWinner = false) => {
      const cell = document.createElement("div");
      cell.className = isWinner ? "winner" : "cell";
      const points = isWinner
        ? players[playerName].winnerPoints
        : players[playerName].semiPoints;
      totale += points;
      totali.push(totale);
      cell.innerHTML = `
      <div class="title">${title}</div>
      <div class="title">punti: ${points}</div>
      <div class="player">
        <img src="${players[playerName].img}" alt="${playerName}" />
        ${playerName}
      </div>
      <div class="title">classifica: ${players[playerName].ranking}</div>
    `;
      return cell;
    };

    if (prediction.winner)
      content.appendChild(createCell("VINCITORE", prediction.winner, true));
    if (prediction.semi1)
      content.appendChild(createCell("SEMIFINALISTA", prediction.semi1));
    if (prediction.semi2)
      content.appendChild(createCell("SEMIFINALISTA", prediction.semi2));
    if (prediction.semi3)
      content.appendChild(createCell("SEMIFINALISTA", prediction.semi3));
    const totalPoints = document.createElement("div");
    totalPoints.className = "title";
    totalPoints.innerHTML = `Punti in gioco: ${totale}`;
    headerCell.appendChild(totalPoints);
    column.appendChild(content);
    columnContainer.appendChild(column);
  });
}
