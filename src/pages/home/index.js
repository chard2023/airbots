import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import "swiper/css/pagination";
import "swiper/css";



import ProductCarousel from "../../components/productCarousel";
import droneFeature2 from "../../assets/img/drone-feature-2.png";

import products from "../../assets/products.json";
function Home() {
    const [myCart, setCart] = useState(JSON.parse(localStorage.getItem('myCart')) || []);

    function addToCart(item) {
        const index = myCart.findIndex(i => i._id === item._id);
        if (index >= 0) {
            myCart[index].qty++;
            localStorage.setItem('myCart', JSON.stringify(myCart));
        } else {
            item.qty = 1;
            myCart.push(item);
            localStorage.setItem('myCart', JSON.stringify(myCart));
        }
        const event = new Event('updateMyCart');
        window.dispatchEvent(event);
    }
    useEffect(() => {
        window.addEventListener('updateMyCart', checkCartUpdates);
    }, []);
    function checkCartUpdates() {
        console.log("Check Updates")
        setCart(JSON.parse(localStorage.getItem('myCart')))
    };
  const pagination = {
    clickable: true,
    dynamicBullets: true,
  };
  return (
    <div className="App-home">
      <main className="main">
        <section className="home container" id="home">
            <div className="swiper home-swiper">
              <div className="swiper-wrapper">
                <Swiper
                  pagination={pagination}
                  modules={[Pagination]}
                  className="swiper home-swiper"
                  spaceBetween={0}
                  slidesPerView={1}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}>
                    {products.map((i, index) => (
                      i.featured && <SwiperSlide key={i._id}>
                        <section className="swiper-slide">
                            <div className="home__content grid">
                                <div className="home__group">
                                    <img src={require(`../../assets/img/${i.img}`)} alt="" className="home__img" />
                                </div>

                                <div className="home__data">
                                    <h3 className="home__subtitle">{i.productName}</h3>
                                    <h1 className="home__title">{i.model}</h1>
                                    <p className="home__description">{i.desc}</p>

                                    <div className="home__button">
                                        <a href={`/product/${i._id}`} className="button">Buy Now</a>
                                        <a href={`/product/${i._id}`} className="button--link button--flex">View Details <i className="bx bx-right-arrow-alt button__icon"></i></a>
                                    </div>
                                </div>
                            </div>
                        </section>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div className="swiper-pagination"></div>
            </div>
        </section>

        <section className="discount section">
            <div className="discount__container container grid">
                <img src={droneFeature2} alt="" className="discount__img"/>

                <div className="discount__data">
                    <h2 className="discount__title">Get your wings with our <br/> exclusive discounts!</h2>
                    <Link to="/" className="button">Go to new</Link>
                </div>
            </div>
        </section>

        <section className="new section">
            <h2 className="section__title">New Arrival</h2>

            <div className="new__container container">
                <ProductCarousel type="newArrival"></ProductCarousel>
            </div>
        </section>

        <section className="steps section container">
            <div className="steps__bg">
                <h2 className="section__title">Your Guide to Easy Drone Purchase</h2>

                <div className="steps__container grid">
                    <div className="steps__card">
                        <div className="steps__card-number">01</div>
                        <h3 className="step__card-title">Choose the drone you want to purchase</h3>
                        <p className="steps__card-description">
                            Browse the available drones and compare their features, specifications,
                             and prices to find the best one for your needs.
                              Consider factors such as flight time, camera quality,
                               and range when making your decision.
                        </p>
                    </div>
                    <div className="steps__card">
                        <div className="steps__card-number">02</div>
                        <h3 className="step__card-title">Place your order</h3>
                        <p className="steps__card-description">
                            Once you've decided on a drone, you can place your order either online or in-store, depending on the retailer.
                             When ordering online, you'll typically need to provide your shipping and billing information, 
                             as well as choose a payment method.
                        </p>
                    </div>
                    <div className="steps__card">
                        <div className="steps__card-number">03</div>
                        <h3 className="step__card-title">Wait for delivery</h3>
                        <p className="steps__card-description">
                            After you've placed your order, the drone will be shipped to you, usually within a few business days.
                             You can track your order using the shipping information provided by the retailer. 
                             Once the drone arrives, you'll be able to start flying and capturing aerial footage!
                             </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="newsletter section">
            <div className="newsletter__container container">
                <h2 className="section__title">Our Newsletter</h2>
                <p className="newsletter__description">
                    Latest Drone Trends, Insights, Deals
                </p>

                <form action="" className="newsletter__form">
                    <input type="email" className="newsletter__input" placeholder="Enter your email" />
                    <button className="button">Subscribe</button>
                </form>
            </div>
        </section>
    </main>
    </div>
  );
}

export default Home;
