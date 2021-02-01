import React from 'react';
import Card from './Card';
import Carddata from './Carddata';
import web from '../src/images/img3.svg';

const Product = () => {
  return(
    <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            {/* Bydefault 12 column it takes 10 column and align div in center*/}
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>Book your Favourite Gift Hampers with
                                <strong className="brand-name">  The Prezzie Tale</strong></h1>
                                <h2 className="my-3">Just fill a form and get your gift hamper at your doorstep</h2>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={web} className="img-fluid animated" alt="productimg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="my-5">
            <h1 className="text-center">Our Products</h1>
        </div>
        <div className="container-fluid mb-5"> 
    		<div className="row">
    			<div className="col-10 mx-auto">
                {/* Bydefault 12 column it takes 10 column and align div in center*/}
                    <div className="row gy-4">
                        {
                            Carddata.map((val, ind) => {
                                return <Card
                                    key={ind} 
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    content={val.content}
                                />
                            })
                        }
                    </div>
    			</div>
    		</div>
    	</div>
    </>
  );
}

export default Product;
