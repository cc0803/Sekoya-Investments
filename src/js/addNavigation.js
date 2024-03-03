import "../scss/navigation.scss";
import icon from "../images/Logo/Icon.png";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "../scss/footer.scss";

// ADD HEADER WITH NAVIGATION BAR
const header = document.querySelector("header");

const headerHtml =
	'<nav class="desktop-nav hidden"><a href="./home.html" id="logo-link"><div class="logoContainer"></div></a><div class="spacer"></div><a href="./company.html" class="page-link">Unternehmen</a><a href="./invest.html" class="page-link">Investieren</a><a href="./geschichte.html" class="page-link">Geschichte</a><div class="spacer"></div><a href="./login.html" class="page-link">Log In</a></nav><nav class="mobile"><a href=""><div class="logoContainer"></div></a><div class="spacer"></div><div class="menu-bar-container"><i class="fa-solid fa-bars menu-bar"> </i></div><div class="dropdown-menu"><a href="./company.html" class="page-link">Unternehmen</a><a href="./invest.html" class="page-link">Investieren</a><a href="./geschichte.html" class="page-link">Geschichte</a><a href="" class="page-link">Log In</a></div></nav>';

header.innerHTML = headerHtml;

const menuButton = document.querySelector(".menu-bar-container");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuButton.addEventListener("click", () => {
	dropdownMenu.classList.toggle("visible");
});

// Add searchtab icon
let link = document.createElement("link");
link.rel = "icon";
link.href = icon;
document.head.appendChild(link);

// Add footer
const footer = document.querySelector("footer");

const footerHtml =
	'<ul><li>Neuigkeiten</li><li><a href="./article.html">Bedeutung des Reisebranche für die Weltwirtschaft</a></li></ul><ul><li>Kontakt</li></ul><ul><li>Social Media</li><li>LinkedIn</li><li>Instagramm</li><li>X</li></ul><div class="legal flex-center-row"><span class="copyright">@Sekoya Investments Copyright</span><a href="./impressum.html">Impressum</a></div>';

footer.innerHTML = footerHtml;
