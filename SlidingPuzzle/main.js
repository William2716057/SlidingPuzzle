
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
    for (let i = 1; i <= numberOfTiles; i++) {
        var newTile = document.createElement('button');
        newTile.id = `btn${i}`;
        newTile.setAttribute('index', i);
        newTile.innerHTML = i;
        newTile.classList.add('btn');
        newTile.addEventListener('click', function () {
            swap(parseInt(this.getAttribute('index')));
    });
    buttonContainer.append(newTile);
    }
    selectedTileId = 'btn' + highlighted;
    selectedTile = document.getElementById(selectedTileId);
    selectedTile.classList.add("selected");
}

