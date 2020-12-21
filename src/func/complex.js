"use strict";
exports.__esModule = true;
exports.Complex = exports.complex = void 0;
function complex(real, imaginary, variable) {
    var initial_variable = variable === undefined ? 'i' : variable;
    var sentence;
    if (real == 0) {
        sentence = imaginary.toString() + 'i';
    }
    else if (typeof imaginary == 'number' && imaginary > 0) {
        sentence = real.toString() + ' + ' + imaginary.toString() + initial_variable;
    }
    else if (typeof imaginary == 'number' && imaginary < 0) {
        sentence = real.toString() + ' - ' + Math.abs(imaginary).toString() + initial_variable;
    }
    else if (typeof imaginary == 'object') {
        sentence = real.toString() + ' +  (' + imaginary.sentence.toString() + ')' + initial_variable;
    }
    var complex_number = {
        re: real,
        im: imaginary,
        sym: initial_variable,
        complexInitial: typeof imaginary == 'object' ? imaginary : null,
        sentence: sentence
    };
    return complex_number;
}
exports.complex = complex;
var Complex = /** @class */ (function () {
    function Complex(initial_complex) {
        this.comp = initial_complex;
    }
    Complex.prototype.calculate = function (val1, val2) {
        var calcualted_value = 0;
        if (this.unified != undefined) {
            var unified = this.unified;
            if (this.unified.single_sym) {
                var calcualted_value_1 = unified.real + unified.im1 * val1 + unified.im2 * Math.pow(val1, 2);
                return calcualted_value_1;
            }
            else {
                if (val2 === undefined) {
                    throw Error("please enter " + unified.sym2 + " value as a seconde parameter");
                }
                else {
                    var calcualted_value_2 = unified.real + unified.im1 * val1 + unified.im2 * val1 * val2;
                    return calcualted_value_2;
                }
            }
        }
        else {
            if (this.comp.complexInitial != null) {
                throw Error("this is a nested complex here's inner complex " + this.comp.complexInitial.sentence);
            }
            else {
                calcualted_value = this.comp.re + this.comp.im * val1;
                return calcualted_value;
            }
        }
    };
    Complex.prototype.unify = function () {
        if (this.comp.complexInitial == null) {
            throw Error("you didn't define any inner complex number. for example : complex( 2 + complex( 2 + 3) )");
        }
        else {
            var result = void 0;
            if (this.comp.sym === this.comp.complexInitial.sym) {
                result =
                    this.comp.complexInitial.im +
                        (this.comp.sym + "^2") +
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
            }
            else {
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
    };
    return Complex;
}());
exports.Complex = Complex;
