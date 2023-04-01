import React, {useEffect, useState} from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {
	const [products, setProduct] = useState([]);

	useEffect (async() => {
		const response = await axios(API)
		setProduct(response.data);
	},{})

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(products => (
					<ProductItem />
				))}
			</div>
		</section>
	);
}

export default ProductList;
