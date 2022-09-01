import React from 'react';
import img1 from '../asset/svg/choose_what_you_want.svg';
import img2 from '../asset/gif/Real_time_updates.gif';
import img3 from '../asset/svg/same_day_delivery.svg'

function HowItWorks() {
  return (
    <section className="how_it_works">
        <div className="container">
            <h1 className="text-center how_heading">Grocery shopping done right</h1>
            <div className="how_cards">
                <div className="how-card">
                    <div className="card_body">
                        <h1 className="card-heading">Choose what you want</h1>
                        <p className="card-text">Select items from your favorite grocery stores or local markets.</p>
                    </div>
                    <div className="card_body_image" style={{ backgroundColor: "rgb(166, 244, 197)" }}>
                        <img src={img1} alt="choose" className='img-fluid'/>
                    </div>
                </div>

                <div className="how-card">
                    <div className="card_body">
                        <h1 className="card-heading">Get real-time updates</h1>
                        <p className="card-text">We’ll send you real-time updates from every step of the way.</p>
                    </div>
                    <div className="card_body_image gif">
                        <picture>
                            <img src={img2} alt="choose" />
                        </picture>
                    </div>
                </div>

                <div className="how-card">
                    <div className="card_body">
                        <h1 className="card-heading">Same-day grocery delivery</h1>
                        <p className="card-text">Fresh groceries delivered same-day directly to you.</p>
                    </div>
                    <div className="card_body_image" style={{ backgroundColor: "rgb(224, 242, 254)" }}>
                        <img src={img3} alt="choose" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks