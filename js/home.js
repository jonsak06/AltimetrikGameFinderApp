/////////////////////////click events//////////////////////////////
// show/hide sidebar
const hamburgerHeader = document.querySelector(".hamburger");
const hamburgerSidebar = document.querySelector(".hamburger--sidebar");
const sidebar = document.querySelector(".sidebar");
const body = document.querySelector(".homepage-body");
const mobileQuery = window.matchMedia("(max-width: 767px)");
const tabletQuery = window.matchMedia("(max-width: 1023px)");

hamburgerHeader.addEventListener("click", () => {
    if (mobileQuery.matches) {
        sidebar.classList.add("sidebar--mobile");
    } else if (tabletQuery.matches) {
        sidebar.classList.add("display-block");
    }
    body.classList.add("pos-fixed");
});

hamburgerSidebar.addEventListener("click", () => {
    sidebar.classList.remove("sidebar--mobile");
    body.classList.remove("pos-fixed");
});

if (tabletQuery.matches) {
    document.addEventListener("click", (e) => {
        if (
            !sidebar.contains(e.target) &&
            !hamburgerHeader.contains(e.target)
        ) {
            sidebar.classList.remove("display-block");
            body.classList.remove("pos-fixed");
        }
    });
}

//Toggle search bar on mobile
const searchIcon = document.querySelector(".header__search-icon-mobile");
const searchBarMobile = document.querySelector(".header__search-bar--mobile");
const header = document.querySelector(".header");

searchIcon.addEventListener("click", () => {
    searchBarMobile.classList.toggle("display-block");
    header.classList.toggle("header-height");
});

// cards layout buttons
const cardsLayoutBtns = document.querySelectorAll(".button-cards__rectangle");
const btnNormalRectangle = cardsLayoutBtns[0];
const btnOneColRectangle = cardsLayoutBtns[1];

const cardsContainer = document.querySelector(".cards-container");
const cardsNumberOneCol = document.querySelectorAll(".card__number-one-column");
const cardsNumber = document.querySelectorAll(".card__number--normal-layout");
const cardsSynContainer = document.querySelectorAll(
    ".card__synopsis-container"
);

const cardElemsCollections = [
    document.querySelectorAll(".card"),
    document.querySelectorAll(".card__image-container"),
    document.querySelectorAll(".card__image"),
    document.querySelectorAll(".card__information"),
    document.querySelectorAll(".card__heading"),
    document.querySelectorAll(".card__description"),
    document.querySelectorAll(".description-item"),
    document.querySelectorAll(".card__button"),
];

btnOneColRectangle.parentElement.addEventListener("click", () => {
    cardsContainer.classList.add("cards-container--one-column");
    cardsNumberOneCol.forEach((num) => {
        num.classList.add("display-block");
    });
    cardsNumber.forEach((num) => {
        num.classList.add("hide");
    });
    cardsSynContainer.forEach((syn) => {
        syn.classList.add("display-block");
    });
    cardElemsCollections.forEach((col) => {
        col.forEach((el) => {
            el.classList.add(el.className.split(" ")[0] + "--one-column");
        });
    });
    btnOneColRectangle.classList.add("button-cards-active");
    btnNormalRectangle.classList.remove("button-cards-active");
});

btnNormalRectangle.parentElement.addEventListener("click", () => {
    cardsContainer.classList.remove("cards-container--one-column");
    cardsNumberOneCol.forEach((num) => {
        num.classList.remove("display-block");
    });
    cardsNumber.forEach((num) => {
        num.classList.remove("hide");
    });
    cardsSynContainer.forEach((syn) => {
        syn.classList.remove("display-block");
    });
    cardElemsCollections.forEach((col) => {
        col.forEach((el) => {
            el.classList.remove(el.className.split(" ")[0] + "--one-column");
        });
    });
    btnOneColRectangle.classList.remove("button-cards-active");
    btnNormalRectangle.classList.add("button-cards-active");
});
