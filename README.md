Sudoku solver
=============

Solve sudoku problems using Node.js and output the solution in the terminal

```js
var SudokuSolver = require("../index");

SudokuSolver.solve({
    problem: '. . 3 . 2 . 6 . .'
           + '9 . . 3 . 5 . . 1'
           + '. . 1 8 . 6 4 . .'
           + '. . 8 1 . 2 9 . .'
           + '7 . . . . . . . 8'
           + '. . 6 7 . 8 2 . .'
           + '. . 2 6 . 9 5 . .'
           + '8 . . 2 . 3 . . 9'
           + '. . 5 . 1 . 3 . .'
  , style: true
  , initial: true
});
```

Result will be:

```sh
Problem:
------+-------+------
0 0 3 | 0 2 0 | 6 0 0
9 0 0 | 3 0 5 | 0 0 1
0 0 1 | 8 0 6 | 4 0 0
------+-------+------
0 0 8 | 1 0 2 | 9 0 0
7 0 0 | 0 0 0 | 0 0 8
0 0 6 | 7 0 8 | 2 0 0
------+-------+------
0 0 2 | 6 0 9 | 5 0 0
8 0 0 | 2 0 3 | 0 0 9
0 0 5 | 0 1 0 | 3 0 0
------+-------+------

Solution:
------+-------+------
4 8 3 | 9 2 1 | 6 5 7
9 6 7 | 3 4 5 | 8 2 1
2 5 1 | 8 7 6 | 4 9 3
------+-------+------
5 4 8 | 1 3 2 | 9 7 6
7 2 9 | 5 6 4 | 1 3 8
1 3 6 | 7 9 8 | 2 4 5
------+-------+------
3 7 2 | 6 8 9 | 5 1 4
8 1 4 | 2 5 3 | 7 6 9
6 9 5 | 4 1 7 | 3 8 2
------+-------+------
```

Problem can be a one line string `003020600900305001001806400008102900700000008006708200002609500800203009005010300`
or a formatted string (like in example), with `0` or `.` for missing numbers.

## Methods

### `start (options)`
  - `@options` - Object - containing the following:
    - `problem` - String - representing the sudoku problem.
    - `initial` - Boolean - print the problem (default: false)
    - `style` - Boolean - format the output (default: false)

## Specs

Test the global functions with:

```sh
$ jasmine-node spec
```

## Example

There is an example in test foloder `1.js`. Run it with `node test/1.js`

## Changelog

  - `0.0.2`: Add option to format the output: ([#2] (https://github.com/radubogdan/sudoku-solver/issues/2))
  - `0.0.1`: Format test file and validate string: ([#1] (https://github.com/radubogdan/sudoku-solver/pull/1))
  - `0.0.0`: First working version

## License
See the LICENSE file.
