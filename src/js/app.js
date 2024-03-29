import "./addNavigation.js";
import "../scss/home.scss";
import "../scss/shared.scss";
import icon from "../images/Logo/Icon.png";
import background1 from "../images/goldenGateBridge.jpeg";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import oregonImage from "../images/OregonBeach.jpg";
import speech from "../images/davosSpeech.jpeg";
import entwicklung from "../images/entwicklung.jpeg";

const image1 = document.querySelector("img.backgroundImage");
image1.src = background1;

const images = Array.from(document.querySelectorAll(".second-section img"));

images[0].src = icon;
images[1].src = oregonImage;
images[2].src = entwicklung;

const speechImg = document.querySelector(".davos-speech");
speechImg.src = speech;
