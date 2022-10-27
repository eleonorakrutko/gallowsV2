const arrOfWords = ['кот','шоколад','вода','коньяк','картина','камень','лес','кора','свет','электрик'];

function randomWordFromArr(){
    return arrOfWords[Math.round(Math.random() * (arrOfWords.length - 1))]
}

export {randomWordFromArr}