const restartButton = document.getElementById('restartButton');
const wrapperLetters = document.getElementById('wrapperLetters');
const input = document.getElementById('input');
const send = document.getElementById('send');


const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeButton = document.getElementById('close');

//рестарт через обновление страницы
restartButton.addEventListener('click', () => {
    window.location.reload();
})

class Picture{
    #wrapperImgs = document.getElementById('wrapperImgs');

    constructor(url){
        this.url = url;
    }
 
    addPicture(){
        const picture = document.createElement('img');
        picture.src = this.url;
        this.#wrapperImgs.appendChild(picture);
    }

    deletePicture(){
        this.#wrapperImgs.removeChild(this.#wrapperImgs.firstChild)
    }
}

const arrOfImgs = startGame();
function startGame(){
    const p1 = new Picture('./imgs/1.png');
    const p2 = new Picture('./imgs/2.png');
    const p3 = new Picture('./imgs/3.png');
    const p4 = new Picture('./imgs/4.png');
    p1.addPicture()
    return [p1,p2,p3,p4]
}

//массив из 10 слов
const arrOfWords = [];
function generateArrOfWords(arr,...args){
    arr.push(...args);
    return arr;
}
console.log(generateArrOfWords(arrOfWords, 'кот','шоколад','вода','коньяк','картина','камень','лес','кора','свет','электрик'))

//рандомное слово из массива 
function randomWordFromArr(arr){
    return arr[Math.round(Math.random() * (arr.length - 1))]
}
const randomWord = randomWordFromArr(arrOfWords);

//разбить слово по буквам в массив
function splitWordInArr(word){
    const arrForWord = word.split('');
    console.log(arrForWord)
    return arrForWord;
}

//отрисовка пустых блоков
const arrEmptyBlocks = [];
function renderEmptyBlocks(arrOfSplitWord, parent, arrBlocks){
    arrOfSplitWord.forEach(_ => {
        const emptyBlock = document.createElement('div');
        emptyBlock.style.borderBottom = '2px solid black';
        emptyBlock.style.width = '50px';
        emptyBlock.style.height = '50px';
        emptyBlock.style.margin = '5px'
        parent.style.display = 'flex';
        parent.style.marginBottom = '30px';
        parent.append(emptyBlock);
        arrBlocks.push(emptyBlock)
    })
}
renderEmptyBlocks(splitWordInArr(randomWord), wrapperLetters, arrEmptyBlocks);

//отрисовка буквы
function renderLetter(block, letter){
    const h2 = document.createElement('h2');
    h2.innerText = letter;
    h2.style.textAlign = 'center';
    h2.style.fontSize = '30px';
    block.append(h2)
}

//показ модалки
function showModalWindow(сontent){
    modal.style.display = 'block';
    closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    })
    return сontent
}

//если проигрыш
function loose(objMistakes, rightWord) {
    if(objMistakes.mistake === 3){
        setTimeout(() => {
            const loose = showModalWindow(modalContent);
            const h2 = document.createElement('h2');
            h2.innerText = `Вы проиграли. Правильное слово - ${rightWord}`;
            loose.append(h2)
        }, 1000) 
    }
}

//проверка есть ли буквы во всех блоках
function checkAllLettersInBlocks(arrBlocks){
    return arrBlocks.every(block => block.firstChild)
}

//если выигрыш
function win(arrBlocks){
    if(checkAllLettersInBlocks(arrBlocks)){
        const win = showModalWindow(modalContent);
        const h2 = document.createElement('h2');
        h2.innerText = 'Вы выиграли!';
        win.append(h2)
    }
}

//изменение картинки при ошибке
const objOfMistakes = {mistake: 0}
function changePictureWhenMistake(arrImgs, objMistakes){
    arrImgs[objMistakes.mistake].deletePicture();
    objMistakes.mistake++
    arrImgs[objMistakes.mistake].addPicture();
    loose(objMistakes, randomWord);
    //if counter === 3 show modal window
}

//есть ли буква в слове, добавление буквы
function checkLetterAndAdd(word, validator, arrOfSplitWord){
    const splitWord = arrOfSplitWord(word);
    return function (){
        const enteredLetter = validator();
        if(enteredLetter){
            console.log(word)
            splitWord.forEach((letterWord,index) => {
                if(letterWord === enteredLetter && !arrEmptyBlocks[index].firstChild){
                    renderLetter(arrEmptyBlocks[index], enteredLetter);
                    win(arrEmptyBlocks)
                } 
            })
            if(!splitWord.includes(enteredLetter)){
                changePictureWhenMistake(arrOfImgs, objOfMistakes);
            }
        }
    }
}

//добавления слушателя на кнопку отправки
send.addEventListener('click',checkLetterAndAdd(randomWord, validateInputValue(input), splitWordInArr));

//ограничения на ввод

function validateInputValue(enterUser){
    return function(){
        if(enterUser.value.match(/[ а-яёА-ЯЁ ]/) && enterUser.value !== ' '){
            enterUser.value = enterUser.value.toLowerCase()
            const enterLetter = enterUser.value;
            enterUser.value = null;
            return enterLetter;
        } else {
            alert('Enter correct value')
            enterUser.value = null;
            return null
        }
    }
}

//окончание игры
//положительное
//отрицательное +

//рестарт игры навесить на него обновление страницы +
