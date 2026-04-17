function validateMove(move, board) {
// This splits the user input into an array of 2 variables. We can acces them with moveParts[0] and moveParts[1]
    const moveParts = move.split(","); 
// We check if this array we created has 2 variables. If not, we return false.

if (moveParts.length !== 2) {
    console.log("Try again...");
    return false;
}
// We create two variables => 1 for the row and one for the column.
// We asign moveparts[0] to row and moveparts[1] to column.
const row = Number(moveParts[0]);
const column = Number(moveParts[1]);
// We need to make sure that both variables ar numbers with isNaN, this function does this, no need to add ! to the front of it.
// the symbols "||" act as an OR function. So if one of these is "NotaNumber" we return false.

if (isNaN(row) || isNaN(column)) {
    console.log("Try again...");
    return false;
}
// Next up we need to check if the row and column input are in the range of the gameboard.
// Again we use || as an OR function. So if one of these conditions is true, it's out of bound and we return false.

if (row < 1 || row > 3 || column < 1 || column > 3) {
    console.log("Try again...");
    return false;
} 
// The next check makes sure the move is only allowed if the space is free.
// Here we use !== so if board row and board column is NOT "_" return false.
// (board[row - 1][column - 1] is referring to the "let board"

if (board[row - 1][column -1] !== "_") {
    console.log("Try again...");
    return false;
}
// Return the parsed values if valid
    return { row, column };
}


export function makeMove(board, move, player) {
const result = validateMove(move,  board);

    // Call the validateMove function. If the move is not valid, return false.    
if (!result) {
        return false;
    }
    const {row , column} = result;
    board[row - 1][column - 1] = player;
    return true;
}



/*
    Given a move and a board (an array of arrays), return true if the move is valid.
        A move is represented by 2 numbers separated by a comma.
        The first number is the row (1, 2 or 3) and the second number is the column (1, 2 or 3).
            Some valid example moves are 1,3 and 2,2.
            Some invalid examples are 0,1 and 2-1.
    Also, a move can only be made in a free space ('_') on the board.
    If the move is not valid:
        - you can output 'Try again...'
        - and then return false
    Testing your function by calling it with some values. An example board is:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/

/*
    Given 3 parameters:
        - a board (an array of arrays)
        - a move (2 numbers separated by a comma)
        - a player ('X' or 'O'):
    Check that the move is valid using the validateMove function.
        If the move is not valid, the function should just return false.
        If the move is valid, the function should:
            - Update the board with the player's value ('X' or 'O') in the correct position
            - Return true
*/
