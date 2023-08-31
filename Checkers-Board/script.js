const gameBoard = document.querySelector('#gameboard');
const playerName = document.querySelector('#player');
const infoDisplay = document.querySelector('#info-display');
const width = 8;
const startPieces = [
    "", whitePiece, "", whitePiece, "", whitePiece, "", whitePiece,
    whitePiece, "", whitePiece, "", whitePiece, "", whitePiece, "",
    "", whitePiece, "", whitePiece, "", whitePiece, "", whitePiece,
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    blackPiece, "", blackPiece, "", blackPiece, "", blackPiece, "",
    "", blackPiece, "", blackPiece, "", blackPiece, "", blackPiece,
    blackPiece, "", blackPiece, "", blackPiece, "", blackPiece, ""
];

function createBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div');
        square.classList.add('square')
        square.innerHTML = startPiece;
        square.firstChild?.setAttribute('draggable', true)
        square.setAttribute('square-id', i)
        const row = Math.floor((63 - i) / 8) + 1;
        if (row % 2 === 0) {
            square.classList.add(i % 2 === 0 ? 'white' : 'black')
        } else {
            square.classList.add(i % 2 === 0 ? 'black' : 'white')
        }
        gameBoard.append(square)
    })
}
createBoard();

const allSquares = document.querySelectorAll('#gameboard .square');

// Mazal wahel f had l'9lawi hhhh bghit id dyalo kola square
// kikhdem ghir ila dragity f square mafihsh piece
allSquares.forEach(square => {
    square.addEventListener('dragstart', dragStart)
})
function dragStart(e) {
    // console.log(e.target.getAttribute('square-id'))
    console.log(e.target.getAttribute('square-id'))
}