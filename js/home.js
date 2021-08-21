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
const cardsContainer = document.querySelector(".cards-container");
const setCardsLayoutButtons = () => {
    const cardsLayoutBtns = document.querySelectorAll(
        ".button-cards__rectangle"
    );
    const btnNormalRectangle = cardsLayoutBtns[0];
    const btnOneColRectangle = cardsLayoutBtns[1];

    const cardsNumberOneCol = document.querySelectorAll(
        ".card__number-one-column"
    );
    const cardsNumber = document.querySelectorAll(
        ".card__number--normal-layout"
    );
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
    const changeToOneColumn = () => {
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
    };

    btnOneColRectangle.parentElement.addEventListener(
        "click",
        changeToOneColumn
    );

    const changeToNormalLayout = () => {
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
                el.classList.remove(
                    el.className.split(" ")[0] + "--one-column"
                );
            });
        });
        btnOneColRectangle.classList.remove("button-cards-active");
        btnNormalRectangle.classList.add("button-cards-active");
    };

    btnNormalRectangle.parentElement.addEventListener(
        "click",
        changeToNormalLayout
    );
};

// rawg api connection
const url = "https://api.rawg.io/api/games";

const key = "?key=45c4a3d7d1d04ea89de942898b712fe9";

const psIcon = `<svg class="platform-icons__icon" fill="white" width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 0.149439L6.5 12.0297L9.07955 12.882L9.07955 2.9205C9.07955 2.4511 9.28024 2.13944 9.60212 2.24662C10.023 2.36835 10.1048 2.80075 10.1048 3.26493L10.1048 7.24338C11.7104 8.05381 12.9745 7.24296 12.9745 5.10468C12.9745 2.91966 12.2334 1.94626 10.0527 1.16365C9.19249 0.864976 7.59836 0.360979 6.5 0.149439Z"/>
            <path d="M9.75 11.1429L13.6492 9.45771C14.0903 9.25915 14.1578 8.9894 13.8008 8.84764C13.4382 8.70325 12.791 8.74457 12.3452 8.93895L9.75 10.0506V8.27688L9.89861 8.21729C9.89861 8.21729 10.6498 7.89415 11.7064 7.75502C12.7609 7.61465 14.0541 7.77328 15.0706 8.2385C16.2156 8.68019 16.3439 9.32446 16.0542 9.77281C15.7603 10.2165 15.0478 10.5375 15.0478 10.5375L9.75 12.8484"/>
            <path d="M1.18907 11.3388C-0.0278308 10.9682 -0.230758 10.185 0.324385 9.7326C0.836458 9.31949 1.70854 9.0085 1.70854 9.0085L5.31353 7.6032L5.31353 9.20264L2.72172 10.2184C2.26263 10.3979 2.1938 10.6505 2.56358 10.7827C2.93997 10.9202 3.60794 10.8832 4.0673 10.6979L5.31353 10.2067V11.6345C5.23321 11.6492 5.1439 11.6641 5.06238 11.6793C3.81985 11.9048 2.49607 11.8122 1.18907 11.3388Z"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1271 12.7978C16.0247 12.8989 15.8903 12.9561 15.7455 12.9561C15.6008 12.9561 15.462 12.8989 15.3594 12.7978C15.2582 12.6948 15.2021 12.5603 15.2021 12.4154C15.2021 12.1153 15.4451 11.8727 15.7455 11.8727C15.8903 11.8727 16.0247 11.928 16.1271 12.0314C16.2284 12.1324 16.2855 12.2692 16.2855 12.4154C16.2855 12.5603 16.2284 12.6948 16.1271 12.7978ZM15.2934 12.4154C15.2934 12.292 15.3396 12.1788 15.4239 12.095C15.5104 12.0092 15.6257 11.963 15.7455 11.963C15.8655 11.963 15.9779 12.0092 16.0622 12.095C16.1473 12.1788 16.1932 12.292 16.1932 12.4154C16.1932 12.6627 15.9922 12.8634 15.7455 12.8634C15.6257 12.8634 15.5104 12.8177 15.4239 12.7331C15.3396 12.6477 15.2934 12.5358 15.2934 12.4154ZM15.9927 12.6405C15.9976 12.6544 16.0034 12.6627 16.0118 12.6651L16.0193 12.6694V12.7038H15.9018L15.8996 12.6969L15.8916 12.6761C15.8903 12.6651 15.8887 12.6508 15.8871 12.6267L15.8819 12.5325C15.8805 12.4991 15.8696 12.4796 15.8494 12.4667C15.8345 12.4617 15.8141 12.4579 15.7837 12.4579H15.6205V12.7038H15.5134V12.0997H15.7941C15.8399 12.0997 15.8785 12.1078 15.908 12.1204C15.9672 12.1482 15.9976 12.1984 15.9976 12.269C15.9976 12.3037 15.9889 12.3362 15.9741 12.3601C15.9612 12.377 15.946 12.3924 15.9295 12.4075L15.9339 12.4106C15.9451 12.4185 15.9563 12.4263 15.9628 12.4378C15.9778 12.4543 15.9846 12.482 15.9858 12.5177L15.9885 12.5946C15.9889 12.6143 15.9905 12.6296 15.9927 12.6405ZM15.8661 12.3435C15.8835 12.3323 15.8916 12.31 15.8916 12.276C15.8916 12.2401 15.8792 12.2162 15.8549 12.2042C15.8399 12.1984 15.8214 12.1942 15.7964 12.1942H15.6205V12.3639H15.7867C15.8198 12.3639 15.846 12.3571 15.8661 12.3435Z"/>
            </svg>`;

const xboxIcon = `<svg class="platform-icons__icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 0C7.75357 0 8.79048 0.40056 9.73452 1.07423C9.75 1.07423 9.75 1.09244 9.75 1.11064C9.75 1.12885 9.73452 1.12885 9.71905 1.12885C8.5119 0.819328 6.68571 2.03922 6.51548 2.16667H6.5H6.48452C6.31429 2.03922 4.4881 0.819328 3.28095 1.12885C3.26548 1.12885 3.25 1.12885 3.25 1.11064C3.25 1.09244 3.25 1.07423 3.26548 1.07423C4.20952 0.40056 5.24643 0 6.5 0ZM10.6537 11.4392C11.6287 10.4302 8.40504 6.86712 6.5023 5.41667C6.5023 5.41667 6.48658 5.41667 6.48658 5.43243C4.59957 6.86712 1.3602 10.4302 2.35088 11.4392C3.45164 12.4167 4.91407 13 6.5023 13C8.09054 13 9.53724 12.4167 10.6537 11.4392ZM1.78082 2.19751C1.7734 2.19751 1.76969 2.20158 1.76598 2.20566C1.76227 2.20973 1.75856 2.2138 1.75114 2.2138C0.667808 3.40327 0 5.04896 0 6.8576C0 8.34035 0.460046 9.72534 1.21689 10.817C1.21689 10.8333 1.23174 10.8333 1.24658 10.8333C1.26142 10.8333 1.26142 10.817 1.24658 10.8007C0.78653 9.25282 3.11644 5.52149 4.31849 3.95726L4.33333 3.94097C4.33333 3.93257 4.33333 3.9285 4.3313 3.92653C4.32939 3.92467 4.32568 3.92467 4.31849 3.92467C2.49315 1.93681 1.8847 2.14863 1.78082 2.19751ZM8.66667 3.93424L8.68151 3.91793C10.5068 1.94443 11.1153 2.15646 11.2043 2.18908C11.2105 2.18908 11.2141 2.18908 11.2173 2.19025C11.2217 2.1919 11.2253 2.19586 11.234 2.20539C12.3322 3.39602 13 5.04332 13 6.85372C13 8.33792 12.54 9.72426 11.7831 10.817C11.7831 10.8333 11.7683 10.8333 11.7534 10.8333V10.8007C12.1986 9.25127 9.88356 5.5163 8.68151 3.95055C8.66667 3.95055 8.66667 3.93424 8.66667 3.93424Z" fill="white"/>
            </svg>`;

const msIcon = `<svg class="platform-icons__icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.95833H5.95833V0.998704L13 0V5.95833ZM5.41667 1.08333V5.95833H0V1.80612L5.41667 1.08333ZM5.41667 6.5H0V11.1145L5.41667 11.9167V6.5ZM5.95833 11.912V6.5H13V13L5.95833 11.912Z" fill="white"/>
            </svg>
            `;

const nintIcon = `<svg class="platform-icons__icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.67443 13H7.67506C7.62406 13 7.58325 12.9591 7.58325 12.908V0.081761C7.58325 0.0408805 7.61385 0 7.66486 0H9.67443C11.5106 0 12.9999 1.49214 12.9999 3.33176V9.66824C12.9999 11.5079 11.5106 13 9.67443 13ZM11.4596 7.15409C11.4596 6.42846 10.8679 5.83569 10.1437 5.83569C9.41941 5.83569 8.83796 6.42846 8.82776 7.15409C8.82776 7.87972 9.41941 8.47248 10.1437 8.47248C10.8679 8.47248 11.4596 7.87972 11.4596 7.15409Z" fill="white"/>
            <path d="M2.16675 4.33333C2.16675 4.92917 2.65425 5.41667 3.25008 5.41667C3.84591 5.41667 4.33341 4.92917 4.33341 4.33333C4.33341 3.7375 3.84591 3.25 3.25008 3.25C2.64522 3.25 2.16675 3.72847 2.16675 4.33333Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.45677 0H6.40457C6.45759 0 6.5 0.0408805 6.5 0.0919811V12.908C6.5 12.9591 6.45759 13 6.40457 13H3.45677C1.54812 13 0 11.5079 0 9.66824V3.33176C0 1.49214 1.54812 0 3.45677 0ZM3.45677 11.9575H5.41843V1.04245H3.45677C2.82055 1.04245 2.22675 1.28774 1.7814 1.71698C1.32545 2.14623 1.08157 2.71855 1.08157 3.33176V9.66824C1.08157 10.2814 1.33605 10.8538 1.7814 11.283C2.22675 11.7225 2.82055 11.9575 3.45677 11.9575Z" fill="white"/>
            </svg>`;

const linIcon = `<svg class="platform-icons__icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 980"><path d="M617.9 980h-17c-5-1.2-10-2.1-14.9-3.7-17.7-5.7-28.4-19.1-37-34.6-1.5-2.7-3.2-4.2-6.3-4.9-72.9-16.9-145.5-12.8-218.1 2.1-1.5.3-3.2 1.7-4 3-14.4 24.7-37.5 35.3-65.9 30.6-23-3.8-44.7-11.5-66.5-19.3-24.9-8.9-49.5-18.9-75.6-23.7-18-3.3-36.2-5.4-54.2-8.7-14.3-2.6-28.3-6.4-40.7-14.3-13.2-8.4-16.7-18.4-12-33.4 3.1-10 6.3-20 9.5-30 5.1-15.7 5.5-31.3-.1-47-1.7-4.7-2.7-9.6-3.6-14.5-4-21.5 4.9-35.7 25.8-41.6 1.6-.5 3.2-.7 4.9-1.2 11.1-2.9 22.3-5.4 33.2-9 16.4-5.5 30.3-14.7 38.2-30.8 5.9-12 12.8-23 25.1-29.4-5.3-15.7-6.3-31.5-1.6-47 3.1-10.1 8.7-19.4 12.6-29.3 9.6-24.8 19.6-49.5 27.9-74.8 14.2-42.8 34.6-82 62.9-117.2 14.3-17.8 27.3-36.6 40.9-54.9 4.7-6.3 8-13.3 8.4-21.1 1.1-21.1 2.9-42.3 2.2-63.3-1-31.1-4-62.2-5.7-93.3-1.4-25-.3-50 5.5-74.5 6.3-26 18-48.7 40.7-64.3C350.3 18 369.7 9.7 390.5 5c9.4-2.1 18.9-3.4 28.4-5h26c1.3.3 2.5.8 3.8.9 46.2 5.2 81.7 27.1 104.8 67.7 19.2 33.8 27.6 70.9 30.3 109.3 1.9 26.9 2.4 53.9 4.2 80.8 2 30.5 10.9 58.6 29.3 83.6 17.6 23.9 34.4 48.3 51.1 72.8 25.9 38 50.9 76.5 70.9 118 11.7 24.3 18.7 49.7 18.9 76.9.2 24.6-2.8 48.8-8.6 72.7-.5 1.9-.1 4.8 1.1 6.1 14.1 15.3 21.3 32.9 20.6 54-.5 16.2 5.4 30.4 18.4 40.3 8.6 6.6 18.4 11.9 28.2 16.6 20.9 10.1 26.6 31.7 12.7 50.3-6.2 8.3-14.6 14.1-23.5 19-23.3 12.8-46.8 25.4-70 38.6-26.7 15.2-52.7 31.1-74.7 53.1-5.4 5.4-12.6 9.4-19.7 12.4-7.8 3.2-16.5 4.6-24.8 6.9zm-306-675.5c.3 1.8.6 3.5.8 5.1.2 1.8.3 3.7.2 5.5-1.2 32.2-12.4 60.6-31.8 86.1-3.3 4.3-6.9 8.8-9 13.7-7.4 17.8-14.5 35.7-21.2 53.8-7.6 20.6-13.6 41.9-24.9 60.9-19.9 33.5-28.2 69.8-27.1 108.4.7 23.2 7.9 43.8 25.9 59.6 8.9 7.8 17.7 15.7 26.8 23.2 16.5 13.5 33.4 26.5 49.5 40.4 6.2 5.3 11.7 12 15.9 19 8.2 13.7 3.2 31.4-10.6 39.6-4 2.3-8.4 3.9-12.7 5.8.1.2.2.7.5 1.1 12.7 14.6 25.3 29.2 38.2 43.6 1.3 1.5 4 2.3 6.1 2.6 21.4 2.9 42.9 2.8 64.3.8 18.4-1.7 37-3.2 54.8-7.5 43.3-10.5 76.5-36.9 104.4-70.7 1.3-1.6 1.7-4.2 1.8-6.4.4-16.5.4-33 1.1-49.5.6-14.6 1.9-29.2 3.2-43.8.6-6.7 4.4-12.1 10.9-13.5 6.9-1.5 14.1-1.4 21.2-1.7 2.5-.1 5.1.6 7.7 1 .4-1.2.6-1.9.7-2.5 11.9-50.3 11.6-100.2-4.6-149.7-18.8-57.3-42-112.9-67.1-167.6-9.6-21-20.3-41.5-30.8-62.1-3.1-6.2-5.1-6.6-11.8-4.7-1.8.5-3.6.9-5.2 1.8-12.3 6.3-24.6 12.6-36.8 19-18.7 9.9-37.2 20.1-55.9 29.8-10.6 5.5-21.8 5.3-32.2-.2-9.4-4.9-18.5-10.6-26.8-17.1-8.7-7.2-16.6-15.6-25.5-23.8zM258.4 946c4.1-1.1 9.1-1.1 12.1-3.5 7.6-6.1 15-12.8 21.1-20.3 8.9-10.9 10.4-23.8 6.4-37.3-4.2-14-12.4-25.6-21.5-36.8-8.5-10.5-17.1-20.9-24.4-32.2-16.7-26.1-32-53-48.9-79-7.4-11.3-16.8-21.4-25.9-31.5-3.7-4.1-8.8-7.1-13.8-9.7-8.4-4.4-14.3-3-20.1 4.6-3 3.9-5.4 8.4-7.8 12.8-3.5 6.4-6.6 13.1-10.2 19.4-5.1 8.9-12.6 15-22.6 17.7-6.6 1.8-13.2 3.3-19.8 5-9.8 2.6-19.7 5-29.3 8.1-8 2.6-11.7 8.5-10.8 17 .6 5.3 1.2 10.6 2.4 15.8 3.5 14.8 3.3 29.3-1.3 43.8-3.2 10-6.3 20.1-8.1 30.3-2 11.6 1 16.3 12.3 19 16.5 3.9 33.2 7.1 49.9 9.9 24.3 4.1 48.3 8.9 71 19.3 13.6 6.2 27.8 11.1 41.9 16.1 15.4 5.2 30.9 9.9 47.4 11.5zm354.9-234.9c-1.3-.1-2.8-.4-4.3-.4-8.8-.1-12.3 2.8-12.8 11.5-.3 5.8.1 11.7.3 17.5.6 18 3.1 36.1 1.5 53.8-2.3 25.3-7.3 50.4-11.8 75.4-2.5 14-5.1 27.8-2.3 42.1 6.5 32.8 30.7 44.6 60 29.1 14.6-7.7 26.9-18.3 38.7-29.7 5.7-5.5 11.6-11.3 18.4-15.3 23.7-13.8 47.9-26.7 71.9-40.1 9.6-5.4 19.2-10.6 28.4-16.7 6.4-4.2 6.7-10.1 1.5-15.8-2.7-2.9-5.8-5.6-9.1-7.7-5.6-3.6-11.3-7.1-17.3-10-12.8-6.1-20.8-16.2-25.8-29.1-3.9-9.9-5.3-20.2-5-30.8.2-9.1-2.3-17.2-10.3-22.8-.5.4-.7.5-.8.6-1.4 2.5-2.8 4.9-4.2 7.4-9.6 17.8-23.4 30.6-43.1 36.4-7.8 2.3-15.8 4.6-23.8 5.2-27.7 2-43.1-8.3-48-35.6-1.2-8.1-1.4-16.3-2.1-25zM385.5 327.4c5.2-1.8 10.9-2.9 15.7-5.5 25.6-14.1 51.1-28.6 76.4-43.2 7.1-4.1 7.7-11.2 1.5-16.6-4.5-3.9-9.6-7.4-15-9.6-19.6-7.9-39.5-15-59.1-22.8-10.2-4.1-19.5-2.6-28.4 3.1-2 1.3-4.1 2.3-5.9 3.8-14.8 11.9-29.6 23.7-44.2 35.8-1.5 1.2-2.4 4.8-1.8 6.5 1.6 4.3 3.8 8.6 6.7 12 11.6 13.6 26.6 23 41.8 32.1 3.5 2.1 7.7 2.8 12.3 4.4zm52.9-108.3c.3-.7.4-.9.4-1-.5-1.4-1-2.8-1.4-4.2-3-10.3-2.8-20.5 2.1-30.1 4.3-8.5 10.5-14.8 20.8-14.8 10.2 0 16.5 6.3 20.8 14.8 8.3 16.6 4.1 34.8-10.8 47.9 13.1 6.6 10.7 7.8 20.9-2.5 22.6-22.8 21.9-66-.9-88.6-15.9-15.8-38.6-17.3-55.7-3.3-21 17.1-26.1 48.6-17 72.1.5 1.2 1.8 2.3 3 2.9 5.8 2.2 11.7 4.5 17.8 6.8zm-84.5 1.4c5-3.5 9.1-7.7 14-9.6 6.6-2.5 8.4-6.9 8.6-13.2.9-18.4-2.3-35.6-14.8-49.9-12.7-14.6-31.3-14.6-44.4-.3-1.8 2-3.6 4-4.9 6.3-14.1 24.9-14.5 50.1-.2 74.9 3 5.3 8.5 9.1 13 13.4.8.8 3.2 1.3 3.9.7 4.4-3.4 8.6-7.2 12.5-10.6-4.1-1.4-8-2-11.1-3.9-14.6-9.2-19.2-37.5-8.6-51.2 5.5-7.1 13.8-8.9 20.5-3.1 4.7 4.1 8.6 9.7 11.2 15.4 4.6 9.9 4.3 20.4.3 31.1z" fill="#fff"/></svg>`;

const appleIcon = `<svg class="platform-icons__icon" width="14" height="14" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.773 22.773"><path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zM20.67 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"/></svg>`;

const androidIcon = `<svg class="platform-icons__icon" xmlns="http://www.w3.org/2000/svg" width="11pt" height="11pt" fill="white" viewBox="0 0 13 13"><path d="M1.805 4.21a.778.778 0 00-.57.235.767.767 0 00-.235.563v3.36c0 .226.078.413.234.57a.778.778 0 00.57.234.763.763 0 00.567-.235.784.784 0 00.23-.57v-3.36a.767.767 0 00-.234-.562.767.767 0 00-.562-.234zm0 0M2.914 9.563c0 .242.082.445.25.609.168.168.371.25.61.25h.578l.007 1.773c0 .227.079.414.235.57.156.16.343.239.562.239a.761.761 0 00.57-.238.772.772 0 00.235-.57v-1.774h1.078v1.773c0 .227.078.414.234.57.157.16.348.239.57.239a.761.761 0 00.571-.238.772.772 0 00.234-.57v-1.774h.586a.811.811 0 00.602-.25.816.816 0 00.25-.61V4.36H2.914zm0 0M8.273 1.195L8.828.172c.04-.067.024-.121-.039-.156-.066-.032-.117-.016-.156.046L8.07 1.095A3.823 3.823 0 006.5.766c-.55 0-1.074.109-1.57.328L4.367.062C4.332 0 4.277-.015 4.211.017c-.063.035-.074.09-.04.156l.556 1.023a3.413 3.413 0 00-1.344 1.2 3.036 3.036 0 00-.5 1.683h7.226c0-.61-.164-1.172-.5-1.683a3.418 3.418 0 00-1.336-1.2zM5.066 2.684a.292.292 0 01-.214.09.29.29 0 01-.211-.09.311.311 0 010-.43.298.298 0 01.426 0c.062.058.09.133.09.215a.283.283 0 01-.09.215zm3.293 0a.277.277 0 01-.21.09.305.305 0 010-.61c.085 0 .156.031.21.09a.295.295 0 01.086.215.295.295 0 01-.086.215zm0 0M11.766 4.441a.784.784 0 00-.57-.23.779.779 0 00-.563.23.77.77 0 00-.235.567v3.36c0 .226.079.413.235.57a.767.767 0 00.562.234.772.772 0 00.57-.235.758.758 0 00.235-.57v-3.36a.755.755 0 00-.234-.566zm0 0"/></svg>`;

const requestGames = async () => (await fetch(url + key)).json();

// const requestDecription = async (id) => {
//     (await fetch(`${url}/${id}${key}`)).json().then((data) => data.description);
// };

// const getDescriptions = (games) => {
//     const descriptions = [];
//     games.forEach((game) => {
//         requestDecription(game.id).then((desc) => {
//             descriptions.push(desc);
//         });
//     });
//     return descriptions;
// };

const selectIcon = (p) => {
    switch (p) {
        case "PlayStation":
            return psIcon;
        case "Nintendo":
            return nintIcon;
        case "Xbox":
            return xboxIcon;
        case "PC":
            return msIcon;
        case "Linux":
            return linIcon;
        case "Apple Macintosh":
        case "iOS":
            return appleIcon;
        case "Android":
            return androidIcon;
        default:
            return "";
    }
};

const loadCards = (games) => {
    let cardNum = 1;
    games.forEach((game) => {
        const gnrs = [];
        const platfs = [];
        const card = document.createElement("div");
        card.className = "card";
        game.genres.forEach((gen) => {
            gnrs.push(gen.name);
        });
        game.parent_platforms.forEach((p) => {
            platfs.push(p.platform.name);
        });

        card.innerHTML = `<div class="card__image-container">
                <img class="card__image" src=${game.background_image} alt="${
            game.name
        } image">
            </div>
            <div class="card__information">
                <div class="card__description-container">
                    <h3 class="card__heading">${game.name}</h3>
                    <dl class="card__description">
                        <div class="description-item">
                            <dt class="description-item__term">Release date</dt>
                            <dd class="description-item__definition">${
                                game.released
                            }</dd>
                            <hr class="description-item__line">
                        </div>
                        <div class="description-item">
                            <dt class="description-item__term">Genres</dt>
                            <dd class="description-item__definition">${gnrs
                                .slice(0, 3)
                                .join(", ")}</dd>
                            <hr class="description-item__line">
                        </div>
                        <p class="card__number card__number-one-column">#${cardNum}</p>
                    </dl>
                </div>
                <div class="card__icons-container">
                    <div class="platform-icons">
                        ${selectIcon(platfs[0])}
                        ${selectIcon(platfs[1])}
                        ${selectIcon(platfs[2])}
                    </div>
                    <p class="card__number card__number--normal-layout">#${cardNum}</p>
                    <div class="card__button" tabindex=0>
                        <svg class="button__icon button__icon--plus-sign">
                            <path
                                d="M2.7832 4.41406H0.515625V3.13086H2.7832V0.845703H4.06641V3.13086H6.33398V4.41406H4.06641V6.66992H2.7832V4.41406Z" />
                        </svg>
                        <svg class="button__icon button__icon--gift-box">
                            <path
                                d="M3,2.5C3,1.1,4.1,0,5.5,0S8,1.1,8,2.5C8,1.1,9.1,0,10.5,0S13,1.1,13,2.5v0c0,0.1,0,0.3,0,0.5h2c0.6,0,1,0.4,1,1
                                    v1c0,0.6-0.4,1-1,1H1C0.4,6,0,5.6,0,5V4c0-0.6,0.4-1,1-1h2C3,2.8,3,2.7,3,2.5L3,2.5z M4.1,3H7V2.5C7,1.7,6.3,1,5.5,1S4,1.7,4,2.5
                                    C4,2.6,4,2.8,4.1,3C4.1,3,4.1,3,4.1,3z M9,3h2.9c0,0,0,0,0-0.1c0-0.2,0-0.3,0-0.4C12,1.7,11.3,1,10.5,1S9,1.7,9,2.5V3z M15,7v7.5
                                    c0,0.8-0.7,1.5-1.5,1.5l0,0H9V7H15z M2.5,16C1.7,16,1,15.3,1,14.5l0,0V7h6v9H2.5z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="card__synopsis-container">
                <div class="card__synopsis"></div>
            </div>`;
        cardsContainer.append(card);
        cardNum++;
    });
    setCardsLayoutButtons();
};

// document.addEventListener("DOMContentLoaded", async () => {
//     let games;
//     try {
//         games = (await requestGames()).results;
//     } catch {
//         console.log("error");
//     }
//     loadCards(games);
// });
