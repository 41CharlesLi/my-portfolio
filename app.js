myApp = {};

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("navLinks");
const navLinks = document.querySelectorAll(".navLink");
console.log(navLinks);

myApp.init = () => {
    myApp.closeMenu();
};

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

myApp.closeMenu = function () {
    for (let i = 0; i < navLinks.length; i++) {
        let link = navLinks[i];
        link.addEventListener("click", function () {
            menu.classList.toggle("show");
        });
    }
};

myApp.init();
