import '../styles/card.sass';
import { Link } from 'react-router-dom';
import { Currency } from '../helper/Currency';
const Card = props => {
	return (
		<div className='card'>
			{props.products.map(product => (
				<div key={product.id} className='card-box'>
					<Link to={{ pathname: `/productdetails/${product.id}` }}>
						<div className='card-body'>
							<img
								src={product.image}
								alt={product.name}
								className='card-img'
							/>
							<h2 className='card-title'>
								{product.name.length < 20
									? `${product.name}`
									: `${product.name.substring(0, 25)}...`}
							</h2>
							<p className='card-price'>
								Price: <span>{Currency(product.price)}</span>
							</p>

							<p className='card-short-desc'>{product.shortDescription}</p>
						</div>
					</Link>
					<button className='card-btn'>
						<Link to={{ pathname: `/productdetails/${product.id}` }}>
							View Product
						</Link>
					</button>
				</div>
			))}
		</div>
	);
};

export default Card;
