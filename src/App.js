import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {ProductContext} from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	const product = useContext(ProductContext)
	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">

			{/* Routes */}
			<ProductContext.Provider value={{ products, addItem }}>
			<Route exact path="/" component={Products} />
			<CartContext.Provider value={{ cart }}>
			<Navigation cart={cart} />
			<Route exact path="/cart" component={cart} />
			</CartContext.Provider>
			</ProductContext.Provider>


		</div>
	);
}

export default App;
