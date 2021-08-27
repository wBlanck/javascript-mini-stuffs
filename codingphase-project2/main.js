
// this is the database
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

// state
let gameState = {
  userPokemon: '',
  rivalPokemon: ''
}
// elements
let pokemonsEl = document.querySelector('.select-screen').querySelectorAll('.character');
let battleScreenEl = document.getElementById('battle-screen')
let attackBtnsEl = document.querySelectorAll('.attack');


// initial loop
let i = 0;
while(i < pokemonsEl.length){
  //add function to all characters on screen select

  pokemonsEl[i].onclick = function () {
    // current selected pokemon name
    let pokemonName = this.dataset.pokemon;
    // elements for the name and images
    let player1Img = document.querySelector('.player1').getElementsByTagName('img');
    let player1Name = document.querySelector('.player1 .stats .name');
    let player2Img = document.querySelector('.player2').getElementsByTagName('img');
    let player2Name = document.querySelector('.player2 .stats .name');

    // save the current pokemon
    gameState.userPokemon = pokemonName;
  
    // cpu pics a pokemon
    cpuPick();
    // change screen to battle scene
    battleScreenEl.classList.toggle('active')

    // select data from current user pokemon
    gameState.currentPokemon = pokemonDB.filter(function(pokemon){
      return pokemon.name === gameState.userPokemon;
    })
    player1Img[0].src = gameState.currentPokemon[0].img;
    player1Name.innerText = gameState.userPokemon;
    // select data from current cpu pokemon
    gameState.currentRivalPokemon = pokemonDB.filter(function(pokemon){
      return pokemon.name === gameState.rivalPokemon;
    })
    player2Img[0].src = gameState.currentRivalPokemon[0].img;
    player2Name.innerText = gameState.rivalPokemon;
    
    
    gameState.currentPokemon[0].health = calcInitHP(gameState.currentPokemon);

    console.log(gameState);


    // cpu health goes down

    // cpu attack

    // user health goes down

    

    // rock > scissors

    // paper > rock

    // scissors > paper
  
    // depending on pokemon type and defense is how hard the attack is going to be and how much health it will take out

    // then who ever gets to health <= 0 loses

  }
  
  i++;
}

// user choose attack
let a = 0;
while(a < attackBtnsEl.length) {
  let player1HP = document.querySelector('.player1 .inside');
  let player2HP = document.querySelector('.player2 .inside');

  attackBtnsEl[a].onclick = function() {
    let attackName = this.dataset.attack;
    gameState.currentUserAttack = attackName;
    
    play(attackName, gameState.cpuAttack);
  }

  a++;
}

let calcInitHP = function(user) {
  
  return ((0.20 * Math.sqrt(user[0].level)) * user[0].defense) * user[0].hp;
}

let play = function(userAttack, cpuAttack) {
  switch(userAttack){
    case 'rock':
      if(cpuAttack == 'paper'){
        console.log("paper killed rock")
      }
      if(cpuAttack == 'scissors'){
        console.log("rock killed scissors")
      }
      if(cpuAttack == 'rock'){
        console.log("draw")
      }

      /* console.log(userAttack); */
      break;
    case 'paper':
      if(cpuAttack == 'rock'){
        console.log("paper killed rock")
      }
      if(cpuAttack == 'scissors'){
        console.log("scissors killed paper")
      }
      if(cpuAttack == 'paper'){
        console.log("draw")
      }
      break;
    case 'scissors':
      if(cpuAttack == 'paper'){
        console.log("scissors killed paper")
      }
      if(cpuAttack == 'rock'){
        console.log("rock killed scissors")
      }
      if(cpuAttack == 'scissors'){
        console.log("draw")
      }
      break;
  }
}

let randomNum = function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let cpuPick = function cpuPick() {
  gameState.rivalPokemon = pokemonsEl[randomNum(0,3)].dataset.pokemon;
  gameState.cpuAttack = attackBtnsEl[randomNum(0,3)].dataset.attack;
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