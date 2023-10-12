const todoForm = document.querySelector(`#todoForm`);

function addFucn() {
  const mainInputBox = document.querySelector(`.mainInputBox`);
  const div = document.querySelector(`.addedTask`);

  const textTask = mainInputBox.value.trim();

  const ul = document.createElement(`ul`);
  const li = document.createElement(`li`);
  const i = document.createElement(`i`);
  const checkbox = document.createElement(`input`);
  checkbox.classList.add(`checking`);
  checkbox.type = `checkbox`;

  i.classList.add(`fa-regular`, `fa-trash-can`, `deleteBTN`);

  // Alert Box:
  const alertMainDiv = document.querySelector(`.alertMainDiv`);
  const okBTN = document.querySelector(`.ok-btn`);
  

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
  const checking = document.querySelector(`.checking`);
  console.log(checking)

  ul.childNodes[0].addEventListener(`click`, () => {
    
    // Checkbox:
    if (checking.checked) {
      const completedHeadline = document.querySelector(`.completedHeadline`);
      // completedHeadline.style.display = `block`;
      const completedTasks = document.querySelector(`.completedTasks`);
      // console.log(completedTasks);
      // div.removeChild(ul);
      // completedTasks.appendChild(ul);
      ul.childNodes[0].parentElement.remove();
      completedTasks.appendChild(ul);

    } else {
    // completedHeadline.style.display = `none`;
      div.appendChild(ul);
      completedTasks.removeChild(ul);
    }
  });

  // delete todo:
  ul.childNodes[2].addEventListener(`click`, () => {
    ul.remove();
  });

}

todoForm.addEventListener(`submit`, (event) => {
  event.preventDefault();

  addFucn();
});
