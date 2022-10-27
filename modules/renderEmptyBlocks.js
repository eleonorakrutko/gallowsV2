import { splitRandomWord } from "./getWordAndSplitWord.js";

const wrapperLetters = document.getElementById('wrapperLetters');

function renderEmptyBlocks(arrOfSplitWord){
    return arrOfSplitWord.map(_ => {
        const block = document.createElement('div');
        block.classList = 'block';
        wrapperLetters.append(block);
        return block
    })
}

const arrEmptyBlocks = renderEmptyBlocks(splitRandomWord);

export default arrEmptyBlocks;