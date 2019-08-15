import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//created context to accept data from App.js
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'

function App() {
	//recieves data and pushes to state
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = item => {
		setCart(cart.filter(book => book.id != item ))
	}

	return (
		<ProductContext.Provider value={{ products, addItem }}>
		<CartContext.Provider value={{ cart, setCart, removeItem}}>

		<div className="App">
			<Navigation />
			{/* Routes */}
			<Route exact path="/" component={Products} />
			<Route exact path="/cart" component={ShoppingCart} />

		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
