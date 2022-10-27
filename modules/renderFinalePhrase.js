import showModalWindow from "./showModalInTheEnd.js";

function renderFinalPhrase(phrase){
    const end = showModalWindow();
    const h2 = document.createElement('h2');
    h2.innerText = phrase;
    end.append(h2)
}

export default renderFinalPhrase;