import React from 'react';
import logo from "../asset/svg/logo.svg"

function NavBar() {
  return (
    <header>
		<nav className="nav container navbar_comp">
			<div className="container d-flex justify-content-between align-items-center">
				<div className='d-flex'>
					<div className="header_logo">
						<img src={logo} alt="logo_light"  height="32" width="auto" />
					</div>
					<div className="header_links">
						<ul className="d-flex m-auto">
							<li className='nav-link'>
								<a href="/">Stores</a>
							</li>
							<li className='nav-link'>
								<a href="/">Locations</a>
							</li>
							<li className='nav-link'>
								<a href="/" className='active'>Become a Shopper</a>
							</li>
						</ul>
					</div>
				</div>

				<div className='nav_comp_btn'>
					<a href="/" className="btn-1 mx-3">Sign in</a>
					<a href="/" className="btn nav-btn">Sign up</a>
				</div>
			</div>
		</nav>
	</header>
  )
}

export default NavBar;