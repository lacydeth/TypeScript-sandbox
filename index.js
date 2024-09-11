"use strict";
const apiUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";
fetch(apiUrl)
    .then(res => res.json())
    .then((data) => {
    console.log(`${data.id}. Magassága: ${data.height}`);
    data.abilities.forEach(item => console.log(item.ability.name));
    data.stats.forEach(item => console.log(`${item.stat.name}: ${item.base_stat}`));
});
