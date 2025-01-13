// Oggetti per i dati dei giocatori
const players = {
	"Jannik Sinner": "https://www.atptour.com/-/media/alias/player-headshot/s0ag",
	"Alexander Zverev": "https://www.atptour.com/-/media/alias/player-headshot/z355",
	"Carlos Alcaraz": "https://www.atptour.com/-/media/alias/player-headshot/a0e2",
	"Taylor Fritz": "https://www.atptour.com/-/media/alias/player-headshot/fb98",
	"Daniil Medvedev": "https://www.atptour.com/-/media/alias/player-headshot/mm58",
	"Novak Djokovic": "https://www.atptour.com/-/media/alias/player-headshot/d643",
	"Andrey Rublev": "https://www.atptour.com/-/media/alias/player-headshot/re44",
	"Jack Draper": "https://www.atptour.com/-/media/alias/player-headshot/D0CO",
	"Lorenzo Musetti": "https://www.atptour.com/-/media/alias/player-headshot/m0ej",
};

// Dati dei pronostici
const predictions = [
	{
		name: "Pier",
		img: "https://www.basicpress.com/media/media/125/125090_024.JPG",
		winner: "Jannik Sinner",
		semi1: "Carlos Alcaraz",
		semi2: "Daniil Medvedev",
		semi3: "Novak Djokovic",
	},
	{
		name: "Pam",
		img: "https://static2.amica.it/wp-content/uploads/2023/07/8456559_large.jpg?v=1278015_1688727790",
		winner: "Carlos Alcaraz",
		semi1: "Jannik Sinner",
		semi2: "Alexander Zverev",
		semi3: "Daniil Medvedev",
	},
	{
		name: "Piero",
		img: "immagini/agassi.png",
		winner: "Taylor Fritz",
		semi1: "Jannik Sinner",
		semi2: "Jack Draper",
		semi3: "Lorenzo Musetti",
	},
	{
		name: "Lombo",
		img: "https://www.tennisworlditalia.com/imgb/40869/la-rivista-gq-descrive-federer-come-il-migliore-di-sempre-e-partono-le-critiche.webp",
		winner: "Carlos Alcaraz",
		semi1: "Jannik Sinner",
		semi2: "Alexander Zverev",
		semi3: "Novak Djokovic",
	},
	{
		name: "Mix",
		img: "https://compass-media.vogue.it/photos/6481dae3e03ab1e612092926/3:4/w_1920,c_limit/3241967",
		winner: "Jannik Sinner",
		semi1: "Taylor Fritz",
		semi2: "Carlos Alcaraz",
		semi3: "Andrey Rublev",
	},
	{
		name: "Rob",
		img: "immagini/wavrinka.png",
		winner: "Alexander Zverev",
		semi1: "Carlos Alcaraz",
		semi2: "Jannik Sinner",
		semi3: "Andrey Rublev",
	},
	{
		name: "Cuzzo",
		img: "https://www.mistertennis.com/media/src/rafa_nadal_bcd01.jpg",
		winner: "Jannik Sinner",
		semi1: "Taylor Fritz",
		semi2: "Carlos Alcaraz",
		semi3: "Alexander Zverev",
	},
	{
		name: "Gigi",
		img: "https://static.wixstatic.com/media/aff08a_abda19b7314f4c42a58085b83414859f~mv2.png/v1/crop/x_40,y_0,w_830,h_1270/fill/w_634,h_970,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Pete%20Sampras%2C%20%40Tennis.png",
		winner: "Jannik Sinner",
		semi1: "Carlos Alcaraz",
		semi2: "Daniil Medvedev",
		semi3: "Andrey Rublev",
	},
];

// Generazione dinamica delle colonne
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
