import "../scss/app.scss";
import "../scss/navigation.scss";
import background1 from "../images/goldenGateBridge.jpeg";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";

// const imageContainer = document.querySelector(".header-background");
// let imageElement = new Image();
// imageElement.src = background1;
// imageElement.classList.add();
// imageContainer.appendChild(imageElement);

const menuButton = document.querySelector(".menu-bar-container");
const dropdownMenu = document.querySelector(".dropdown-menu");

console.log(menuButton);
console.log(dropdownMenu);

menuButton.addEventListener("click", () => {
	console.log("Hello Button");
	dropdownMenu.classList.toggle("visible");
});
