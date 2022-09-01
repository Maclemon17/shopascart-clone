import React from 'react';
import '../asset/css/Pricing.css';

function Pricing() {
    return (
        <section className="pricing">
            <div className="container">
                <p className='plus'>SHOPASCART+</p>
                <h1 className="text-brand pricing_heading">The best way to save money on grocery shopping</h1>
                <p className='plan'>Choose a plan that fits your shopping needs and get started.</p>

                <div className="d-flex justify-content-center align-items-center">
                    <div className="pricing_card">
                        <div className="pricing_card_header text-center">
                            <h3>Shopascart Plus</h3>
                            <p>Unlimited delivery on orders over ₦5000</p>
                            <h1>₦3000/month or ₦25000/year</h1>
                        </div>
                        <div className="pricing_card_body">
                            <a href="/git">
                                <button className='d-flex justify-content-center align-items-center w-100'>
                                    <span className='text-brand'>Get Shopascart Plus</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <p className="foot_text d-flex justify-content-center">Deliveries under ₦5000 with or without a Shopascart+ membership will incur a ₦1800 fee and applicable taxes and service fees per order.</p>

                </div>
            </div>
        </section>
    )
}

export default Pricing;