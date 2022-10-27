import renderLetter from "./renderLetter.js";

function addLetterIntoBlock(splitWord, arrBlocks, enteredLetter){
    if(enteredLetter){
        splitWord.forEach((letterWord, index) => {
            if(letterWord === enteredLetter && !arrBlocks[index].firstChild){
                renderLetter(arrBlocks[index], enteredLetter);
            } 
        }) 
    }
}

export default addLetterIntoBlock