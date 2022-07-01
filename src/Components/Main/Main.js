import React, { useState } from 'react';

import ImageSlider from '../ImageSlider/ImageSlider';
import { SliderData } from '../SliderData';
import './mainCss.css';
function Main({itemCount, Addli,setItemCount,InCart,setCart}) {
	const [ activeImg, setActiveImg ] = useState(1);
	function zoomIn(e) {
		let val = document.querySelector('.middles');
		e.preventDefault();
		val.style.display = 'block';
	}
	
	function upCart() {
		setCart((count) => count + 1);
	}
	function downCart() {
		if (InCart > 0) {
			setCart((count) => count - 1);
		}
	}
	
	
	function AddtoCart() {
		setItemCount((count) => count + 1);
	}
	return (
		<div className="content">
			<div className="PhonePart">
				<ImageSlider slides={SliderData} />
			</div>
			<div className="main">
				<div className="leftPart">
					<span className="mainImg">
						<img
							src={`./././images/${SliderData.filter((pImg) => pImg.id === activeImg)[0].srcImg}.jpg`}
							alt="Images"
							onClick={zoomIn}
						/>
					</span>
					<span className="otherImg">
						{SliderData.map((e) => (
							<span key={e.id} className={`spanImg ${e.id === activeImg ? 'active' : ''}`}>
								<img
									src={`./././images/${e.srcImg}.jpg`}
									alt="img"
									onClick={() => setActiveImg(e.id)}
								/>
							</span>
						))}
					</span>
				</div>
				<div className="middles">
					<ImageSlider slides={SliderData} />
				</div>
				<div className="rightPart">
					<div className="text">
						<h5>Sneaker Company</h5>
						<h1>Fall Limited Edition Sneakers</h1>
						<p>
							These low-profile sneakers are your perfect casual wear companion. Featuring a durable
							rubber outer sole, they’ll withstand everything the weather can offer.
						</p>
					</div>
					<div className="price">
						<h2>
							$125.00 <span>50%</span>
						</h2>
						<h4>$250.00</h4>
						<div className="choose">
							<span className="num">
								<span className="down" onClick={downCart} />
								<span className="nums">{InCart}</span>
								<span className="up" onClick={upCart} />
							</span>
							<span className="add" onClick={Addli}> 
								<img
									src="./././images/icon-cart.svg"
									alt="cart"
									className="imgs"
									onClick={AddtoCart}
								/>
								Add to cart
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
