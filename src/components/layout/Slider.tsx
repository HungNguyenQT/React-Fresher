import React from 'react';
import { Carousel } from 'antd';
import './Slider.scss';

const sliderImages = [
    'https://bizweb.dktcdn.net/100/434/558/themes/894884/assets/slider_1.jpg?1676278234490',
    'https://bizweb.dktcdn.net/100/355/156/themes/894790/assets/slider_1.jpg?1676262889168',
    'https://bizweb.dktcdn.net/100/376/170/themes/750292/assets/slider_2.jpg?1693887815786',
  ];
  

const ImageSlider = () => {
  return (
    <section className="image-slider">
      <Carousel autoplay dots>
        {sliderImages.map((src, index) => (
          <div className="slider-image" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ImageSlider;
