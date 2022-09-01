import React from 'react'

function Hero() {
    return (
        <section className='hero_comp'>
            <div className='container d-flex'>
                <div className='hero-img'>
                    <div className='hero-text'>
                        <h1>Get your groceries <br /> delivered same-day</h1>
                        <p>Order what you want from grocery stores and local market near you
                            and get it delivered right to your door. </p>

                        <input type="text" className='mb-5 mt-3'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero