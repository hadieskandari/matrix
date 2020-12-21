import Matrix from './models/Matrix';
import { default_traits } from './models/Traists';

export default class squareMatrix {
	matrix: Matrix;
	dimention: number;
	constructor(...data) {
		this.dimention = data.length;
		let cols = data.length;
		let rows = 0;
		// checking entry data it must be a square matrix anyway throw an error
		for (let i = 0; i < data.length; i++) {
			for (let j = 0; j < data[i].length; j++) {
				rows = j + 1;
			}
			if (rows !== cols) {
				throw new Error(
					`there is an error in data entry structure [${data[
						i
					]}] does not match with entry dimention : ${cols} , this is mainly because YOUR DATA ISN'T SQUARE MATRIX`
				);
				return;
			}
		}
		this.matrix = {
			dimention: this.dimention,
			initial_matrix: JSON.parse(JSON.stringify(data)),
			data: [ ...data ],
			traits: default_traits
		};
	}

	makeSquareMatrix(...data: any) {
		let matrix = new Array(data);
		// matrix = temp[Symbol.iterator]();
		return matrix[0];
	}
	getMainDiagonal(matrix = this.matrix.data) {
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
	setDiagonalMatrix(matrix = this.matrix.data) {
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
	makeSquareZeroMatrix(dimention: number) {
		let zeroMatrix = new Array();
		for (let i = 0; i < dimention; i++) {
			zeroMatrix[i] = new Array();
			for (let j = 0; j < dimention; j++) {
				zeroMatrix[i][j] = 0;
			}
		}
		this.matrix.data = zeroMatrix;
		return zeroMatrix;
	}
	makeIdentityMatrix(dimention: number) {
		let zeroMatrix = new Array();
		for (let i = 0; i < dimention; i++) {
			zeroMatrix[i] = new Array();
			for (let j = 0; j < dimention; j++) {
				if (i === j) {
					zeroMatrix[i][j] = 1;
				} else {
					zeroMatrix[i][j] = 0;
				}
			}
		}
		return zeroMatrix;
	}
	upperTriangularMatrix(matrix = this.matrix.data) {
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
	lowerTriangularMatrix(matrix = this.matrix.data) {
		let lowerTriangularMatrix = matrix;
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
				if (i < j) {
					lowerTriangularMatrix[i][j] = 0;
				}
			}
		}
		this.matrix.data = lowerTriangularMatrix;
		return this.matrix;
	}
	transpose(matrix = this.matrix.data) {
		let transpose = new Array();
		for (let i = 0; i < matrix.length; i++) {
			transpose[i] = new Array();
			for (let j = 0; j < matrix[i].length; j++) {
				transpose[i][j] = matrix[j][i];
			}
		}
		return transpose;
	}
	setToInitial() {
		this.matrix.data = this.matrix.initial_matrix;
	}
	showData(matrix = this.matrix.data) {
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
				if (typeof matrix[i][j] == 'object') {
					process.stdout.write('(' + matrix[i][j].sentence + Array(5).join(' '));
				} else {
					process.stdout.write(matrix[i][j].toString() + Array(6 - matrix[i][j].toString().length).join(' '));

				 }
				
			}

			process.stdout.write('\n');
			// console.log(matrix[i])
		}
	}
}
