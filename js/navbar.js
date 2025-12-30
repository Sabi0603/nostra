// OFFER BAR
const offerBar = document.getElementById("offerBar");
const offerCloseBtn = document.getElementById("offerCloseBtn");

offerCloseBtn.addEventListener("click", () => {
    offerBar.style.transform = "translateY(-100%)";
    offerBar.style.opacity = 0;
    setTimeout(() => {
        offerBar.classList.add("hidden");
    }, 1000);
});

// SIDE NAVBAR
const sideNavbar = document.getElementById("sideNavbar");
const sideNavOpen = document.getElementById("sideNavOpen");
const sideNavClose = document.getElementById("sideNavClose");
const sideNavLink = document.querySelectorAll(".side__nav-link");

sideNavOpen.addEventListener("click", () => {
    sideNavbar.classList.remove("-translate-x-full");
});

sideNavClose.addEventListener("click", () => {
    sideNavbar.classList.add("-translate-x-full");
});

// SIDE NAVBAR ACTIVE LINK
sideNavLink.forEach((link) => {
    link.addEventListener("click", () => {
        sideNavLink.forEach(l => l.classList.remove("side__nav__link--active"));
        link.classList.add("side__nav__link--active");
    });
});

// NAVBAR ACTIVE LINK
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        navLink.forEach(l => l.classList.remove("nav__link--active"));
        link.classList.add("nav__link--active");
    });
});