import { predictions } from "./predictions.js";

import { turni } from "./turni.js";
predictions.forEach((prediction) => {
  const player = turni.find((player) => player.nome === prediction.winner);
  if (player) {
    prediction.winner = player;
  }
  const semi1 = turni.find((player) => player.nome === prediction.semi1);
  if (semi1) {
    prediction.semi1 = semi1;
  }
  const semi2 = turni.find((player) => player.nome === prediction.semi2);
  if (semi2) {
    prediction.semi2 = semi2;
  }
  const semi3 = turni.find((player) => player.nome === prediction.semi3);
  if (semi3) {
    prediction.semi3 = semi3;
  }
});
export { predictions };
