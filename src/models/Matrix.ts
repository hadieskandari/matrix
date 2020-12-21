import Traits from '../models/Traists';

export default interface Matrix {
	dimention: number;
	initial_matrix: Array<Array<any>>;
	data: Array<Array<any>>;
	traits?: Traits;
};
