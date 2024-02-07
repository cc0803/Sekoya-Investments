import "../scss/navigation.scss";

const menuButton = document.querySelector(".menu-bar");
const dropdownMenu = document.querySelector(".dropdown-menu");

console.log(menuButton);
console.log(dropdownMenu);

menuButton.addEventListener("click", () => {
	dropdownMenu.classList.toggle(".visible");
});
