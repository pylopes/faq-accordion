const buttons = document.querySelectorAll("button");
const imgs = document.querySelectorAll(".button-img");
const answers = document.querySelectorAll(".answer");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const img = imgs[index];
        const answer = answers[index];
        
        if (img.getAttribute("src") === "assets/images/icon-plus.svg") {
            img.setAttribute("src", "assets/images/icon-minus.svg");
            answer.style.display = "";
        } else {
            img.setAttribute("src", "assets/images/icon-plus.svg");
            answer.style.display = "none";
        }
    });
});
