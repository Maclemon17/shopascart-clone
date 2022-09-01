import React from 'react';
import shoprite from '../asset/png/shoprite_store.png';
import addie from '../asset/png/addie_store.png';
import delis from '../asset/png/delis_store.png';
import supermart from '../asset/png/supermart_store.png';

const Stores = () => {
	return (
		<section className='choose_store'>
			<div className='container'>

				<h1 className='store-header text-center'>Favorite stores in <span className='text-brand'>Lagos</span></h1>

				<div className='shop-list mt-5'>
					<div className=''>
						<div className='store_img'>
							<img src={shoprite} alt="shoprite_store" width="350" height="200"/>
						</div>
						<div className='store_name mt-2'>
							<h3>Shoprite</h3>
						</div>
						<div className='store_option d-flex align-items-center'>
							<p>Delivery <span className='mx-1'>•</span></p>
							<p>Pickup</p>
						</div>
					</div>

					<div className=''>
						<div className='store_img'>
							<img src={addie} alt="addie_store" width="350" height="200"/>
						</div>
						<div className='store_name mt-2'>
							<h3>addie</h3>
						</div>
						<div className='store_option d-flex align-items-center'>
							<p>Delivery <span className='mx-1'>•</span></p>
							<p>Pickup</p>
						</div>
					</div>

					<div className=''>
						<div className='store_img'>
							<img src={delis} alt="delis_store" width="350" height="200"/>
						</div>
						<div className='store_name mt-2'>
							<h3>delis</h3>
						</div>
						<div className='store_option d-flex align-items-center'>
							<p>Delivery</p>
						</div>
					</div>

					<div className=''>
						<div className='store_img'>
							<img src={supermart} alt="supermart_store" width="350" height="200"/>
						</div>
						<div className='store_name mt-2'>
							<h3>supermart</h3>
						</div>
						<div className='store_option d-flex align-items-center'>
							<p>Delivery <span className='mx-1'>•</span></p>
							<p>Pickup</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Stores