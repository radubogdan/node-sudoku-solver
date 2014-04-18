var sudokuSolver = require('../index')

describe("Global function", function () {
    //
    // +----------+------------+-----------+
    // |0  1   2  |  3  4   5  | 6   7   8 |
    // |9  10  11 | 12  13  14 | 15  16  17|
    // |18 19  20 | 21  22  23 | 24  25  26|
    // +----------+------------+-----------+
    // |27 28  29 | 30  31  32 | 33  34  35|
    // |36 37  38 | 39  40  41 | 42  43  44|
    // |45 46  47 | 48  49  50 | 51  52  53|
    // +----------+------------+-----------+
    // |54 55  56 | 57  58  59 | 60  61  62|
    // |63 64  65 | 66  67  68 | 69  70  71|
    // |72 73  74 | 75  76  77 | 78  79  80|
    // +----------+------------+-----------+
    //
    describe("__same row__", function() {
        it("numbers should be on the same row", function () {
            var test = sameRow(0,0);
            expect(test).toBe(true);
        });

        it("numbers should be on the same row", function () {
            var test = sameRow(1,2);
            expect(test).toBe(true);
        });

        it("numbers should not be on the same row", function () {
            var test = sameRow(1,9);
            expect(test).toBe(false);
        });

        it("numbers should not be on the same row", function () {
            var test = sameRow(8,9);
            expect(test).toBe(false);
        });
    });

    describe("__same column__", function() {
        it("numbers should be on the same column", function () {
            var test = sameColumn(0,9);
            expect(test).toBe(true);
        });

        it("numbers should be on the same column", function () {
            var test = sameColumn(8,17);
            expect(test).toBe(true);
        });

        it("numbers should not be on the same column", function () {
            var test = sameColumn(0,8);
            expect(test).toBe(false);
        });

        it("numbers should not be on the same column", function () {
            var test = sameColumn(0,-1);
            expect(test).toBe(false);
        });
    });

    describe("__same block__", function() {
        it("numbers should be in the same block", function () {
            var test = sameBlock(0,9);
            expect(test).toBe(true);
        });

        it("numbers should be in the same block", function () {
            var test = sameBlock(0,20);
            expect(test).toBe(true);
        });

        it("numbers should not be in the same block", function () {
            var test = sameBlock(0,21);
            expect(test).toBe(false);
        });

        it("numbers should not be in the same block", function () {
            var test = sameBlock(40,67);
            expect(test).toBe(false);
        });
    });
});
