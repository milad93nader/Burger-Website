import React from 'react';
const Footer = ( ) => 
{
return(
<>
<footer id="footer">
    <div className="container">
        <div className="row d-flex align-items-center">
            <div className="col-lg-6 text-lg-left text-center">
                <div className="copyright">
                    &copy; Copyright <strong>Burger</strong>. All Rights Reserved
                </div>
            </div>
            <div className="col-lg-6">
                <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                    <a href="#" className="scrollto">Home</a>
                    <a href="#" className="scrollto">Burger</a>
                    <a href="#" className="scrollto">Chicken Burger</a>
                    <a href="#" className="scrollto">About Us</a>
                    <a href="#" className="scrollto">Contact Us</a>
                </nav>
            </div>
        </div>
    </div>
</footer>
</>
);
};
export default Footer;