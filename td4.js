function afficheVille() {
  // 1. Récupération de la valeur courante du select, 
  // soit l'id de l'option sélectionnée 
  let nomVilleChoisie = document.getElementById("choixVille").value;

  // 2. Récupération de la liste de toutes les div correspondant 
  // à une div de météo 
  let villes = document.getElementsByClassName("city");

  // 3. Parcours de la liste des div météo 
  // On cache celles qui ne sont pas sélectionnées.
 
  for (i=0; i<villes.length; i++) {
    if (villes[i].id == nomVilleChoisie) {
      // garder l'element visible -> ELEMENT.style.display= "none";
	  villes[i].style.display= "";
    } else {
      // cacher l'element -> ELEMENT.style.display= "";
	  villes[i].style.display= "none";
    }
  }