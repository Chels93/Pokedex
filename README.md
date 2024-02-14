A Pokedex containing the first 150 Pokemon, featuring details and images.
Pokemon index is sourced using PokeAPI (https://pokeapi.co/api/v2/pokemon/?limit=150).
Pokedex runs in browser using index.html as root folder. 
Pokedex uses the following: jquery 3.3.1 min, popper.js.1.14.7, bootstrap 4.3.1, promise-polyfill, fetch-polyfill.

The ESLint rules used are: 
{
    "env": {
        "es6": true,
        "browser": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "rules": {
        "quotes": ["error", "single"]
    }
}
