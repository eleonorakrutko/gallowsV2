import restart from "./modules/restart.js";
import arrEmptyBlocks from "./modules/renderEmptyBlocks.js"
import renderStartPicture from "./modules/startPicture.js";
import { splitRandomWord } from "./modules/getWordAndSplitWord.js";
import controleGameProcess from "./modules/controleGameProcess.js";

const restartButton = document.getElementById('restartButton');
const send = document.getElementById('send');

renderStartPicture()

restartButton.addEventListener('click', restart)

send.addEventListener('click', controleGameProcess(splitRandomWord, arrEmptyBlocks));



