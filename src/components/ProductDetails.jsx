import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Currency } from '../helper/Currency';
import { Link } from 'react-router-dom';
import '../styles/cardDetails.sass';

const ProductDetails = props => {
	const [details, setDetails] = useState({});
	let params = useParams();

	const getDetails = async () => {
		const urlDetails = await fetch(
			`https://62b9b32c41bf319d228329df.mockapi.io/Product/${params.id}`
		);

		const detailsData = await urlDetails.json();
		setDetails(detailsData);
	};

	useEffect(() => {
		getDetails();
	}, [params.id]);

	return (
		<>
			{details.lenght !== 0 && (
				<div className='container-details'>
					<div className='wrap-img'>
						<img
							src={details.image}
							alt={details.name}
							className='img-details'
						/>
					</div>
					<div className='details-body'>
						<div className='details-left'>
							<h2>{details.name}</h2>
							<h3>{details.pageTitle}</h3>
							<p>{details.description}</p>
						</div>
						<div className='details-right'>
							<button className='btn'>Most Popular</button>
							<button className='btn'>Gemstone</button>
							<p>{details.pageBody}</p>
							<p className='price'>
								<span>{Currency(details.price)}</span>
							</p>
							<button className='btn-green'>Buy now</button>
							<button className='btn-black'>Add to cart</button>
						</div>
					</div>
					<button className='btn'>
						<Link to='/'> Back to Home page</Link>
					</button>
				</div>
			)}
		</>
	);
};

export default ProductDetails;
