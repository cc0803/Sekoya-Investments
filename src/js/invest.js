import "./addNavigation.js";
import "../scss/invest.scss";
import "../scss/shared.scss";
import forest from "../images/forest.jpeg";
import vacation from "../images/History/vacation.jpeg";
import hotel from "../images/hotel.jpeg";
import kreuzfahrt from "../images/flussKreuzfahrt.jpeg";
import airplane from "../images/airplane.jpeg";
import safari from "../images/safari.jpeg";
import airport from "../images/airport.jpg";

const forestImg = document.querySelector(".section-three img");
forestImg.src = forest;

const vacationImg = Array.from(
	document.querySelectorAll(".portfolio-company img")
);
vacationImg.forEach((img) => {
	img.src = vacation;
});

vacationImg[0].src = hotel;
vacationImg[2].src = kreuzfahrt;
vacationImg[3].src = airplane;
vacationImg[4].src = safari;
vacationImg[5].src = airport;

// create Intersection observer

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

const portfolioCompanies = document.querySelectorAll(".portfolio-company");
portfolioCompanies.forEach((company) => observer.observe(company));
