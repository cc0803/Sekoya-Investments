import "./addNavigation.js";
import "../scss/navigation.scss";
import "../scss/footer.scss";
import "../scss/shared.scss";
import "../scss/company.scss";
import nightsky from "../images/nightsky.jpeg";
import skyline from "../images/skyline.png";
import man from "../images/History/manOnSign.jpeg";

const nightskyImg = document.querySelector(".one");
const skylineImg = document.querySelector(".two");

nightskyImg.src = nightsky;
skylineImg.src = skyline;

const manImg = document.querySelector(".section-three img");
manImg.src = man;
