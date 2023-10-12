const todoForm3 = document.querySelector(`#todoForm3`);

function addBtnFunc() {
    const inputBox = document.querySelector(`.inputBox`);
    const inputBoxValue = inputBox.value.trim();
    const showInputItems = document.querySelector(`.showInputItems`);

    const p = document.createElement(`p`);
    if (inputBoxValue === ``) {
        // showAlert()
    } else {
        showInputItems.appendChild(p);
        p.innerText = inputBoxValue;
        inputBox.value = ``;
    }

}

todoForm3.addEventListener(`submit`, (event) => {
    event.preventDefault();
    addBtnFunc();
})












const customAlertOverlay = document.getElementById("custom-alert-overlay");
const customAlertBox = document.getElementById("custom-alert-box");
const customAlertMessage = document.getElementById("custom-alert-message");
const customAlertOK = document.getElementById("custom-alert-ok");

// Function to show the custom alert
// function showAlert(message) {
//   customAlertMessage.textContent = message;
//   customAlertOverlay.style.display = "block";
// }

// Function to hide the custom alert
function hideAlert() {
  customAlertOverlay.style.display = "none";
}

// Event listener for the OK button
customAlertOK.addEventListener("click", hideAlert);

// Example usage
// document
//   .getElementById("show-custom-alert")
//   .addEventListener("click", function () {
//     showAlert("This is a custom alert message.");
//   });
