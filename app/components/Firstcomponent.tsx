import React from 'react';
import lOGO from '../icon/logo.png';
import Menu from '../icon/menu.png';
import Image from 'next/image'; 
const Firstcomponent = ( ) => {
  return (
    <>
    <div id="cantainer-background">
        <nav className="navbar navbar-expand-md" id="navbar-color">
            <a className="navbar-brand" href="#" id="logo-color"><i>
              <Image src={lOGO.src} alt="" width={50} height={50} /></i>Burger</a>
          
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span><i> <Image src={Menu.src} alt="" id="menu-color" width={30} height={30}/></i></span>
            </button>
          
          
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#" id="first">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Burger</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Chicken Burger</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="main-content">
              <div className="content">
                  <h1>BEST DEAL</h1>
                  <h2>BURGER</h2>
                  <div id="btn1"><button>Order Now</button></div>
              </div>
          </div>
          
    </div>

    </>
  );
};

export default Firstcomponent;
