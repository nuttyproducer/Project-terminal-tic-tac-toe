// This test file checks the `makeMove` function from `move-maker.js`.
// The tests help us verify that:
// a valid move returns true
// an invalid move returns false
// a player's symbol is placed in the correct spot on the board
// taken spaces or out-of-bounds moves are not allowed

import { makeMove } from '../move-maker.js';

test('makeMove returns true for a valid move', () => {
    const board = [
        ['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_']
    ];

    const result = makeMove(board, '2,3', 'X');

    expect(result).toBe(true);
    expect(board[1][2]).toBe('X');
});

test('makeMove returns false for an out-of-bounds move', () => {
    const board = [
        ['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_']
    ];

    const result = makeMove(board, '4,1', 'X');

    expect(result).toBe(false);
});

test('makeMove returns false for a taken square', () => {
    const board = [
        ['X', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_']
    ];

    const result = makeMove(board, '1,1', 'O');

    expect(result).toBe(false);
    expect(board[0][0]).toBe('X');
});