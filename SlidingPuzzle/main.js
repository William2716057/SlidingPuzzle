
//defining number of tiles
let size = 4
//calculate the number of tiles
let numberOfTiles = size ** 2;
//for highlighting tiles when clicked or tapped
let highlighted = numberOfTiles;
//for shuffling the tiles
let shuffled = false;
//reference container for puzzle buttons
let buttonContainer = document.getElementById('tiles');

//initialise new game
newGame();

//loading and shuffling function

function newGame() {
    //load the tiles using defined size
    loadTiles(size)
    //shuffle the tiles after a delay
    setTimeout(() => {
        shuffle();
    }, 500);
}


