// Fonction pour ajouter ou supprimer la classe active
function btnActive() {
  var links = document.getElementsByClassName("whiteHover");

  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }
  event.target.classList.add("active");
}

