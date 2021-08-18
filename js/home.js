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
