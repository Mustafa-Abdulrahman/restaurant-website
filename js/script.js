// Nav open
let btnNav = document.getElementById("nav-toggler");
let nav = document.getElementById("nav");

btnNav.addEventListener("click", function () {
  btnNav.classList.toggle("active");
  nav.classList.toggle("open");
});
// Nav open

// close nav when chose One of nav items

nav.addEventListener("click", closeNav);
function closeNav(n) {
  if (n.target.nodeName == "A") {
    nav.classList.remove("open");
    btnNav.classList.remove("active");
  }
}

// another option
// document.addEventListener("click", function (n) {
//   if (n.target.closest(".nav-item")) {
//     nav.classList.remove("open");
//     btnNav.classList.remove("active");
//   }
// });
// close nav when chose One of nav items

window.addEventListener("scroll", function () {
  if (this.pageYOffset > 90) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector("header").classList.remove("sticky");
  }
  if (this.pageYOffset > 150) {
    this.document.querySelector(".about .main-title").classList.add("show");
  } else {
    this.document.querySelector(".about .main-title").classList.remove("show");
  }
  if (this.pageYOffset > 850) {
    this.document.querySelector(".menu .main-title").classList.add("show");
  } else {
    this.document.querySelector(".menu .main-title").classList.remove("show");
  }
  if (this.pageYOffset > 300) {
    this.document.querySelector(".about ").classList.add("show");
  } else {
    this.document.querySelector(".about ").classList.remove("show");
  }
  if (this.pageYOffset > 1700) {
    this.document.querySelector(".feed-back").classList.add("show");
  } else {
    this.document.querySelector(".feed-back").classList.remove("show");
  }
  if (this.pageYOffset > 1850) {
    this.document.querySelector(".feed-back").classList.add("show2");
  } else {
    this.document.querySelector(".feed-back").classList.remove("show2");
  }
  if (this.pageYOffset > 2300) {
    this.document.querySelector(".team").classList.add("show");
  } else {
    this.document.querySelector(".team").classList.remove("show");
  }
});

let menuTabs = document.querySelector(".menu-tabs");
let menuTabsButtons = document.querySelectorAll(".menu-tab-button");

menuTabs.addEventListener("click", function (n) {
  if (
    n.target.classList.contains("menu-tab-button") &&
    !n.target.classList.contains("active")
  ) {
    let target = n.target.getAttribute("data-target");
    // menuTabs.querySelector(".active").classList.remove("active");
    for (let i = 0; i < menuTabsButtons.length; i++) {
      menuTabsButtons[i].classList.remove("active");
    }
    n.target.classList.add("active");
    let menuSection = document.querySelector(".menu");
    menuSection
      .querySelector(".menu-content.active")
      .classList.remove("active");
    menuSection.querySelector(target).classList.add("active");
  }
});
