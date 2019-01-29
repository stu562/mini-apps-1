console.log('hey app is working')
//onclick place x  or an O 
// element.attachEvent('onclick', 'i made it happen');
// document.getElementById('r1').onclick = forgotpass;

// var game = {
//     user: '',
//     computer: '',
//     currentPlayer: '',
//     moves: 1,
//   };

const cells = document.querySelectorAll('.cells')

//when place a piece , increment moves, max move is 9 


//Player 1 or Player 2 
//when cliked event
    //place an X in square
    // switch to player 2 
    //place an O in the selected square 
//detect a win or tie 
    //need to look through matrix 
    // if all strings, in the row is the same then alert(win)!
    //rows, verticals and diagonal

    //create a matrix 
var board = 
            [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ];
var possibleWins =   [ 
                        [0, 1, 2], [3, 4, 5], [6, 7, 8],
                        [0, 3, 6], [1, 4, 7], [2, 5, 8],
                        [0, 4, 8], [6, 4, 2]
                    ];


//check the board after every turn
// if array matches any of the possibleWins the n
// return the winner 
var checkForWinner = function(board){
    //outer
    for (var i = 0; i < board.length; i++){
        for (var j = i; j < board.length; j++){


        }
    }
}