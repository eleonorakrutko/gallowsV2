function renderLetter(block, letter){
    const h2 = document.createElement('h2');
    h2.innerText = letter;
    h2.style.textAlign = 'center';
    h2.style.fontSize = '30px';
    block.append(h2)
}

export default renderLetter