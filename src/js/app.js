import "../scss/home.scss";
import "../scss/navigation.scss";
import "../scss/shared.scss";
import background1 from "../images/goldenGateBridge.jpeg";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import oregonImage from "../images/OregonBeach.jpg";

const image1 = document.querySelector("img.backgroundImage");
image1.src = background1;

const menuButton = document.querySelector(".menu-bar-container");
const dropdownMenu = document.querySelector(".dropdown-menu");

console.log(menuButton);
console.log(dropdownMenu);

menuButton.addEventListener("click", () => {
	console.log("Hello Button");
	dropdownMenu.classList.toggle("visible");
});

const images = Array.from(document.querySelectorAll(".second-section img"));

images.forEach((img) => {
	img.src = oregonImage;
});
