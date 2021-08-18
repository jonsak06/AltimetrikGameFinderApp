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

// email and password validation
const validateEmail = (email) =>
    /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/.test(email);

const email = document.querySelector(".input-box__text-box");
const password = document.querySelector(".input-box__text-box--password");
const iconBoxUsr = document.querySelector(".input-box__icon-box");
const iconBoxKey = Array.from(
    document.querySelectorAll(".input-box__icon-box")
).pop();
const iconUsr = document.querySelector(".input-box__icon");
const iconKey = document.querySelector(".input-box__icon--key");
const emailErrorMsg = document.querySelector(".input__error-message");
const passErrorMsg = Array.from(
    document.querySelectorAll(".input__error-message")
).pop();
const form = document.querySelector(".login__form");

const addEmailErrorStyles = () => {
    iconBoxUsr.classList.add("border-red");
    iconUsr.classList.add("icon-red");
    email.classList.add("border-red", "text-red");
    emailErrorMsg.classList.remove("vis-hidden");
};

const addPassErrorStyles = () => {
    iconBoxKey.classList.add("border-red");
    iconKey.classList.add("icon-red");
    password.classList.add("border-red", "text-red");
    passErrorMsg.classList.remove("vis-hidden");
};

const removeEmailErrorStyles = () => {
    iconBoxUsr.classList.remove("border-red");
    iconUsr.classList.remove("icon-red");
    email.classList.remove("border-red", "text-red");
    emailErrorMsg.classList.add("vis-hidden");
};

const removePassErrorStyles = () => {
    iconBoxKey.classList.remove("border-red");
    iconKey.classList.remove("icon-red");
    password.classList.remove("border-red", "text-red");
    passErrorMsg.classList.add("vis-hidden");
};

email.addEventListener("click", removeEmailErrorStyles);
password.addEventListener("click", removePassErrorStyles);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateEmail(email.value)) {
        addEmailErrorStyles();
    } else if (password.value.length < 6) {
        addPassErrorStyles();
    } else {
        login();
    }
});

// login request
const snackbarErrorMsg = document.querySelector(".snackbar__text");

const login = async () => {
    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: `${email.value}`,
                password: `${password.value}`,
            }),
        });
        const responseJson = await response.json();
        if (response.status === 200) {
            document.cookie = "authToken=" + responseJson.accessToken;
            window.location.href = "home.html";
        }
        if (response.status === 400) {
            addEmailErrorStyles();
            addPassErrorStyles();
            snackbarErrorMsg.textContent = "Wrong credentials";
            snackbarError.classList.remove("hide");
        }
    } catch {
        snackbarErrorMsg.textContent = "An error ocurred, try again";
        snackbarError.classList.remove("hide");
    }
};
