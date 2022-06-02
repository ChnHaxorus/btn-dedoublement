const bouton = document.querySelector(".bouton");

bouton.addEventListener("mouseenter", () => {
  bouton.classList.add("boutonFinal");
});

bouton.addEventListener("mouseleave", () => {
    bouton.classList.remove("boutonFinal");
  });
