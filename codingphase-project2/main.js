var pokemonDB = [
  {
    name: 'charmander',
    type: 'fire',
    hp: 39,
    attack: 52,
    defense: 43,
    level: 1,
    img: "http://www.smogon.com/dex/media/sprites/xy/charmander.gif"
  },
  {
    name: 'bulbasaur',
    type: 'grass',
    hp: 45,
    attack: 49,
    defense: 49,
    level: 1,
    img: "http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif"
  },
  {
    name: 'squirtle',
    type: 'water',
    hp: 44,
    attack: 48,
    defense: 65,
    level: 1,
    img: "http://www.smogon.com/dex/media/sprites/xy/squirtle.gif"
  }
  
]


let gameState = {
  userPokemon: '',
  rivalPokemon: ''
}

let pokemonsEl = document.querySelector('.select-screen').querySelectorAll('.character');

let battleScreenEl = document.getElementById('battle-screen')


i = 0;

while(i < pokemonsEl.length){
  pokemonsEl[i].onclick = function () {
    let pokemonName = this.dataset.pokemon;
    let player1Img = document.querySelector('.player1').getElementsByTagName('img');
    let player1Name = document.querySelector('.player1 .stats .name');
    let player2Img = document.querySelector('.player2').getElementsByTagName('img');
    let player2Name = document.querySelector('.player2 .stats .name');

    gameState.userPokemon = pokemonName;
  
    cpuPick();
    battleScreenEl.classList.toggle('active')

    let currentPokemon = pokemonDB.filter(function(pokemon){
      return pokemon.name === gameState.userPokemon;
    })

    let currentRivalPokemon = pokemonDB.filter(function(pokemon){
      return pokemon.name === gameState.rivalPokemon;
    })
    
    
    player1Img[0].src = currentPokemon[0].img;
    player1Name.innerText = gameState.userPokemon;
    player2Img[0].src = currentRivalPokemon[0].img;
    player2Name.innerText = gameState.rivalPokemon;

  }
  i++;
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function cpuPick() {
  gameState.rivalPokemon = pokemonsEl[randomNum(0,3)].dataset.pokemon;
}






/* // pokemon
// create data for 3 different pokemons, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)


var attack = 20;
var level = 10;
var stack = 1.3;
var defense = 39;

// create a formula for attacks
console.log((attack * level ) * stack / 7)



// create a formula for health
//HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
console.log(((0.20 * Math.sqrt(level)) * defense) * 15)




// let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
// p1 vs p2




// when one user loses all his health declare a winner
 */