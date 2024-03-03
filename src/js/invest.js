import "./addNavigation.js";
import "../scss/invest.scss";
import "../scss/shared.scss";
import forest from "../images/forest.jpeg";
import vacation from "../images/History/vacation.jpeg";

const forestImg = document.querySelector(".section-three img");
forestImg.src = forest;

const vacationImg = Array.from(
	document.querySelectorAll(".portfolio-company img")
);
vacationImg.forEach((img) => {
	img.src = vacation;
});

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
