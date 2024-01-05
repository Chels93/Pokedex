// Pokemon height is in meters

// let pokemonList = [];

// pokemonList.push({
//     name: "Eevee",
//     height: 0.3,
//     type: ["normal"]
// });

// pokemonList.push({
//     name: "Blastoise",
//     height: 1.6, 
//     type: ["water"]
// });

// pokemonList.push({
//     name: "Charizard",
//     height: 1.7, 
//     type: ["fire", "flying"]
// });

//     for (let i = 0; i < pokemonList.length; i++) {
//         document.write("<p class='pokemon-container'>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")</p>")

//        If Pokemon is above 1 meter, add a special label 
//              if (pokemonList[i].height >1.0) 
//              document.write("<div class='big-label'> - Wow, that's big!</div>");
// }

// forEach() function to iterate through pokemonList
pokemonList.forEach(function (pokemon) {
    console.log(pokemonList.name + 'is' + pokemonList.height + 'meters tall.');
}

    // pokemonList array wrapped in IIFE
    (function () {
        let pokemonList = [];

        pokemonList.push({
            name: "Eevee",
            height: 0.3,
            type: ["normal"]
        });

        pokemonList.push({
            name: "Blastoise",
            height: 1.6,
            type: ["water"]
        });

        pokemonList.push({
            name: "Charizard",
            height: 1.7,
            type: ["fire", "flying"]
        });
        console.log(pokemon);
    }

// new variable to hold what IIFE will return 
let pokemonRepository = (function () {
        let pokemonList = [];

        return {
            add: function (pokemon) {
                pokemonList.push(pokemon);
            },
            getAll: function () {
                return pokemonList;
            }
        };

        // updated loop to reflect changes    
        pokemonRepository.getAll().forEach(function (pokemon) {
            pokemonRepository.addListItem(pokemon);
        });

    })();

    
