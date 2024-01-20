
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

function shuffle() {
    let minShuffles = 100;
    let totalShuffles = minShuffles + Math.floor(Math.random() * (200 - 100) + 100);

    for (let i = minShuffles; i <= totalShuffles; i++) {
        setTimeout(function timer() {
            let x = Math.floor(Math.random() * 4);
            //initialise the direction variable to 0
            let direction = 0;
            //determine the direction based on random numbers
            if (x == 0) {
                direction = highlighted + 1;
            } else if (x == 1) {
                direction = highlighted - 1;
            } else if (x == 2) {
                direction = highlighted + size;
            } else if (x == 3) {
                direction = highlighted - size;
            }
            //perform the swap based on the directions determined above
            swap(direction);
            //shuffled will equal true when it matches total shuffles
            if (i >= totalShuffles - 1) {
                shuffled = true;
            }
        }, i * 10);
    }
}

// Swap tiles

function swap(clicked) {
    if (clicked < 1 || clicked > (numberOfTiles)) {
        return;
    }


    // Check if we are trying to swap right
    if (clicked == highlighted + 1) {
        if (clicked % size != 1) {
            setSelected(clicked);
        }
        //check if swapping left
    } else if (clicked == highlighted - 1) {
        if (clicked % size != 0) {
            setSelected(clicked);
        }
        //use size when swapping up or down
    } else if (clicked == highlighted + size) {
        setSelected(clicked);
        // Check if we are trying to swap down 
    } else if (clicked == highlighted - size) {
        setSelected(clicked);
    }
    //check for win condition 
    if (shuffled) {
        if (checkHasWon()) {
            alert("Winner!")
        }
    }
}
//check for win function

function checkHasWon() {
    // loop though each tile
    for (let i = 1; i <= numberOfTiles; i++) {
        //get current tile element by ID
        currentTile = document.getElementById(`btn${i}`);
        //get attribute of current tile
        currentTileIndex = currentTile.getAttribute('index');
        //get displayed number on the current tile 
        currentTileValue = currentTile.innerHTML;
        //game will not be won if position and value do not match 
        if (parseInt(currentTileIndex) != parseInt(currentTileValue)) {
            return false;
        }
    }
    //when all tile positions match displayed value return as true
    return true;
}

