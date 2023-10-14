const todoForm = document.querySelector(`#todoForm`);

const mainInputBox = document.querySelector(`.mainInputBox`);
const div = document.querySelector(`.addedTask`);

// for Alert Box:
const okBTN = document.querySelector(`.ok-btn`);


function addFucn() {
  const checkbox = document.createElement(`input`);
  checkbox.type = `checkbox`;
  const ul = document.createElement(`ul`);
  const li = document.createElement(`li`);
  const i = document.createElement(`i`);
  
  
  // adding classes:
  i.classList.add(`fa-regular`, `fa-trash-can`, `deleteBTN`);
  
  
  const textTask = mainInputBox.value.trim();
  const alertMainDiv = document.querySelector(`.alertMainDiv`);

  if (textTask === ``) {
    alertMainDiv.style.display = `flex`;
  } else {
    div.appendChild(ul);
    ul.appendChild(checkbox);
    ul.appendChild(li);
    ul.appendChild(i);
    li.textContent = textTask;
    mainInputBox.value = ``;   
  }

  // Alert's 'ok' button:
  okBTN.addEventListener(`click`, () => {
    alertMainDiv.style.display = `none`;
  });

  //Checkbox:
  checkbox.addEventListener(`click`, function () {
    const completedTasks = document.querySelector(`.completedTasks`);
    if (checkbox.checked) {
      
      this.parentElement.remove();
      completedTasks.appendChild(this.parentElement);
      
    } else {
      
      completedTasks.removeChild(this.parentElement);
      div.appendChild(this.parentElement);
      
    }
  })

  // delete todo:
  ul.childNodes[2].addEventListener(`click`, () => {
    ul.remove();
  });

  // Edit Todo:
  const formBox = document.createElement(`form`);
  formBox.classList.add(`editForm`);
  const submitBtn = document.createElement(`button`);
  submitBtn.type = `submit`;
  const createInputBox = document.createElement(`input`);
  createInputBox.type = `text`;
  submitBtn.classList.add(`fa-solid`, `fa-pen-to-square`)
  
  ul.childNodes[1].addEventListener(`dblclick`, function(){
    
    this.parentElement.insertBefore(formBox, ul.childNodes[2]);
    formBox.appendChild(createInputBox)
    formBox.appendChild(submitBtn)
    createInputBox.value = this.textContent
    this.remove();
    createInputBox.placeholder = `Edit your task!`;


    const p = document.createElement(`p`);
    const editForm = document.querySelector(`.editForm`);

    editForm.addEventListener(`submit`, function (event) {
      event.preventDefault();
      
      if (createInputBox.value === ``) {
        alertMainDiv.style.display = `flex`;
      } else {
        this.parentElement.insertBefore(li, ul.childNodes[2]);
      li.innerText = createInputBox.value.trim()
      this.remove();
      }
      
    })
    
  });

}

todoForm.addEventListener(`submit`, (event) => {

  // Need more knowledge about preventDeafult():
  event.preventDefault();

  addFucn();
});
