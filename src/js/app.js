import "../scss/home.scss";
import "../scss/navigation.scss";
import "../scss/shared.scss";
import "../scss/footer.scss";
import icon from "../images/Logo/Icon.png";
import background1 from "../images/goldenGateBridge.jpeg";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import oregonImage from "../images/OregonBeach.jpg";
import speech from "../images/davosSpeech.jpeg";

const image1 = document.querySelector("img.backgroundImage");
image1.src = background1;

const menuButton = document.querySelector(".menu-bar-container");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuButton.addEventListener("click", () => {
	dropdownMenu.classList.toggle("visible");
});

const images = Array.from(document.querySelectorAll(".second-section img"));

images.forEach((img) => {
	img.src = oregonImage;
});

const speechImg = document.querySelector(".davos-speech");
speechImg.src = speech;

// Add Website TabIcon
let link = document.createElement("link");
link.rel = "icon";
document.head.appendChild(link);
link.href = icon;
