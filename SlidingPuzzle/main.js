
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

//Buttons

function loadTiles(n) {
    //loop through every tile of the puzzle
    for (let i = 1; i <= numberOfTiles; i++) {
        //create new button elements
        var newTile = document.createElement('button');
        //assign an ID based on the tile number
        newTile.id = `btn${i}`;
        //set attribute indexes to store each tiles position
        newTile.setAttribute('index', i);
        //set inner HTML of the button to the tile number
        newTile.innerHTML = i;
        //add btn class to the button for styling
        newTile.classList.add('btn');
        //click event listener for tile swapping
        newTile.addEventListener('click', function () {
            swap(parseInt(this.getAttribute('index')));
        });
    //append new tile button to container
    buttonContainer.append(newTile);
    }
    selectedTileId = 'btn' + highlighted;
    selectedTile = document.getElementById(selectedTileId);
    selectedTile.classList.add("selected");
}
//shuffle function 
