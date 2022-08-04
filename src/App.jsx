import { useEffect, useState } from 'react';
import Card from './components/Card';

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProduct();
	}, []);

	const getProduct = async () => {
		// call api
		const apiUrl = await fetch(
			`https://62b9b32c41bf319d228329df.mockapi.io/Product`
		);

		const data = await apiUrl.json();
		setProducts(data.items);
		console.log(data.items);
	};

	return (
		<div className='wrapper'>
			<h1>Latest Products</h1>
			<Card products={products} />
		</div>
	);
}

export default App;
