const mySiema = new Siema({
    selector: ".carousel",
    draggable: false,
    duration: 300,
});

const paginationButtons = document.getElementsByClassName("carousel__button");

for (let i = 0; i < paginationButtons.length; i++) {
    paginationButtons[i].addEventListener("click", function () {
        for (var i = 0; i < paginationButtons.length; i++) {
            paginationButtons[i].classList.remove("carousel__button--active");
        }
        mySiema.goTo(this.className.substr(-1));
        this.classList.add("carousel__button--active");
    });
}
