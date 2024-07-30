import React from 'react'
import gallery_1 from '../../img/gallery-1.png';
import gallery_2 from '../../img/gallery-2.png';
import gallery_3 from '../../img/gallery-3.png';
import gallery_4 from '../../img/gallery-4.png';
import white_arrow from '../../img/white-arrow.png';

import './campus.css';
const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="gallery-1"/>

        <img src={gallery_2} alt="gallery-2"/>

        <img src={gallery_3} alt="gallery-3"/>

        <img src={gallery_4} alt="gallery-4"/>
      </div>
      <button className='btn dark-btn'>See More Here <img src={white_arrow} alt="Arrow"/> </button>
    </div>
  )
}

export default Campus;
