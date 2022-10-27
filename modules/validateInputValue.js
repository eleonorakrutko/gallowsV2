const input = document.getElementById('input');

function validateInputValue(){
    if(input.value.match(/[ а-яёА-ЯЁ ]/) && input.value !== ' '){
        input.value = input.value.toLowerCase()
        const enterLetter = input.value;
        input.value = null;
        return enterLetter;
    } else {
        alert('Enter correct value')
        input.value = null;
        return null
    }
}
export default validateInputValue