// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

// global
const toggleBtn = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const nav = document.getElementById("nav");

// ********** close links ************
// toggle button
toggleBtn.addEventListener("click", function () {
  containerHeight = linksContainer.getBoundingClientRect().height;
  linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
window.addEventListener("scroll", function () {
  // fixed nav
  const navHeight = nav.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
  // fixed back to top button
  const topLink = document.querySelector(".top-link");
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent default
    e.preventDefault();
    // scroll
    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const navFixed = nav.classList.contains("fixed-nav");

    const id = e.currentTarget.getAttribute("href").slice(1);
    const section = document.getElementById(id);
    let position = section.offsetTop - navHeight;
    if (!navFixed) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scroll({
      left: 0,
      top: position,
    });

    // mobile container reset
    linksContainer.style.height = 0;
  });
});
