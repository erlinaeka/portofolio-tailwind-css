// Hamburger atau Navigasi Menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Navbar Fixed


window.onscroll = function () {
  const header = document.querySelector("header");
  // Jarak header terhadap top
  const fixedNav = header.offsetTop;
  // untuk to top
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};


// Untuk dapat menghilangkan menu tanpa lewat hamburger
window.addEventListener("click", function(e) {
  if(e.target != navMenu && e.target != hamburger){
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Toggle dark mode

const darkToggle = document.querySelector("#dark-toggle");
const toggleIcon = document.querySelector("#toggle-icon");
const html = document.querySelector("html");


darkToggle.addEventListener('click', function(){
  if(darkToggle.checked){
    html.classList.add("dark");
    toggleIcon.classList.remove("text-dark");
    toggleIcon.classList.add("text-slate-100");
    localStorage.theme = 'dark';
  }else{
    html.classList.remove("dark");
    toggleIcon.classList.add("text-dark");
    toggleIcon.classList.remove("text-slate-100");
    localStorage.theme = 'light';
  }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  toggleIcon.classList.remove("text-dark");
  toggleIcon.classList.add("text-slate-100");
} else {
  toggleIcon.classList.add("text-dark");
  toggleIcon.classList.remove("text-slate-100");
}