myApp = {};

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("navLinks");
myApp.open = false;

//function to toggle hamburger menu
myApp.showMenu = () => {
    const navMenu = document.querySelector(".navLinks");
    navMenu.classList.toggle("show");
};

myApp.viewPortfolio = function () {
    const buttonArray = document.querySelectorAll(".portfolioButton");

    buttonArray.forEach((button) => {
        button.children[0].addEventListener("click", () =>
            myApp.changePortfolio(button.children[0].className)
        );
    });
};
