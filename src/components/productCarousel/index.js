import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import products from "../../assets/products.json";

function ProductCarousel(type) {
    const navigate = useNavigate();
    const [newProducts, setnewProducts] = useState(products);
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
        switch (type) {
            case "newArrival":

                const newArrivalProducts = products.filter(product => product.newArrival);
                setnewProducts(newArrivalProducts);
                break;
            case "relatedProducts":
                break;
            default:
                break;
        }
        console.log("Check Updates")
        setCart(JSON.parse(localStorage.getItem('myCart')))
    };
    function goToDetails(id) {
        console.log(id);
        navigate(`/product/${id}`);
        window.location.reload();
    }
    const setting = {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            490: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
    }
  return (
    <div className="swiper new-swiper">
        <div className="swiper-wrapper">
            <Swiper {...setting}
            className="swiper home-swiper"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
                {newProducts.map((i) => (
                        !i.featured && <SwiperSlide key={i._id}>
                    <div className="new__content swiper-slide">
                        <div onClick={() => goToDetails(i._id)}>
                            <div className="new__tag">New</div>
                            <img src={require(`../../assets/img/${i.img}`)} alt="" className="new__img" />
                            <h3 className="new__title">{i.productName}</h3>
                            <span className="new__subtitle">{i.desc}</span>

                            <div className="new__prices">
                                <span className="new__price">{i.discountedPrice || i.price}</span>
                                {i.discountedPrice ? <span className="new__discount">{i.price}</span> : null}
                            </div>
                        </div>
                        <a onClick={() => addToCart(i)} className="button new__button">
                            <i className="bx bx-cart-alt new__icon"></i>
                        </a>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default ProductCarousel;
