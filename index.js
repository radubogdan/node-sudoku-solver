// Dependencies
var sets = require('simplesets')
  , vsprintf = require('sprintf').vsprintf;

var sudokuSolver = {};

// Some public functions that will help the solver
// Run specs for this functions using jasmine
//
// Check if i is on the same row with j
global.sameRow = function(i, j) {
    return (Math.floor(i/9) == Math.floor(j/9));
}

// Check if i is on the same column with j
global.sameColumn = function(i, j) {
    return ((i - j) % 9 == 0);
}

// Check if i is in the same block with j
global.sameBlock = function(i, j) {
    return (Math.floor(i/27) == Math.floor(j/27) && Math.floor(i%9/3) == Math.floor(j%9/3));
}

// Output the problem in the terminal
global.output = function(problem, style) {
    // Check if style is false or true
    style == false ? console.log(problem) : stylishOutput(problem);

    // This is called when style == true
    function stylishOutput(problem) {

        // Make a new array of strings where each string have 9 elements
        var new_data = problem.match(/(.........)/g);

        // Print one formated line
        function printLine() {
            console.log(vsprintf('%s %s %s | %s %s %s | %s %s %s', new_data.shift().match(/(.)/g)));
        }

        // Print delimter
        function printDelimiter() {
            console.log('------+-------+------');
        }

        // Build the output
        for(var i = 0; i < 13; i++) {
            i % 4 == 0 ? printDelimiter() : printLine();
        }
    }
}

sudokuSolver.solve = function (options) {

    // Expect at least one problem
    var problem = options.problem;

    // Take the style from options
    var style = options.style || false;

    if (problem && problem.constructor == String) {
        // Replace spaces with nothing
        problem = problem.replace (/ /g, "");

        // Replace . with 0
        problem = problem.replace (/\./g, "0");
    }

    // Verify if we get a problem
    if (!problem || problem.constructor !== String) {
        console.log("Problem must be a nonempty string.");
    } else if (problem.length != 81) {
        console.log("A valid sudoku problem should have a length of 81");
    } else {
        solver(problem);
    }

    // This is called to solve our game
    function solver(problem) {
        // Save the position of first 0 in our string
        var i = problem.indexOf("0");

        // If i is negative that means we're done
        (i == -1) ? output(problem, style) : 'err'

        // Create a set to save excluded elements
        var excludedElements = new sets.Set();

        // Go throgh the problem
        for (j = 0; j < 81; j++) {
            if (sameRow(i, j) || sameColumn(i, j) || sameBlock(i, j)) {

                // Save in the set the element that is not good
                excludedElements.add(problem[j]);
            }
        }

        // Go and replace the 0 with first available number in asc
        for(var elem = 1; elem <= 9; elem++) {

            // The elem shouldn't be in the excludedElements set
            if (!excludedElements.has(elem.toString())) {

                // Replace the 0 with elem and
                // Call solver with the updated problem
                solver(problem.slice(0, i) + elem + problem.slice(i+1, problem.length));
            }
        }
    }
}

module.exports = sudokuSolver;
