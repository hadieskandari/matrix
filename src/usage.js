const Square = require('./squareMatrix').default;
var complex = require('./func/complex').complex;
var Complex = require('./func/complex').Complex;
// let newMatrix = new Square(
// 	[ 1, 24, 4, 5, 3, 34, 21, 10 ],
// 	[ 3, 4, 3, -2, 3, 34, 21, 10 ],
// 	[ 3, 34, 21, 10, 3, 34, 21, 10 ],
// 	[ 0, 0, 0, 0, 3, 34, 21, 10 ],
// 	[ 1, 24, 4, 5, 3, 34, 21, 10 ],
// 	[ 3, 4, 3, -2, 3, 34, 21, 10 ],
// 	[ 3, 34, 21, 10, 3, 34, 21, 10 ],
// 	[ 0, 0, 0, 0, 3, 34, 21, 10 ]
// );
// console.log(newMatrix.showData());
// let comp = complex(2, 3 , 'k');
// console.log(comp.sentence);
var comp = new Complex(complex(1, complex(2, 3, 'k'), 'k'));
comp.unify();
console.log(comp.unified.value);
console.time('s');
for (var i = 0; i < 1000; i++) {
	console.log(comp.calculate(Math.log(i)));
}
console.timeEnd('s');
