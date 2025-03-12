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
            return true;
        } else {
            console.warn('Invalid move');
            return false;
        };
    };

    function getGameboard(){
        return gameboard;
    }

    return {
        changeTile,
        getGameboard,

    }
}());

function Player(name, symbol){
    return {
        name,
        symbol
    };
};

const Game = (function(){
    let victory = false;
    let roundsPlayed = 0;

    function checkVictory(activePlayer){
        const currentGameboard = Gameboard.getGameboard();
        console.dir(currentGameboard);
        // check for three consecutives in a row
        for (row of currentGameboard){
            victory = row.filter(column => column === activePlayer.symbol).length === 3;
            if (victory){
                console.log('Three in a row reached');
                break;
            }
        };
        // check for three consecutive in a column
        for(let i = 0; i < 3; i++){
            if (activePlayer.symbol === currentGameboard[0][i] && currentGameboard[0][i] === currentGameboard[1][i] && currentGameboard[0][i] === currentGameboard[2][i]){
                victory = true;
                console.log('Three in a column reached');
                break;
            }
        };
        if (activePlayer.symbol === currentGameboard[0][0] && currentGameboard[0][0] === currentGameboard[1][1] && currentGameboard[1][1] === currentGameboard[2][2]){
            victory = true;
            console.log('Three in a diag reached');
        } else if (activePlayer.symbol === currentGameboard[2][0] && currentGameboard[2][0] === currentGameboard[1][1] && currentGameboard[1][1] === currentGameboard[0][2]){
            victory = true;
            console.log('Three in a diag reached');
        }
    }

    function playGame(){
        const player1 = Player(prompt('Player1 name: '), 'X');
        const player2 = Player(prompt('Player2 name: '), 'O');

        let activePlayer = player1;
        while(!victory && roundsPlayed < 9){
            roundsPlayed++;
            playRound(activePlayer);
            checkVictory(activePlayer);
            if (activePlayer === player1){
                activePlayer = player2;
            } else {
                activePlayer = player1;
            };
        };
    };

    function playRound(activePlayer){
        let valid = false;
        while(!valid){
            const [row, column] = prompt(`Player: ${activePlayer.name}, make a move: `).split('');
            valid = Gameboard.changeTile(activePlayer, row, column);
        }
    };

    return {
        playGame,

    }
}());