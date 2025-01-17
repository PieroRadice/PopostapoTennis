import { players } from "./players.js";

export function creaColonne(predictions) {
  const columnContainer = document.getElementById("columns");

  predictions.forEach((prediction) => {
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
      cell.innerHTML = `
      <div class="title">${title}</div>
      <div class="player">
        <img src="${players[playerName]}" alt="${playerName}" />
        ${playerName}
      </div>
    `;
      return cell;
    };

    if (prediction.winner)
      content.appendChild(createCell("VINCITORE", prediction.winner, true));
    if (prediction.semi1)
      content.appendChild(createCell("ALTRO SEMIFINALISTA", prediction.semi1));
    if (prediction.semi2)
      content.appendChild(createCell("ALTRO SEMIFINALISTA", prediction.semi2));
    if (prediction.semi3)
      content.appendChild(createCell("ALTRO SEMIFINALISTA", prediction.semi3));

    column.appendChild(content);
    columnContainer.appendChild(column);
  });
}
