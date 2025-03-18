import { generateHomeContent } from "./home.js";
import { generateMenuContent } from "./menu.js";
import "./styles.css";

generateHomeContent();

function addListeners() {
    const nav = document.querySelector("nav");
    nav.addEventListener("click", (e) => {

        if (e.target.matches("button")) {

            const container = document.querySelector("#content");
            container.replaceChildren();

            switch (e.target.id) {
                case "home":
                    generateHomeContent(); 
                    break;
                case "menu":
                    generateMenuContent();
                    break;
                default:
                    break;
                    
            }
            console.log(e.target.id);
        }
    });
}

addListeners();
