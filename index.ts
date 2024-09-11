const apiUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";

type Ability = {
    name: string,
    url: string
}

type AbilitiesEl = {
    ability: Ability,
    is_hidden: boolean,
    slot: number
}

type Stat = {
    name: string,
    url: string
}

type StatsEl = {
    base_stat: number,
    effort: number,
    stat: Stat
}

type Pokemon = {
    id: number,
    abilities: AbilitiesEl[], 
    stats: StatsEl[],
    base_experience: number,
    height: number,
    location_area_encounters: string, 
    is_default: boolean
}

fetch(apiUrl)
    .then(res => res.json())
    .then((data: Pokemon) => {
        console.log(`${data.id}. Magassága: ${data.height}`);

        data.abilities.forEach(item => console.log(item.ability.name));
        data.stats.forEach(item => console.log(`${item.stat.name}: ${item.base_stat}`));
    });
