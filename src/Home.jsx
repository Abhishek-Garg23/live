import React from 'react';
import Common from './Common';
import web from '../src/images/img1.svg';

const Home = () => {
  return(
    <>
    	<Common 
    		name='Getting Exciting Gift Hampers with' 
    		imgsrc={web} 
    		visit='/product' 
    		btname='Shop Now' 
    		imgalt='homeimg'
    	/>
    </>
  );
}

export default Home;
