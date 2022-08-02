myApp = {};

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("navLinks");
const navLinks = document.querySelectorAll(".navLink");

myApp.init = () => {
    myApp.closeMenu();
    AOS.init();
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

//function to create back to top button on window scroll
let scrolling = false;

window.scroll = () => {
    scrolling = true;
};

//throttles window event listener
setInterval(() => {
    const scrollHeight = window.scrollY;
    const topLink = document.querySelector(".top-link");
    if (scrollHeight > 500) {
        scrolling = false;
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
}, 1000);
// });
myApp.init();
