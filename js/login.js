// show/hide password
const hidePassIcon = document.querySelector(".input-box__icon--password");
const showPassIcon = document.querySelector(
    ".input-box__icon--password:last-child"
);
const passInputField = document.querySelector(".input-box__text-box--password");

hidePassIcon.addEventListener("click", function () {
    passInputField.type = "password";
    hidePassIcon.classList.add("hide");
    showPassIcon.classList.remove("hide");
});

showPassIcon.addEventListener("click", function () {
    passInputField.type = "text";
    hidePassIcon.classList.remove("hide");
    showPassIcon.classList.add("hide");
});

// snackbars
const snackbarError = document.querySelector(".snackbar--error");
const snackbarAlert = document.querySelector(".snackbar--alert");
const snackbarSuccess = document.querySelector(".snackbar--success");
const errorX = document.querySelector(".snackbar__x--red");
const alertX = document.querySelector(".snackbar__x--yellow");
const successX = document.querySelector(".snackbar__x--green");

errorX.addEventListener("click", function () {
    snackbarError.classList.add("hide");
});
alertX.addEventListener("click", function () {
    snackbarAlert.classList.add("hide");
});
successX.addEventListener("click", function () {
    snackbarSuccess.classList.add("hide");
});
