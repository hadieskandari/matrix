export function makeSquareMatrix(...data: any) {
	import { make2d } from './obj';
	let matrix = new Array(data);
	// matrix = temp[Symbol.iterator]();
	return matrix[0];
}
export function getMainDiagonal(matrix: any) {
	let mainDiagonal = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (i === j) {
				mainDiagonal.push(matrix[i][j]);
			}
		}
	}
	return mainDiagonal;
}
export function setDiagonalMatrix(matrix: any) {
	let diagonalMatrix = matrix;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (i !== j) {
				diagonalMatrix[i][j] = 0;
			}
		}
	}
	return diagonalMatrix;
}
export function makeSquareZeroMatrix(side: number) {
	let zeroMatrix = new Array();
	for (let i = 0; i < side; i++) {
		zeroMatrix[i] = new Array();
		for (let j = 0; j < side; j++) {
			zeroMatrix[i][j] = 0;
		}
	}
	return zeroMatrix;
}
export function makeIdentityMatrix(side: number) {
	let zeroMatrix = new Array();
	for (let i = 0; i < side; i++) {
		zeroMatrix[i] = new Array();
		for (let j = 0; j < side; j++) {
			if (i === j) {
				zeroMatrix[i][j] = 1;
			} else {
				zeroMatrix[i][j] = 0;
			}
		}
	}
	return zeroMatrix;
}
export function upperTriangularMatrix(matrix: any) {
	let upperTriangularMatrix = matrix;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (i > j) {
				upperTriangularMatrix[i][j] = 0;
			}
		}
	}
	return upperTriangularMatrix;
}
export function lowerTriangularMatrix(matrix: any) {
	let lowerTriangularMatrix = matrix;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (i < j) {
				lowerTriangularMatrix[i][j] = 0;
			}
		}
	}
	return lowerTriangularMatrix;
}
export function transpose(matrix: any) {
	let transpose = new Array();
	for (let i = 0; i < matrix.length; i++) {
		transpose[i] = new Array();
		for (let j = 0; j < matrix[i].length; j++) {
			transpose[i][j] = matrix[j][i];
		}
	}
	return transpose;
}
// let matrix = makeSquareMatrix([ 1, 2, -45 ], [ -2, 0, -4 ], [ 45, 4, 0 ]);

// console.log(transpose(matrix));

export class squareMatrix {
	constructor(side) {
		side: side;
	}
	clos: number;
	rows: number;
	makeSquareMatrix(...data: any) {
		let matrix = new Array(data);
		// matrix = temp[Symbol.iterator]();
		return matrix[0];
	}
	getMainDiagonal(matrix: any) {
		let mainDiagonal = [];
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
				if (i === j) {
					mainDiagonal.push(matrix[i][j]);
				}
			}
		}
		return mainDiagonal;
	}
	setDiagonalMatrix(matrix: any) {
		let diagonalMatrix = matrix;
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
				if (i !== j) {
					diagonalMatrix[i][j] = 0;
				}
			}
		}
		return diagonalMatrix;
	}
	makeSquareZeroMatrix(side: number) {
		let zeroMatrix = new Array();
		for (let i = 0; i < side; i++) {
			zeroMatrix[i] = new Array();
			for (let j = 0; j < side; j++) {
				zeroMatrix[i][j] = 0;
			}
		}
		return zeroMatrix;
	}
	makeIdentityMatrix(side: number) {
		let zeroMatrix = new Array();
		for (let i = 0; i < side; i++) {
			zeroMatrix[i] = new Array();
			for (let j = 0; j < side; j++) {
				if (i === j) {
					zeroMatrix[i][j] = 1;
				} else {
					zeroMatrix[i][j] = 0;
				}
			}
		}
		return zeroMatrix;
	}
	upperTriangularMatrix(matrix: any) {
		let upperTriangularMatrix = matrix;
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
				if (i > j) {
					upperTriangularMatrix[i][j] = 0;
				}
			}
		}
		return upperTriangularMatrix;
	}
	lowerTriangularMatrix(matrix: any) {
		let lowerTriangularMatrix = matrix;
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
				if (i < j) {
					lowerTriangularMatrix[i][j] = 0;
				}
			}
		}
		return lowerTriangularMatrix;
	}
	transpose(matrix: any) {
		let transpose = new Array();
		for (let i = 0; i < matrix.length; i++) {
			transpose[i] = new Array();
			for (let j = 0; j < matrix[i].length; j++) {
				transpose[i][j] = matrix[j][i];
			}
		}
		return transpose;
	}
}

let matrix = new squareMatrix(2);
console.log(matrix);
