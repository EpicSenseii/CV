// // Fonction pour ajouter ou supprimer la classe active
// function btnActive() {
//   var links = document.getElementsByClassName("whiteHover");

//   for (var i = 0; i < links.length; i++) {
//     links[i].classList.remove("active");
//   }
//   event.target.classList.add("active");
// }

// Sélectionner le conteneur de défilement
const container = document.querySelector('.container');

// Sélectionner toutes les sections avec un attribut "id"
const sections = document.querySelectorAll("div[id]");

// Sélectionner tous les liens de navigation
const navLinks = document.querySelectorAll(".nav a");

// Ajouter un écouteur d'événement pour l'événement de défilement sur le conteneur
container.addEventListener("scroll", changeTextColor);

function changeTextColor() {
  // Obtenir la position de défilement actuelle par rapport au conteneur
  const scrollY = container.scrollTop;
  // Parcourir les sections pour obtenir la hauteur, la position et l'ID de chaque section
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - container.offsetTop - (container.offsetHeight * 0);
    const sectionBottom = sectionTop + sectionHeight;
    const sectionId = section.getAttribute("id");

    // Vérifier si la position de défilement est dans l'espace où la section actuelle est affichée
    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      // Ajouter la classe "active" aux liens de navigation correspondants
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}
