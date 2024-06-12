// Assuming this file is located at /components/Title.tsx
import React from 'react';
import Card1 from '../images/card1.png';
import Card2 from '../images/card2.jpg';
import Card3 from '../images/card3.png';
import Image from 'next/image';
const card1width=300;
const card1height=300; 

const ThreeCards = ( ) => {
  return (
    <>

<div className="container">
        <div className="best-card">
            <div className="row" style={{marginTop:"100px" }}>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <Image className="card-image-top" src={Card1.src} alt="" width={350} height={230} layout='responsive'/>
                        <div className="card-img-overlay">
                            <h1 className="card-titel">Fresh Fries</h1>
                            <p className="card-text">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <Image className="card-image-top" src={Card2.src} alt="" width={300} height={220} layout='responsive' />
                        <div className="card-img-overlay">
                            <h1 className="card-titel">Fresh Burger</h1>
                            <p className="card-text">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <Image className="card-image-top" src={Card1.src} alt="" width={300} height={220} layout='responsive' />
                        <div className="card-img-overlay">
                            <h1 className="card-titel">Fast Delivery</h1>
                            <p className="card-text">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};
export default ThreeCards;