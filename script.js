const navToggle = document.getElementById("mobile-nav-toggle");
const primaryNav = document.getElementById("primary-navigation");

navToggle.addEventListener("click", function () {
    primaryNav.toggleAttribute("data-visible");
});


console.log("Hi!!");