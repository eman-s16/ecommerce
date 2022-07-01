import React, { useState} from 'react';
import './ListCss.css';

function List({ itemCount,InCart,setCart,removeli }) {
	function clickMune(e) {
		let icon = document.querySelector('.ListPart');
		e.preventDefault();
		icon.style.display = 'block';
	}
	function closeMune(e) {
		let icon = document.querySelector('.ListPart');
		e.preventDefault();
		icon.style.display = 'none';
	}
	const [ show, setShow ] = useState(false);
	
	function clickCart(e) {
		e.preventDefault();
		let product = document.querySelector('.ListProduct');
		setShow(!show);

		if (!show === true) {
			product.style.display = 'block';
		} else {
			product.style.display = 'none';
		}
	}


	return (
		<div className="List">
			<div className="LeftSide">
				<div className="PhoneList">
					<img src="./././images/icon-menu.svg" alt="icon" onClick={clickMune} />
				</div>
				<div className="logo">
					<img src="./././images/logo.svg" alt="logo" />
				</div>
				<div className="ListPart">
					<img src="./././images/icon-close.svg" alt="close" onClick={closeMune} />
					<ul>
						<li>Collections</li>
						<li>Men</li>
						<li>Women</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</div>
			</div>
			<div className="RightSide">
				<div className="cart" onClick={clickCart}>
					<img src="./././images/icon-cart.svg" alt="cart" />
					<span className="count">{itemCount > 0 ?itemCount -1 : 0 }</span>
				</div>
				<div className="ListProduct">
					<h3>Cart</h3>
					<h4 className='empty'>Your cart is empty.</h4>
					<ul>
						
								<li className='liProduct'>
									<div className="item">
										<span className="imgItem">
											<img src="/././images/image-product-1.jpg" alt="imageproduct" />
										</span>
										<span className="textItem">
											<h6>Fall Limited Edition Sneakers</h6>
											<span>
												<span className="priceItem">$125.00</span>×
												<span className="countItem">{InCart}</span>=
												<span className="resultItem">${InCart * 250}</span>
											</span>
										</span>
										<span className="deleteItem" onClick={removeli}>
											<img src="./././images/icon-delete.svg" alt="icondelete"  />
										</span>
									</div>
								</li>
							
						
					</ul>
					<span className="add">Checkout</span>
				</div>
				<div className="profileImg">
					<img src="./././images/image-avatar.png" alt="imageavatar" />
				</div>
			</div>
		</div>
	);
}

export default List;
