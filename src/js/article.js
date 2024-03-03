import "./addNavigation.js";
import "../scss/article.scss";
import "../scss/shared.scss";
import davosImg from "../images/davosSpeech.jpeg";

const pageHeading = document.querySelector("title.article");
const heading = document.querySelector("h1.article");
const img = document.querySelector("img.article");
const text = document.querySelector("main div.article");

// Factory Function, welche Object returned
function textObject(title, image, paragraph) {
	return { title, image, paragraph };
}

function createText(obj) {
	pageHeading.textContent = obj.title;
	heading.textContent = obj.title;
	img.src = obj.image;
	text.innerHTML = obj.paragraph;
}

const davos = textObject(
	"Bedeutung der Reisebranche für die Weltwirtschaft",
	davosImg,
	"<article>Rede von Joshua Billiings, Sekoya Investments Chefvolkswirtin, am 18.01.2024 auf dem Weltwirtschaftsforum in Davos.</article><p> Sehr geehrte Damen und Herren, <br><br>als Chefvolkswirt möchte ich heute über die Bedeutung der Tourismusbranche in einer angespannten Weltwirtschaftslage sprechen. In Zeiten wirtschaftlicher Unsicherheit und globaler Herausforderungen spielt der Tourismus eine entscheidende Rolle für die Stabilität und das Wachstum der Volkswirtschaften.<br><br>Die Tourismusbranche ist ein wichtiger Wirtschaftszweig, der nicht nur Arbeitsplätze schafft, sondern auch zur Steigerung des Bruttoinlandsprodukts und zur Förderung des internationalen Handels beiträgt. Gerade in schwierigen wirtschaftlichen Zeiten kann der Tourismus als wichtiger Motor für die Konjunktur dienen und dazu beitragen, Einnahmen zu generieren und die Wirtschaft anzukurbeln.<br><br>Es ist daher von großer Bedeutung, die Tourismusbranche zu unterstützen und zu fördern, um ihre positive Auswirkung auf die Gesamtwirtschaft zu stärken. Dies kann durch gezielte Investitionen in Infrastruktur, Marketingmaßnahmen und die Schaffung attraktiver Rahmenbedingungen für Touristen geschehen.<br><br>In einer angespannten Weltwirtschaftslage ist es umso wichtiger, die Potenziale des Tourismussektors zu nutzen und seine Bedeutung für die wirtschaftliche Entwicklung zu erkennen. Lassen Sie uns gemeinsam daran arbeiten, den Tourismus als wichtigen Wirtschaftsfaktor zu stärken und seine positive Effekte auf die Weltwirtschaft zu maximieren.<br><br>Vielen Dank.</p>"
);

createText(davos);
