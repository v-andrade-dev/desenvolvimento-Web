const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');
const form = document.querySelector('.form__wrapper');
const inputPokemon = document.querySelector('.input__search');
const btnPrev = document.querySelector('.btn__prev');
const btnNext = document.querySelector('.btn__next');
const btnSound = document.querySelector('.btn__sound');
const pokedexLight = document.querySelector('.pokedex__light');
const pokemonCries = document.querySelector('.pokemon__cries');
let pokemonId = 1;


window.addEventListener('DOMContentLoaded', ()=>{
    renderPokemon(pokemonId);
})


const fetchPokemon = async (pokemon)=>{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(APIResponse.status === 200){    
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon)=>{
    pokemonName.innerHTML='Loading...'
    const data = await fetchPokemon(pokemon);

    if(data){
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        inputPokemon.value ='';
        pokemonId = data.id;
        pokemonCries.innerHTML=`<audio autoplay><source src="./assets/audio/(${pokemonId}).wav" type="audio/wav"></source></audio>`;
        
    }else{
        pokemonName.innerHTML = 'Not found';
        pokemonNumber.innerHTML = '';
        pokemonImage.style.display = 'none';
        pokemonId = 0;
    }
}

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    renderPokemon(inputPokemon.value.toLowerCase());
});

btnPrev.addEventListener('click',()=>{
    if(pokemonId>1){
        pokemonId--;
        renderPokemon(pokemonId);
    }
});

btnNext.addEventListener('click',()=>{
    pokemonId++;
    renderPokemon(pokemonId);
});

btnSound.addEventListener('click',()=>{
    let sound = document.querySelector('audio');
    sound.play();
});
