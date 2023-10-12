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

  if (textTask === ``) {
    alert(`Please input a task`);
  } else {
    div.appendChild(ul);
    ul.appendChild(checkbox);
    ul.appendChild(li);
    ul.appendChild(i);
    li.textContent = textTask;
    mainInputBox.value = ``;
  }

  ul.childNodes[2].addEventListener(`click`, () => {
    ul.remove();
  });

  const checking = document.querySelector(`.checking`);
  console.log(checking)

  ul.childNodes.addEventListener(`click`, () => {
    
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
}

todoForm.addEventListener(`submit`, (event) => {
  event.preventDefault();

  addFucn();
});
