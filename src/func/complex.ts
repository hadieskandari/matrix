interface ComplexInt {
	re: number;
	im: number;
	sentence: string;
	sym?: string;
	complexInitial?: ComplexInt;
}
interface Unified {
	value: string;
	real: number;
	single_sym: boolean;
	im1: number;
	im2: number;
	sym: string;
	sym2?: string;
}
export function complex(real, imaginary, variable?) {
	let initial_variable = variable === undefined ? 'i' : variable;
	let sentence: any;
	if (real == 0) {
		sentence = imaginary.toString() + 'i';
	} else if (typeof imaginary == 'number' && imaginary > 0) {
		sentence = real.toString() + ' + ' + imaginary.toString() + initial_variable;
	} else if (typeof imaginary == 'number' && imaginary < 0) {
		sentence = real.toString() + ' - ' + Math.abs(imaginary).toString() + initial_variable;
	} else if (typeof imaginary == 'object') {
		sentence = real.toString() + ' +  (' + imaginary.sentence.toString() + ')' + initial_variable;
	}

	let complex_number: ComplexInt = {
		re: real,
		im: imaginary,
		sym: initial_variable,
		complexInitial: typeof imaginary == 'object' ? imaginary : null,
		sentence: sentence
	};
	return complex_number;
}
export class Complex {
	comp: ComplexInt;
	unified: Unified;
	constructor(initial_complex: ComplexInt) {
		this.comp = initial_complex;
	}
	calculate(val1: number, val2?: number) {
		let calcualted_value = 0;
		if (this.unified != undefined) {
			let unified = this.unified;
			if (this.unified.single_sym) {
				let calcualted_value = unified.real + unified.im1 * val1 + unified.im2 * Math.pow(val1, 2);
				return calcualted_value;
			} else {
				if (val2 === undefined) {
					throw Error(`please enter ${unified.sym2} value as a seconde parameter`);
				} else {
					let calcualted_value = unified.real + unified.im1 * val1 + unified.im2 * val1 * val2;
					return calcualted_value;
				}
			}
		} else {
			if (this.comp.complexInitial != null) {
				throw Error(`this is a nested complex here's inner complex ${this.comp.complexInitial.sentence}`);
			} else {
				calcualted_value = this.comp.re + this.comp.im * val1;
				return calcualted_value;
			}
		}
	}
	unify() {
		if (this.comp.complexInitial == null) {
			throw Error(`you didn't define any inner complex number. for example : complex( 2 + complex( 2 + 3) )`);
		} else {
			let result;
			if (this.comp.sym === this.comp.complexInitial.sym) {
				result =
					this.comp.complexInitial.im +
					`${this.comp.sym}^2` +
					' + ' +
					(this.comp.complexInitial.re + this.comp.sym) +
					' + ' +
					this.comp.re;
				this.unified = {
					value: result,
					real: this.comp.re,
					single_sym: true,
					im1: this.comp.complexInitial.re,
					im2: this.comp.complexInitial.im,
					sym: this.comp.sym
				};
			} else {
				result =
					this.comp.complexInitial.im +
					this.comp.sym +
					this.comp.complexInitial.sym +
					' + ' +
					(this.comp.complexInitial.re + this.comp.sym) +
					' + ' +
					this.comp.re;
				this.unified = {
					value: result,
					real: this.comp.re,
					single_sym: false,
					im1: this.comp.complexInitial.re,
					im2: this.comp.complexInitial.im,
					sym: this.comp.sym,
					sym2: this.comp.complexInitial.sym
				};
			}
			return result;
		}
	}
}

