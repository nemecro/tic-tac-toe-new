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

}());

const player1 = Player('Roland', 'X');
Gameboard.changeTile(player1, 0, 1);
Gameboard.changeTile(player1, 0, 1);