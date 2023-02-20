import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import ProductCarousel from '../../components/productCarousel';

import products from "../../assets/products.json";

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(products.find(item => item._id === id) || []);
    const [myCart, setCart] = useState(JSON.parse(localStorage.getItem('myCart')) || []);
    const [qty, setQty] = useState(1);
    
    function addToCart(item) {
        const index = myCart.findIndex(i => i._id === item._id);
        if (index >= 0) {
            myCart[index].qty++;
            localStorage.setItem('myCart', JSON.stringify(myCart));
        } else {
            item.qty = qty;
            myCart.push(item);
            localStorage.setItem('myCart', JSON.stringify(myCart));
        }
        const event = new Event('updateMyCart');
        window.dispatchEvent(event);
    }
    const increaseQty = (objectId) => {
        const index = myCart.findIndex(i => i._id === objectId);
        if (index >= 0) {
            myCart[index].qty++;
            localStorage.setItem('myCart', JSON.stringify(myCart));
            const event = new Event('updateMyCart');
            window.dispatchEvent(event);
        } else {
            console.log(index)
            let newQty = qty;
            newQty++
            setQty(newQty)
        }
    }
    const decreaseQty = (objectId) => {
        const index = myCart.findIndex(i => i._id === objectId);
        if (index >= 0) {
            if(myCart[index].qty>1) {
                myCart[index].qty--
                localStorage.setItem('myCart', JSON.stringify(myCart));
                const event = new Event('updateMyCart');
                window.dispatchEvent(event);
            }
        } else {
            if (qty>1) {
                let newQty = qty;
                newQty--
                setQty(newQty)
            }
        }
    }
    useEffect(() => {
        let isExistInCart = myCart.find(item => item._id === id);
        if (isExistInCart){
            setProduct(myCart.find(item => item._id === id));
            setQty(isExistInCart.qty);
        }
        window.addEventListener('updateMyCart', checkCartUpdates);
        window.scrollTo(0, 0);
    }, []);
    function checkCartUpdates() {
        console.log("PRODUCT PAGE Check Updates");
        let cartData = JSON.parse(localStorage.getItem('myCart'));
        let isProductExist = cartData.find(item => item._id === id);
        if (isProductExist) {
            setProduct(isProductExist)
            setQty(isProductExist.qty);
        } else {
            setQty(1);
            setProduct(products.find(item => item._id === id));
        }
        setCart(cartData);
    };
  return (
    <main className="main">
        <section className="details section container">
            <h2 className="breadcrumb__title">Details Page</h2>
            <h3 className="breadcrumb__subtitle">Home {'>'} <span>Details</span></h3>

            <div className="details__container grid">
                <div className="product__images grid">
                    <div className="product__img">
                        <div className="details__img-tag">New</div>
                        <img src={require(`../../assets/img/${product.img}`)} alt="" />
                    </div>

                    <div className="product__img">
                        <img src={require(`../../assets/img/${product.img}`)} alt="" />
                    </div>

                    <div className="product__img">
                        <img src={require(`../../assets/img/${product.img}`)} alt="" />
                    </div>

                    <div className="product__img">
                        <img src={require(`../../assets/img/${product.img}`)} alt="" />
                    </div>
                </div>

                <div className="product__info">
                    <p className="details__subtitle">Drone {'>'} Series X </p>
                    <h3 className="details__title">{product.productName}</h3>

                    <div className="rating">
                        <div className="stars">
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bx-star"></i>
                        </div>
                        <span className="reviews__count">40 + Reviews</span>
                    </div>

                    <div className="details__prices">
                        <span className="details__price">{product.discountedPrice}</span>
                        <span className="details__discount">{product.price}</span>
                        <span className="details__percentage">25% OFF</span>
                    </div>

                    <div className="details__description">
                        <h3 className="description__title">Product Details</h3>
                        <div className="description__details">
                            <p>{product.desc}</p>
                        </div>
                    </div>

                    <div className="cart__amount">
                        <div className="cart__amount-content">
                            <span className="cart__amount-box" onClick={() => decreaseQty(product._id)}>
                                <i className="bx bx-minus"></i>
                            </span>
                            <span className="cart__amount-number">{qty}</span>
                            <span className="cart__amount-box" onClick={() => increaseQty(product._id)}>
                                <i className="bx bx-plus"></i>
                            </span>
                        </div>
                        <i className="bx bx-heart cart__amount-heart"></i>
                    </div>
                    <a onClick={() => addToCart(product)} className="button">Add to Cart</a>
                </div>
            </div>
        </section>

        {/* <!--=============== RELATED PRODUCTS ===============--> */}
        <section className="related__products section">
            <h2 className="section__title">Related Products</h2>

            <div className="new__container container">
                <ProductCarousel type="relatedProducts"></ProductCarousel>
            </div>
        </section>
    </main>
  );
}

export default Product;
