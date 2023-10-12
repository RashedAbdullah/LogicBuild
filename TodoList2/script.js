const todoForm = document.querySelector(`#todoForm`);



function addValues() {
    const inputingElement = document.querySelector(`.inputElement`);
    const inputedElement = document.querySelector(`.inputedElement`);
    const inputed = inputingElement.value.trim();
    const p = document.createElement(`p`);
    
    if (inputed === ``) {
        alert(`Input somthing`)
    } else {
        inputedElement.appendChild(p);
        p.innerText = inputed;
        inputingElement.value = ``;
    }
}


todoForm.addEventListener(`submit`, (event) => {
    addValues();
    event.preventDefault();
})