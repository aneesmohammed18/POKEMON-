
let pokinput = document.getElementById("pokemonname");
pokinput.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        pokemon();
    }
})


async function pokemon() {
    let pokinpuvalue = pokinput.value.toLowerCase();
    let pokename = document.getElementById("name");
    let pokemonimg = document.getElementById("pokemonimage");
    if (pokinput.value === "zenn") {
        alert("Whoa, a legendary Pokémon! Let's stick to the basics.");
        pokinput.value = "";
        return;
    }
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokinpuvalue}`);
        const data = await response.json();
        const name = data.name;
        pokename.innerHTML = name;
        let sprite = data.sprites.other['official-artwork'].front_default;
        pokemonimg.src = sprite;
    } catch (error) {
        alert("ENTER A VALID POKEMON / CHECK FOR A TYPO");
        pokename.innerHTML = "Enter a valid Pokémon name";
        pokemonimg.src = "pokeball.png";
    }
    pokinput.value = "";
}