import React, { useState } from 'react';
import './App.css';

import List from './Components/List/List.js';
import Main from './Components/Main/Main.js';
function App() {
	const [ itemCount, setItemCount ] = useState(1);
	const [ InCart, setCart ] = useState(0);
	function Addli(e) {
		e.preventDefault();
		let product = document.querySelector('.liProduct');
		let text = document.querySelector('.empty');
		setItemCount((count) => count + 1);
		setCart((a) => a + 1);
		text.style.display = 'none';
		product.style.display = 'block';
	}
	function removeli(e) {
		e.preventDefault();
		let product = document.querySelector('.liProduct');
		let text = document.querySelector('.empty');
		setItemCount(0);
		product.style.display = 'none';
		text.style.display = 'block';
	}
	return (
		<div className="App">
			<div className="Container">
				<List
					itemCount={itemCount}
					removeli={removeli}
					setItemCount={setItemCount}
					InCart={InCart}
					setCart={setCart}
				/>
				<Main
					itemCount={itemCount}
					Addli={Addli}
					setItemCount={setItemCount}
					InCart={InCart}
					setCart={setCart}
				/>
			</div>
		</div>
	);
}

export default App;
