import React, { useState } from 'react';
import Navbar from './component/Navbar/navbar';
import Hero from './component/Hero/Hero';
import Programs from './component/Programs/programs';
import Title from './component/Title/title';
import About from './component/About/about';
import './index.css';
import Campus from './component/Campus/campus';
import Testimonial from './component/Testimonial/Testimonial';
import Contact from './component/Contact/contact';
import Footer from './component/Footer/footer';
import VideoPlayer from './component/VideoPlayer/video';


const App = () => {
  const [playState,setPlayState]=useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle="Our Program" title="What We Offer"/>
      <Programs/>
      <About setPlayState = {setPlayState}/>
      <Title subTitle="Gallery" title="Campus Photos"/>
      <Campus/>
      <Title subTitle="Testimonial" title="What Student Say"/>
      <Testimonial/>
      <Title subTitle="contact Us" title="Get In Touch"/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState = {setPlayState}/>
    </div>
  )
}

export default App;
