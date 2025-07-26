// Highlight active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 60;

  sections.forEach(section => {
    const id = section.getAttribute("id");

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navLinks.forEach(link => link.classList.remove("active"));

      const currentLink = document.querySelector(`nav a[href="#${id}"]`);
      if (currentLink) {
        currentLink.classList.add("active");
      }
    }
  });
});

// Scroll to top button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
