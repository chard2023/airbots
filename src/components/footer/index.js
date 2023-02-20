import React from "react";

function Footer() {
    function scrollUp() {
        const scrollUp = document.getElementById('scroll-up');
      
        if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)
  return (
    <>
    <footer className="footer section">
        <div className="footer__container container grid">
            <div className="footer__content">
                <a href="/" className="footer__logo">
                    <i className="bx bxl-xing nav__logo-icon"></i>
                    AirBots
                </a>

                <p className="footer__description"><q>Elevating your standards with advanced aerial technology from Airbots.</q></p>

                <div className="footer__social">
                    <a href="https://www.facebook.com" target="_blank" className="footer__social-link"><i className="bx bxl-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank" className="footer__social-link"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.instagram.com/" target={"_blank"} className="footer__social-link"><i className="bx bxl-instagram-alt"></i></a>
                </div>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">About</h3>
                <ul className="footer__links">
                    <li><a href="/about" className="footer__link">About Us</a></li>
                    <li><a href="/" className="footer__link">Customer Support</a></li>
                    <li><a href="/" className="footer__link">Support Center</a></li>
                </ul>
            </div>
            <div className="footer__content">
                <h3 className="footer__title">Our Services</h3>
                <ul className="footer__links">
                    <li><a href="/" className="footer__link">Shop</a></li>
                    <li><a href="/" className="footer__link">Discounts</a></li>
                    <li><a href="/" className="footer__link">Shipping mode</a></li>
                </ul>
            </div>
            <div className="footer__content">
                <h3 className="footer__title">Our Company</h3>
                <ul className="footer__links">
                    <li><a href="/registration" className="footer__link">Register</a></li>
                    <li><a href="/contact" className="footer__link">Contact Us</a></li>
                    <li><a href="/about" className="footer__link">About Us</a></li>
                </ul>
            </div>
        </div>
        <span className="footer__copy">© AirBots. All rights reserved</span>
    </footer>
    <a href="#" className="scroll" id="scroll-up">
        <i className="bx bx-up-arrow-alt scroll__icon"></i>
    </a>
    </>
  );
}

export default Footer;