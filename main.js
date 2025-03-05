const Gameboard = (function(){
    // row 1 / columns - 1 to 3
    const gameboard = [  ['', '', ''],
                         ['', '', ''], 
                         ['', '', '']];

    const changeTile = (player, row, column) => {
        if (gameboard[row][column] === ''){
            gameboard[row][column] = player.symbol;
            console.dir(gameboard);
        } else {
            console.warn('Invalid move');
            return 'Invalid move';
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
    function playGame(){
        playRound(player1);
    };

    function playRound(activePlayer){
        const [row, column] = prompt(`Player: ${activePlayer.name}, make a move: `).split('');
        Gameboard.changeTile(activePlayer, row, column);
    };

    return {
        playGame,

    }
}());