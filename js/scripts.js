//pokemon height is in meters                
var pokemonRepository = (function () {

  let pokemonList = [
    {
      name: "Eevee",
      height: 0.3,
      type: ["normal"]
    },
    {
      name: "Blastoise",
      height: 1.6,
      type: ["water"]
    },
    {
      name: "Charizard",
      height: 1.7,
      type: ["fire", "flying"]
    }
  ]

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails
  }

})()

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});



  

   

    
