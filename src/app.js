import React from 'react';
import { make2D } from './component/obj';

function App() {
	let matrix = make2D(2, 2);
	return <div>{matrix}</div>;
}
export default App;
