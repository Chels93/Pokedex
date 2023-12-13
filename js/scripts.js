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

for (let i = 0; i < pokemonList.length; i++) {
    document.write("<p>" + pokemonList{i}.name + "(height: + pokemonList[i].height + ")</p>");
