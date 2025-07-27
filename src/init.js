import { loadHomeContent } from "./home";
import { loadMenuContent } from "./menu";
import { loadContactContent } from "./contact";
import "./styles.css"

const init = function(){
    const content = document.getElementById('content');
    const homeNav = document.getElementById('home');
    const menuNav = document.getElementById('menu');
    const aboutNav = document.getElementById('about');

    var currentChild = loadHomeContent()
    content.appendChild(currentChild)

    const loadContent = function(contentLoader){
        content.removeChild(currentChild);
        currentChild = contentLoader();
        content.appendChild(currentChild);
    }

    homeNav.addEventListener("click", () => {
        loadContent(loadHomeContent);
    })
    menuNav.addEventListener("click",() => {
        loadContent(loadMenuContent);
    })
    aboutNav.addEventListener("click", () => {
        loadContent(loadContactContent)
    })

    loadContent(loadHomeContent);
}

export {init}