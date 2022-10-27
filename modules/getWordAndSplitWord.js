import { randomWordFromArr } from "./generateRandomWord.js";

const randomWord = randomWordFromArr();
const splitRandomWord = randomWord.split('');
console.log(splitRandomWord)

export {randomWord, splitRandomWord}