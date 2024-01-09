//pokemon height is in meters                
let pokemonRepository = (function () {
    
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

    function getAll () {
      return pokemonList;
    }
    function add (pokemon) {
        pokemonList.push(pokemon);
    }
  
    return {
        getAll: getAll,
        add: add
    }
      
})()

pokemonRepository.getAll().forEach(function (pokemon) {
  document.write(pokemon.name + 'is' + pokemon.height + 'meters tall.');
});
  

   

    
