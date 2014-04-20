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
});
```

Problem can be a one line string `003020600900305001001806400008102900700000008006708200002609500800203009005010300`
 or a formatted string (like in example), with `0` or `.` for missing numbers.

## Methods

### `start (options)`
  - `@options` is an object containing the following:
    - `problem`: a String representing the sudoku problem.

## Specs

Test the global functions with:

```sh
$ jasmine-node spec
```

## Example

There is an example in test foloder `1.js`. Run it with `node test/1.js`

## Changelog

  - `0.0.1`: Format test file and validate string: ([#1] (https://github.com/radubogdan/sudoku-solver/pull/1))
  - `0.0.0`: First working version

## License
See the LICENSE file.
