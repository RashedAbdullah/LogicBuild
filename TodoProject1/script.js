const mainForm = document.querySelector(`#mainForm`);


function addTaskHead(form) {
    const mainInputBox = document.querySelector(`.mainInputBox`);
    const mainInputValue = mainInputBox.value.trim();
    const addedBox = document.querySelector(`.addedBox`);
    const div = document.createElement(`div`);
    const p = document.createElement(`p`);
    const formElement = document.createElement(`form`);
    const inputText = document.createElement(`input`);
    const button = document.createElement(`button`);
    console.log(form)

    if (mainInputBox.value === ``) {
        alert(`Sorry!`)
    } else {
        addedBox.appendChild(div);
        div.appendChild(p)
        p.innerText = mainInputValue;
        mainInputBox.value = ``;
    }

    button.innerText = `edit`;
    function headlineDetails(mainBox) {
        mainBox.appendChild(formElement);
        formElement.appendChild(inputText);
        inputText.value = mainBox.childNodes[1].textContent;
        formElement.appendChild(button);
        mainBox.childNodes[1].remove();

        formElement.addEventListener(`submit`, function(event) {
            event.preventDefault();
            
            console.log(this)
        })
    }

    addedBox.addEventListener(`dblclick`, function () {
        headlineDetails(this)
    });
}

mainForm.addEventListener(`submit`, function (event) {
    event.preventDefault();
    addTaskHead(this)
    
})