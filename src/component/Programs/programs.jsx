import React from 'react';
import './Programs.css';

import program_1 from '../../img/program-1.png';

import program_2 from '../../img/program-2.png';

import program_3 from '../../img/program-3.png';

import program_icon_1 from '../../img/program-icon-1.png';
import program_icon_2 from '../../img/program-icon-2.png';
import program_icon_3 from '../../img/program-icon-3.png';

const Programs = () => {
  return (
    <div className='Programs'>
        <div className="Program">
            <img src={program_1} alt="program-1" />
            <div className="caption">
              <img src={program_icon_1} alt=""/>
              <p>Graduation degree</p>
            </div>
            </div>
            <div className="Program">
            <img src={program_2} alt="program-2"/>
            <div className="caption">
              <img src={program_icon_2} alt=""/>
              <p>Master degree</p>
            </div>
            </div>

            <div className="Program">
            <img src={program_3} alt="program-3"/>
            <div className="caption">
              <img src={program_icon_3} alt=""/>
              <p>P.H.D degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs;
