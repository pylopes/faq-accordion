const button = document.querySelectorAll("button");
const img = document.querySelectorAll("#button-img");
const answer = document.querySelectorAll(".answer");


button[0].addEventListener("click", () => {
    if (img[0].getAttribute("src") === "assets/images/icon-plus.svg") {
        img[0].setAttribute("src", "assets/images/icon-minus.svg");
        answer[0].style.display = "";
    } else {
        img[0].setAttribute("src", "assets/images/icon-plus.svg");
        answer[0].style.display = "none";
    }
});

button[1].addEventListener("click", () => {
    if (img[1].getAttribute("src") === "assets/images/icon-plus.svg") {
        img[1].setAttribute("src", "assets/images/icon-minus.svg");
        answer[1].style.display = "";
    } else {
        img[1].setAttribute("src", "assets/images/icon-plus.svg");
        answer[1].style.display = "none";
    }
});

button[2].addEventListener("click", () => {
    if (img[2].getAttribute("src") === "assets/images/icon-plus.svg") {
        img[2].setAttribute("src", "assets/images/icon-minus.svg");
        answer[2].style.display = "";
    } else {
        img[2].setAttribute("src", "assets/images/icon-plus.svg");
        answer[2].style.display = "none";
    }
});

button[3].addEventListener("click", () => {
    if (img[3].getAttribute("src") === "assets/images/icon-plus.svg") {
        img[3].setAttribute("src", "assets/images/icon-minus.svg");
        answer[3].style.display = "";
    } else {
        img[3].setAttribute("src", "assets/images/icon-plus.svg");
        answer[3].style.display = "none";
    }
});
