const formSubmit = document.querySelector(`#formSubmit`);

function addAndAlert() {
    const inputBox = document.querySelector(`.inputBox`);
    const showBox = document.querySelector(`.showBox`);
    const inputValue = inputBox.value.trim();

    const p = document.createElement(`p`);

    const alertBox = document.querySelector(`.alertBox`);
    if (inputValue === ``) {
        alertBox.style.display = `inline-block`;
    } else {
        showBox.appendChild(p);
        p.innerText = inputValue;
        inputBox.value = ``;
    }

    const alertBtnOk = document.querySelector(`.alertBtn-ok`);
    alertBtnOk.addEventListener(`click`, () => {
        alertBox.style.display = `none`;
    })
}

formSubmit.addEventListener(`submit`, (event) => {
    
    event.preventDefault();
    addAndAlert();
})