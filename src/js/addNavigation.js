import "../scss/navigation.scss";
import icon from "../images/Logo/Icon.png";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";

const header = document.querySelector("header");

const headerHtml =
	'<nav class="desktop-nav hidden"><a href=""><div class="logoContainer"></div></a><div class="spacer"></div><a href="" class="page-link">Unternehmen</a><a href="" class="page-link">Investieren</a><a href="" class="page-link">Strategie</a><a href="" class="page-link">Geschichte</a><div class="spacer"></div><a href="" class="page-link">Log In</a></nav><nav class="mobile"><a href=""><div class="logoContainer"></div></a><div class="spacer"></div><div class="menu-bar-container"><i class="fa-solid fa-bars menu-bar"> </i></div><div class="dropdown-menu"><a href="" class="page-link">Investieren</a><a href="" class="page-link">Strategie</a><a href="" class="page-link">Geschichte</a><a href="" class="page-link">Log In</a></div></nav>';

header.innerHTML = headerHtml;

const menuButton = document.querySelector(".menu-bar-container");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuButton.addEventListener("click", () => {
	dropdownMenu.classList.toggle("visible");
});

let link = document.createElement("link");
link.rel = "icon";
link.href = icon;
document.head.appendChild(link);
