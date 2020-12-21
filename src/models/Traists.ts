import Matrix from './Matrix';

export default interface Traits {
	symmetric: boolean;
	skew_symmetrics: boolean;
	diagonal: boolean;
	identity: boolean;
	zero: boolean;
	normal: boolean;
	upperTriangle: boolean;
	lowerTriangule: boolean;
	complex: boolean;
	inverse?: Matrix;
	orthonormal: boolean;
	hermitan: boolean;
};

export let default_traits = {
	symmetric: false,
	skew_symmetrics: false,
	diagonal: false,
	identity: false,
	zero: false,
	normal: false,
	upperTriangle: false,
	lowerTriangule: false,
	complex: false,
	orthonormal: false,
	hermitan: false
};
