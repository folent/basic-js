module.exports = function countCats(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {

        for (j = matrix[i].length - 1; j > -1; j--) {

            if (matrix[i][j] === '^^') {
                count++;
            }
        }
    }
    return count;
};