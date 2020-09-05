import React from 'react'
import logoSVG from './../../assets/img/pizza-logo.svg';
import Button from './button/Button';
import { NavLink } from 'react-router-dom';


let Header = () => {
	return (
		<div className="header">
			<div className="container">
				<NavLink to="/">
					<div className="header__logo">
						<img width="38" src={logoSVG} alt="Pizza logo" />
						<div>
							<h1>React Pizza</h1>
							<p>самая вкусная пицца во вселенной</p>
						</div>
					</div>
				</NavLink>
				<NavLink to='/carts'>
					<Button />
				</NavLink>
			</div>
		</div>
	)
}

export default Header;