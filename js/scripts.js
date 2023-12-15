//Pokemon height is in meters

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

// Loop through each Pokemon in the list
for (let i = 0; i < pokemonList.length; i++) {
    //Display for Pokemon name, height, and type
    document.write("<p class='pokemon-container'>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")</p>")
    
    // If Pokemon is above 1 meter, add a special label 
    if (pokemonList[i].height >1.0) 
        document.write("<div class='big-label'> - Wow, that's big!</div>");
}
