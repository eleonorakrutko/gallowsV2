import restart from "./restart.js";

const closeButton = document.getElementById('close');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

function showModalWindow(){
    modal.style.display = 'block';
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        restart();
    })
    return modalContent
}

export default showModalWindow