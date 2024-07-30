import React,{useRef} from 'react'
import './testimonial.css';
import next_icon from '../../img/next-icon.png';
import back_icon from '../../img/back-icon.png';
import user_1 from '../../img/user-1.png';
import user_2 from '../../img/user-2.png';
import user_3 from '../../img/user-3.png';
import user_4 from '../../img/user-4.png';
const Testimonial = () => {

    const slider = useRef();
    let tx = 0;
    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="next-icon" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="back-icon" className="back-btn" onClick={slideBackward}/>

      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="user-1"/>
                    </div>
                    <h3>Siya Dhaiya</h3>
                    <span>Mumbai, India</span>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eaque et a, corporis minus quia illo autem est cum error obcaecati doloribus, atque placeat rem laboriosam eligendi voluptatum? Odio dolorem temporibus doloremque architecto accusamus voluptates illum ipsa molestiae minus, rerum autem, quis ea expedita, sapiente assumenda hic repellat eos consequuntur.</p>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="user-2"/>
                    </div>
                    <h3>Tushar sexsena</h3>
                    <span>Uttar Pradesh , India</span>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eaque et a, corporis minus quia illo autem est cum error obcaecati doloribus, atque placeat rem laboriosam eligendi voluptatum? Odio dolorem temporibus doloremque architecto accusamus voluptates illum ipsa molestiae minus, rerum autem, quis ea expedita, sapiente assumenda hic repellat eos consequuntur.</p>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="user-3"/>
                    </div>
                    <h3>Madhuri Kesodi</h3>
                    <span>Uttara Khand , India</span>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eaque et a, corporis minus quia illo autem est cum error obcaecati doloribus, atque placeat rem laboriosam eligendi voluptatum? Odio dolorem temporibus doloremque architecto accusamus voluptates illum ipsa molestiae minus, rerum autem, quis ea expedita, sapiente assumenda hic repellat eos consequuntur.</p>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="user-4"/>
                    </div>
                    <h3>Raja Jagarnath </h3>
                    <span>Tamil Nadu , India</span>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eaque et a, corporis minus quia illo autem est cum error obcaecati doloribus, atque placeat rem laboriosam eligendi voluptatum? Odio dolorem temporibus doloremque architecto accusamus voluptates illum ipsa molestiae minus, rerum autem, quis ea expedita, sapiente assumenda hic repellat eos consequuntur.</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial;
