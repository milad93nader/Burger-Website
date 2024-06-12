import React from 'react' ;
import cheese from '../images/cheese burger.jpg';
import chicken from '../images/chicken burger.png';
import beef from '../images/beef burger.png';
import sandwich from '../images/sandwich.png';
import beef2 from '../images/beef burger2.png';
import fries from '../images/fries.png';
import Image from 'next/image'; 

const OurProduct = ( ) => {
return (
    <>  

<div className="container">
        <div className="new-card">
            <div className="row">
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <Image className="card-image-top" src={cheese.src} alt="" width={300} height={220} layout="responsive"/>
                        <div className="card-body">
                            <h2 className="card-titel text-center">Chesse Burger</h2>
                            <h3 className="card-titel text-center">$30,20</h3>
                            <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, error?</p>
                            <div id="btn3"><button>Order Now</button></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <Image className="card-image-top" src={chicken.src} alt="" width={300} height={220} layout='responsive'/>
                        <div className="card-body">
                            <h2 className="card-titel text-center">Chicken Burger</h2>
                            <h3 className="card-titel text-center">$50,60</h3>
                            <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, error?</p>
                            <div id="btn3"><button>Order Now</button></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <Image className="card-image-top" src={beef.src} alt="" width={300} height={220} layout='responsive'/>
                        <div className="card-body">
                            <h2 className="card-titel text-center">Chesse Burger</h2>
                            <h3 className="card-titel text-center">$35,50</h3>
                            <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, error?</p>
                            <div id="btn3"><button>Order Now</button></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row" style={{marginTop: "50px" }}>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <Image className="card-image-top" src={sandwich.src} alt="" width={300} height={220} layout='responsive'/>
                        <div className="card-body">
                            <h2 className="card-titel text-center">Best Sandwich</h2>
                            <h3 className="card-titel text-center">$70,30</h3>
                            <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, error?</p>
                            <div id="btn3"><button>Order Now</button></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <Image className="card-image-top" src={beef2.src} alt="" width={300} height={220} layout='responsive'/>
                        <div className="card-body">
                            <h2 className="card-titel text-center">Beef Burger</h2>
                            <h3 className="card-titel text-center">$100,50</h3>
                            <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, error?</p>
                            <div id="btn3"><button>Order Now</button></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <Image className="card-image-top" src={fries.src} alt="" width={300} height={220} layout='responsive'/>
                        <div className="card-body">
                            <h2 className="card-titel text-center">Best Fries</h2>
                            <h3 className="card-titel text-center">$50,10</h3>
                            <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, error?</p>
                            <div id="btn3"><button>Order Now</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="btn4"><button>View Full Menu</button></div>
    </div>

      </>
);
}; 
export default OurProduct;