// Highlight the sidebar link for the section currently in view.
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("main section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", isCurrent);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));

// Flip a project card when it is clicked
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    card.classList.toggle("flipped");
  });

  card.addEventListener("keydown", (event) => {
    if (event.target !== card) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.classList.toggle("flipped");
    }
  });
});