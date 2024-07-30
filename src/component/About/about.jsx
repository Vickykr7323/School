import React from 'react'
import about_img from '../../img/about.png';
import play_icon from '../../img/play-icon.png';

import './about.css'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="About" className='about-img'/>
        <img src={play_icon} alt="Play" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>

      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut, laborum dignissimos provident a aliquid, error mollitia sequi alias, ab quia sit iste ad. </p>
        <p>Placeat tempora debitis at quod, natus magni sequi voluptatibus tenetur dolorem quidem, aperiam fugit id numquam labore eum doloremque maxime unde eligendi in dicta atque est velit voluptatem.</p> <p>Aspernatur, iste, natus iusto ea error earum maxime rerum tempore ut repudiandae libero qui itaque quod sit quis  nam ad dignissimos alias harum fuga praesentium. Soluta quidem neque aliquid est velit doloribus nihil voluptatem ea explicabo adipisci assumenda ullam, amet aspernatur similique esse delectus magni corrupti distinctio deleniti cum. Magnam itaque fugit rem quaerat eaque veritatis tempora est, provident quo eos ipsum, autem unde soluta commodi ullam maiores ipsam! Necessitatibus at nam vitae asperiores. Dicta nulla vel at facere nam possimus tempore sed pariatur  numquam. Tempore ratione laborum obcaecati! Provident obcaecati suscipit sequi perspiciatis dolorem quam soluta facere cumque consectetur laboriosam aspernatur autem eligendi dolor impedit.</p>
      </div>
    </div>
  )
}

export default About
