import addLetterIntoBlock from "./addLetterIntoBlock.js";
import { randomWord } from "./getWordAndSplitWord.js";
import {changePictureWhenMistake} from "./changePictureMistake.js"
import validateInputValue from "./validateInputValue.js"
import checkIsWin from "./checkIsWin.js";
import renderFinalPhrase from "./renderFinalePhrase.js";
import { objOfMistakes } from "./changePictureMistake.js";
import checkIsLoose from "./checkIsLoose.js";

function controleGameProcess(splitWord, arrBlocks){
    return function (){
        const enteredLetter = validateInputValue();
        if(!enteredLetter){
            return;
        }

        addLetterIntoBlock(splitWord, arrBlocks, enteredLetter)

        if(checkIsWin(arrBlocks)){
            renderFinalPhrase(`Вы выиграли. Угаданное слово - ${randomWord}`)
        }

        if(!splitWord.includes(enteredLetter)){
            changePictureWhenMistake();
        }
        
        if(checkIsLoose(objOfMistakes)){
            setTimeout(() => {
                renderFinalPhrase(`Вы проиграли. Правильное слово - ${randomWord}`)
            }, 1000) 
        }
    }  
}

export default controleGameProcess;