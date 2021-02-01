import React from 'react';
import Common from './Common';
import web from '../src/images/img2.svg';

const About = () => {
  return(
    <>
    	<Common 
            name='Getting Information about Gift Hampers with' 
            imgsrc={web} 
            visit='/contact' 
            btname='Contact Now' 
            imgalt='aboutimg'
        />
    </>
  );
}

export default About;
