import getArrOfImgs from "./getArrOfImgs.js";

const objOfMistakes = {mistake: 0}
const arrImgs = getArrOfImgs();

function changePictureWhenMistake(){
    arrImgs[objOfMistakes.mistake].deletePicture();
    objOfMistakes.mistake++
    arrImgs[objOfMistakes.mistake].addPicture();
}

export {changePictureWhenMistake, objOfMistakes}