"use strict";
exports.__esModule = true;
exports.transpose = exports.lowerTriangularMatrix = exports.upperTriangularMatrix = exports.makeIdentityMatrix = exports.makeSquareZeroMatrix = exports.setDiagonalMatrix = exports.getMainDiagonal = exports.makeSquareMatrix = void 0;
function makeSquareMatrix() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    var matrix = new Array(data);
    // matrix = temp[Symbol.iterator]();
    return matrix[0];
}
exports.makeSquareMatrix = makeSquareMatrix;
function getMainDiagonal(matrix) {
    var mainDiagonal = [];
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (i === j) {
                mainDiagonal.push(matrix[i][j]);
            }
        }
    }
    return mainDiagonal;
}
exports.getMainDiagonal = getMainDiagonal;
function setDiagonalMatrix(matrix) {
    var diagonalMatrix = matrix;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (i !== j) {
                diagonalMatrix[i][j] = 0;
            }
        }
    }
    return diagonalMatrix;
}
exports.setDiagonalMatrix = setDiagonalMatrix;
function makeSquareZeroMatrix(side) {
    var zeroMatrix = new Array();
    for (var i = 0; i < side; i++) {
        zeroMatrix[i] = new Array();
        for (var j = 0; j < side; j++) {
            zeroMatrix[i][j] = 0;
        }
    }
    return zeroMatrix;
}
exports.makeSquareZeroMatrix = makeSquareZeroMatrix;
function makeIdentityMatrix(side) {
    var zeroMatrix = new Array();
    for (var i = 0; i < side; i++) {
        zeroMatrix[i] = new Array();
        for (var j = 0; j < side; j++) {
            if (i === j) {
                zeroMatrix[i][j] = 1;
            }
            else {
                zeroMatrix[i][j] = 0;
            }
        }
    }
    return zeroMatrix;
}
exports.makeIdentityMatrix = makeIdentityMatrix;
function upperTriangularMatrix(matrix) {
    var upperTriangularMatrix = matrix;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (i > j) {
                upperTriangularMatrix[i][j] = 0;
            }
        }
    }
    return upperTriangularMatrix;
}
exports.upperTriangularMatrix = upperTriangularMatrix;
function lowerTriangularMatrix(matrix) {
    var lowerTriangularMatrix = matrix;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (i < j) {
                lowerTriangularMatrix[i][j] = 0;
            }
        }
    }
    return lowerTriangularMatrix;
}
exports.lowerTriangularMatrix = lowerTriangularMatrix;
function transpose(matrix) {
    var transpose = new Array();
    for (var i = 0; i < matrix.length; i++) {
        transpose[i] = new Array();
        for (var j = 0; j < matrix[i].length; j++) {
            transpose[i][j] = matrix[j][i];
        }
    }
    return transpose;
}
exports.transpose = transpose;
var matrix = makeSquareMatrix([1, 2, -45], [-2, 0, -4], [45, 4, 0]);
console.log(transpose(matrix));
