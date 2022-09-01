import React from 'react'

const Faq = () => {
return (
<section className="faqs">
	<h1 className="heading">FAQ</h1>
	<p>Have questions? We're here to help.</p>

	<div className="container">
		<div className="accordion accordion-flush" id="accordionExample">
			<div className="accordion-item">
				<h2 className="accordion-header" id="headingOne">
					<button className="accordion-button" type="button" data-bs-toggle="collapse"
						data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
						How does Shopascart work?
					</button>
				</h2>
				<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
					data-bs-parent="#accordionExample">
					<div className="accordion-body">
						<p>Shopascart helps you save time and money by connecting you with a personal shopper in your area.
						You can shop at your favorite stores and get your groceries delivered to your door step.</p>
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<h2 className="accordion-header" id="headingTwo">
					<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
						data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						How do I become a Shopascart Shopper
					</button>
				</h2>
				<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
					data-bs-parent="#accordionExample">
					<div className="accordion-body">
						To become a Shopascart Shopper, you need to register with us. You can do this by clicking on the
						button below.
						Become a Shopper
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<h2 className="accordion-header" id="headingThree">
					<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
						data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						Why is Shopascart not available in my area?
					</button>
				</h2>
				<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
					data-bs-parent="#accordionExample">
					<div className="accordion-body">
						Shopascart is available to only select areas of Lagos. We are working to expand our reach to
						other parts of the country.
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<h2 className="accordion-header" id="headingFour">
					<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
						data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
						How do I pay for my order?
					</button>
				</h2>
				<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
					data-bs-parent="#accordionExample">
					<div className="accordion-body">
						You can pay with your debit or credit card.
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<h2 className="accordion-header" id="headingFive">
					<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
						data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
						What happens if something is out of stock?
					</button>
				</h2>
				<div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
					data-bs-parent="#accordionExample">
					<div className="accordion-body">
						You can always set a substitution preference for when something is out of stock as well as chat
						with your shopper to see if they have any other available options. <br/> <br/>

						You can tell your shopper to:<br/><br/>

						- Pick a substitution: Your shopper will contact you directly and you can pick a substitution
						for the item that is out of stock.<br/>

						- Find the best substitute: Your shopper will find the best substitute for you.<br/>

						- Don't substitute: Your shopper will not substitute anything and a refund will be issued for
						the item.
					</div>
				</div>
			</div>

			<div className="accordion-item">
				<h2 className="accordion-header" id="headingSix">
					<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
						data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
						Is there a limit to the amount of orders I can place in a day?
					</button>
				</h2>
				<div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
					data-bs-parent="#accordionExample">
					<div className="accordion-body">
						No, you can place as many orders as you want in a day.
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
)
}

export default Faq