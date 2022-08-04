import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import App from '../App';
const NavRouterr = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/productdetails/:id' element={<ProductDetails />} />
				</Routes>
			</Router>
		</>
	);
};

export default NavRouterr;
