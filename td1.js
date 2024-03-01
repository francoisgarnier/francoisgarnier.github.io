function afficheVille() {
  // 1. Récupération de la valeur courante du select, 
  // soit l'id de l'option sélectionnée 
  let nomVilleChoisie = document.getElementById("choixVille").value;

  // 2. Récupération de la liste de toutes les div correspondant 
  // à une div de météo 
  let villes = document.getElementsByClassName("ville");

  // 3. Parcours de la liste des div météo 
  // On cache celles qui ne sont pas sélectionnées.
  for (i=0; i<villes.length; i++) 
  {
    if (villes[i].id == nomVilleChoisie) 
	{
      // garder l'element -> ELEMENT.style.display= "";
	  villes[i].style.display= "";
	  afficheMeteo(nomVilleChoisie);
    } else 
	{
	  // cacher l'element visible -> ELEMENT.style.display= "none";
	  villes[i].style.display= "none";
    }
  }
}

function afficheMeteo(ville) {
    const apiKey = 'eccf8200898239c01b81626293da9f1d';
	//const countryCode = "";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&lang=fr&appid=${apiKey}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(donnees => 
	{
        let nomVille = donnees.name;
        let temperature = Math.round(donnees.main.temp);
        let description = donnees.weather[0].description;
        let icone = donnees.weather[0].icon;
        let iconeUrl = `http://openweathermap.org/img/wn/${icone}.png`;

        let meteoHtml = `
            <div class="city">
                <h2>${nomVille}</h2>
                <p>${temperature}°C, ${description}</p>
                <img src="${iconeUrl}" alt="Icône météo">
            </div>
        `;

        document.getElementById(ville).innerHTML = meteoHtml;
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données météorologiques:', error);
    });
}

