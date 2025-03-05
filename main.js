const Gameboard = (function(){
    // row 1 / columns - 1 to 3
    const gameboard = [  ['', '', ''],
                         ['', '', ''], 
                         ['', '', '']];

    const changeTile = (player, row, column) => {
        if (gameboard[row] == undefined || gameboard[row][column] == undefined){
            console.warn('Out of bounds');
            return false;
        } else if (gameboard[row][column] === ''){
            gameboard[row][column] = player.symbol;
            console.dir(gameboard);
            return true;
        } else {
            console.warn('Invalid move');
            return false;
        };
    };

    return {
        changeTile,

    }
}());

function Player(name, symbol){
    return {
        name,
        symbol
    };
};

const Game = (function(){
    const player1 = Player('Roland', 'X');
    const player2 = Player('Olga', 'O');
    let victory = false;
    let roundsPlayed = 0;

    function playGame(){
        const player1 = Player(prompt('Player1 name: '), 'X');
        const player2 = Player(prompt('Player2 name: '), 'O');

        let activePlayer = player1;
        while(!victory && roundsPlayed < 9){
            roundsPlayed++;
            playRound(activePlayer);
            if (activePlayer === player1){
                activePlayer = player2;
            } else {
                activePlayer = player1;
            };
        };
    };

    function playRound(activePlayer){
        let valid = false;
        // Check for the changeTile returned value and then call playRound again
        while(!valid){
            const [row, column] = prompt(`Player: ${activePlayer.name}, make a move: `).split('');
            valid = Gameboard.changeTile(activePlayer, row, column);
        }
    };

    return {
        playGame,

    }
}());