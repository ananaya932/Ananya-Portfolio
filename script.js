```javascript
// =====================================================
// ANANAYA HAZRA PORTFOLIO
// JavaScript
// =====================================================


// ===============================
// 1. PAGE LOAD MESSAGE
// ===============================

console.log("Welcome to Ananaya Hazra's Portfolio!");


// ===============================
// 2. SCROLL ANIMATION
// ===============================

// সব section select করছি
const sections = document.querySelectorAll("section");


// যখন user scroll করবে
window.addEventListener("scroll", function () {

    sections.forEach(function (section) {

        // Section-এর position বের করছি
        const sectionTop = section.getBoundingClientRect().top;

        // Browser window-এর height
        const windowHeight = window.innerHeight;


        // Section screen-এর কাছাকাছি এলে
        if (sectionTop < windowHeight - 100) {

            section.classList.add("show");

        }

    });

});


// ===============================
// 3. NAVIGATION LINK CLICK
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("Navigation clicked:", link.textContent);

    });

});
```
