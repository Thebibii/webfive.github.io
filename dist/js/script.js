const menuBar = document.querySelector('.menu-bar');
const menuNav = document.querySelector('.menu');
const navBar = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
	console.log(window.scrollY);
	const positionWindow = window.scrollY > 0;
	navBar.classList.toggle("scroll-active", positionWindow);
	menuNav.classList.remove("menu-active");
});

menuBar.addEventListener('click', () => {
	menuNav.classList.toggle('menu-active');
	navBar.classList.toggle('nav-active');
});