import React from 'react';
import './hero.css';
import dark_arrow from '../../img/dark-arrow.png';
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure Better Education For a Better World</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum, perspiciatis tenetur quia dolorum, consequatur cum quos deleniti numquam expedita ratione ad iure, hic eligendi ipsum sequi adipisci dolores dignissimos.</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt='Arrow'/> </button>
      </div>
    </div>
  )
}

export default Hero
