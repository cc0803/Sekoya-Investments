import "../scss/app.scss";
import image from "../images/goldenGateBridge.jpeg";

const imageContainer = document.querySelector(".header-background");
let imageElement = new Image();
imageElement.src = image;
imageContainer.appendChild(imageElement);
