import React, { useState } from 'react';
import { SliderData } from '../SliderData';
import './slider.css';

const ImageSlider = ({ slides }) => {
	const [ current, setCurrent ] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}
	function zoomOut(e) {
		let val = document.querySelector('.middles');
		e.preventDefault();
		val.style.display = 'none';
	}
	return (
		<section className="slider">
			<div className="boxSliser">
				<span className="close">
					<img src="./././images/icon-close.svg" alt="close" onClick={zoomOut} />
				</span>
				<span className="left-arrow" onClick={prevSlide} />
				<span className="right-arrow" onClick={nextSlide} />
				{SliderData.map((slide, index) => {
					return (
						<div className={index === current ? 'slide active' : 'slide'} key={index}>
							{index === current && (
								<img src={`./././images/${slide.srcImg || slide.filter((pImg) => pImg.id === current)[0].srcImg}.jpg`} alt="travel images" className="image" />
							)}
						</div>
					);
				})}
				<span className="otherImg">
					{SliderData.map((e,index) => (
						<span key={index} className={`spanImg ${index === current ? 'active' : ''}`}>
							<img src={`./././images/${e.srcImg}.jpg`} alt="imgs" onClick={() => setCurrent(index)} />
						</span>
					))}
				</span>
			</div>
		</section>
	);
};

export default ImageSlider;
