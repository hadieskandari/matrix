"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var Traists_1 = require("./models/Traists");
var squareMatrix = /** @class */ (function () {
    function squareMatrix() {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        this.dimention = data.length;
        var cols = data.length;
        var rows = 0;
        // checking entry data it must be a square matrix anyway throw an error
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].length; j++) {
                rows = j + 1;
            }
            if (rows !== cols) {
                throw new Error("there is an error in data entry structure [" + data[i] + "] does not match with entry dimention : " + cols + " , this is mainly because YOUR DATA ISN'T SQUARE MATRIX");
                return;
            }
        }
        this.matrix = {
            dimention: this.dimention,
            initial_matrix: JSON.parse(JSON.stringify(data)),
            data: __spreadArrays(data),
            traits: Traists_1.default_traits
        };
    }
    squareMatrix.prototype.makeSquareMatrix = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        var matrix = new Array(data);
        // matrix = temp[Symbol.iterator]();
        return matrix[0];
    };
    squareMatrix.prototype.getMainDiagonal = function (matrix) {
        if (matrix === void 0) { matrix = this.matrix.data; }
        var mainDiagonal = [];
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (i === j) {
                    mainDiagonal.push(matrix[i][j]);
                }
            }
        }
        return mainDiagonal;
    };
    squareMatrix.prototype.setDiagonalMatrix = function (matrix) {
        if (matrix === void 0) { matrix = this.matrix.data; }
        var diagonalMatrix = matrix;
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (i !== j) {
                    diagonalMatrix[i][j] = 0;
                }
            }
        }
        return diagonalMatrix;
    };
    squareMatrix.prototype.makeSquareZeroMatrix = function (dimention) {
        var zeroMatrix = new Array();
        for (var i = 0; i < dimention; i++) {
            zeroMatrix[i] = new Array();
            for (var j = 0; j < dimention; j++) {
                zeroMatrix[i][j] = 0;
            }
        }
        this.matrix.data = zeroMatrix;
        return zeroMatrix;
    };
    squareMatrix.prototype.makeIdentityMatrix = function (dimention) {
        var zeroMatrix = new Array();
        for (var i = 0; i < dimention; i++) {
            zeroMatrix[i] = new Array();
            for (var j = 0; j < dimention; j++) {
                if (i === j) {
                    zeroMatrix[i][j] = 1;
                }
                else {
                    zeroMatrix[i][j] = 0;
                }
            }
        }
        return zeroMatrix;
    };
    squareMatrix.prototype.upperTriangularMatrix = function (matrix) {
        if (matrix === void 0) { matrix = this.matrix.data; }
        var upperTriangularMatrix = matrix;
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (i > j) {
                    upperTriangularMatrix[i][j] = 0;
                }
            }
        }
        return upperTriangularMatrix;
    };
    squareMatrix.prototype.lowerTriangularMatrix = function (matrix) {
        if (matrix === void 0) { matrix = this.matrix.data; }
        var lowerTriangularMatrix = matrix;
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (i < j) {
                    lowerTriangularMatrix[i][j] = 0;
                }
            }
        }
        this.matrix.data = lowerTriangularMatrix;
        return this.matrix;
    };
    squareMatrix.prototype.transpose = function (matrix) {
        if (matrix === void 0) { matrix = this.matrix.data; }
        var transpose = new Array();
        for (var i = 0; i < matrix.length; i++) {
            transpose[i] = new Array();
            for (var j = 0; j < matrix[i].length; j++) {
                transpose[i][j] = matrix[j][i];
            }
        }
        return transpose;
    };
    squareMatrix.prototype.setToInitial = function () {
        this.matrix.data = this.matrix.initial_matrix;
    };
    squareMatrix.prototype.showData = function (matrix) {
        if (matrix === void 0) { matrix = this.matrix.data; }
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (typeof matrix[i][j] == 'object') {
                    process.stdout.write('(' + matrix[i][j].sentence + Array(5).join(' '));
                }
                else {
                    process.stdout.write(matrix[i][j].toString() + Array(6 - matrix[i][j].toString().length).join(' '));
                }
            }
            process.stdout.write('\n');
            // console.log(matrix[i])
        }
    };
    return squareMatrix;
}());
exports["default"] = squareMatrix;
