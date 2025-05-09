let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}






let currentIndex = 0; 
const slidesContainer = document.querySelector(".videi_ref"); 
const slides = document.querySelectorAll(".videi_ref .vid"); 
const totalSlides = slides.length;

// Nastavimo širino containerja glede na število slik
slidesContainer.style.display = "flex";
slidesContainer.style.transition = "transform 0.5s ease-in-out";

// Funkcija za prikaz določene slike
function showSlide() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 30}%)`;
}

// Premik na naslednjo sliko
function nextSlide() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Če je zadnja, se vrne na prvo
    }
    showSlide();
}

// Premik na prejšnjo sliko
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Če je prva, gre na zadnjo
    }
    showSlide();
}























let currentIndex2 = 0; 
const slidesContainer2 = document.querySelector(".videi_ref2"); 
const slides2 = document.querySelectorAll(".videi_ref2 .vid2"); 
const totalSlides2 = slides2.length;

// Nastavimo širino containerja glede na število slik
slidesContainer2.style.display = "flex";
slidesContainer2.style.transition = "transform 0.5s ease-in-out";

// Funkcija za prikaz določene slike
function showSlide2() {
    slidesContainer2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
}

// Premik na naslednjo sliko
function nextSlide2() {
    if (currentIndex2 < totalSlides2 - 1) {
        currentIndex2++;
    } else {
        currentIndex2 = 0; // Če je zadnja, se vrne na prvo
    }
    showSlide2();
}

// Premik na prejšnjo sliko
function prevSlide2() {
    if (currentIndex2 > 0) {
        currentIndex2--;
    } else {
        currentIndex2 = totalSlides2 - 1; // Če je prva, gre na zadnjo
    }
    showSlide2();
}





























window.onscroll = function() { stickyNavbar() };

var navbar = document.querySelector(".nav_bar"); // Select the navbar element
var sticky = navbar.offsetTop; // Get the initial offset position of the navbar

function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky"); // Add the sticky class when scroll past the navbar
    } else {
        navbar.classList.remove("sticky"); // Remove the sticky class when at the top
    }
}