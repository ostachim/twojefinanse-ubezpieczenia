const hamburger = document.querySelector(".navigation__hamburger");
const menu = document.querySelector(".navigation__list")
let menuIsVisible = false;


const toggleHamburger = () => {
    
    menu.style.top = menuIsVisible ? "-500px":"100px";
    menuIsVisible = !menuIsVisible;
    console.log("działa")
    
}

hamburger.addEventListener("click",toggleHamburger);

