import React from 'react';
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
    
    const scrolled = useScrollHandler();
    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add('show-menu')
        })
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if (navClose) {
        navClose.addEventListener("click", () => {
            navMenu.classList.remove('show-menu')
        })
    }

    /*===== CLOSE MENU =====*/
    const navLinks = document.querySelectorAll('.nav__link')

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    })
    /*=============== SHOW CART ===============*/
    const cart = document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop'),
    cartClose = document.getElementById('cart-close')


    /*===== CART SHOW =====*/
    /* Validate if constant exists */
    if (cartShop) {
    cartShop.addEventListener("click", () => {
        cart.classList.add('show-cart')
    })
    }

    /*===== CART HIDDEN =====*/
    /* Validate if constant exists */
    if (cartClose) {
        cartClose.addEventListener("click", () => {
        cart.classList.remove('show-cart')
        })
    }
    const [myCart, setCart] = useState(JSON.parse(localStorage.getItem('myCart')) || []);

    var total = 0;
    for (let i = 0; i < myCart.length; i++) {
        let itemTotal = 0;
        let price = myCart[i].discountedPrice || myCart[i].price;
        let qty = myCart[i].qty || 1;
        itemTotal = price*qty;
        total += itemTotal
    }
    const increaseQty = (objectId) => {
        const index = myCart.findIndex(i => i._id === objectId);
        if (index >= 0) {
            myCart[index].qty++;
            localStorage.setItem('myCart', JSON.stringify(myCart));
        }
        const event = new Event('updateMyCart');
        window.dispatchEvent(event);
    }
    const decreaseQty = (objectId) => {
        const index = myCart.findIndex(i => i._id === objectId);
        if (index >= 0) {
            if(myCart[index].qty>1)myCart[index].qty--
            localStorage.setItem('myCart', JSON.stringify(myCart));
        }
        const event = new Event('updateMyCart');
        window.dispatchEvent(event);
    }
    const removeItem = (objectId) => {
        const updatedCart = myCart.filter((item) => item._id !== objectId);
        localStorage.setItem('myCart', JSON.stringify(updatedCart));
        const event = new Event('updateMyCart');
        window.dispatchEvent(event);

        setCart(updatedCart);
    };
    useEffect(() => {
        window.addEventListener('updateMyCart', updateCart);
    }, []);
    function updateCart() {
        setCart(JSON.parse(localStorage.getItem('myCart')))
    };
    const [email, setEmail] = useState('');
    const [validEmail, isValidEmail] = useState(Boolean);
    const [password, setPassword] = useState('');
    const [validPassword, isValidPassword] = useState(Boolean);
    
    const handleOnChange = (event, type, value ) => {
        event.preventDefault();
let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        switch (type) {
            case 'email':
                setEmail(value);
                isValidEmail(re.test(value));
                break;
            case 'password':
                setPassword(value);
                console.log(value, value.length);
                isValidPassword(value.length>=6);
                break;
            default:
                break;
        };
        
        if (validEmail && validPassword) {
            isSumitted(false);
        }
    }
    const [submitted, isSumitted] = useState(Boolean);
    const submitForm = (event) => {
        event.preventDefault();
        isSumitted(true);
        if (validEmail && validPassword) {
            let payload = {email: email, password: password}
            localStorage.setItem("login", JSON.stringify(payload)); 
            setUser(JSON.parse(localStorage.getItem("login")));
            openLoginFrom(false)
        }
    }
    const [isloginOpen, openLoginFrom] = useState(false);
    const toggleLogin = (event) => {
        event.preventDefault();
        openLoginFrom(!isloginOpen)
    }
    const invalid = {
        color: "red"
    }
    const disabled = {
        opacity: ".6"
    }
    const enabled = {}
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("login"))||null);
    const logout = (event) => {
        event.preventDefault();
        localStorage.removeItem("login");
        setUser(null);
    }
  return (
    <>
    <header className={`header ${!scrolled ? 'scroll-header':''}`} id="header">
        <nav className="nav container">
            <Link to="/" className="nav__logo">
                <i className="bx bxl-xing nav__logo-icon"></i>
                Airbots</Link>
            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink
                        to="/" 
                        activeclassname="active-link" 
                        className={({ isActive }) =>
                            isActive ? "nav__link active-link" : "nav__link"
                        }>Home</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink
                        to="/shop"
                        activeclassname="active-link"
                        className={({ isActive }) =>
                            isActive ? "nav__link active-link" : "nav__link"
                        }>Shop</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink
                        to="/blog"
                        activeclassname="active-link"
                        className={({ isActive }) =>
                            isActive ? "nav__link active-link" : "nav__link"
                        }>Blog</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink
                        to="/fqa"
                        activeclassname="active-link"
                        className={({ isActive }) =>
                            isActive ? "nav__link active-link" : "nav__link"
                        }>FAQs</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink
                        to="/contact"
                        activeclassname="active-link"
                        className={({ isActive }) =>
                            isActive ? "nav__link active-link" : "nav__link"
                        }>Contact</NavLink>
                    </li>
                </ul>

                <div className="nav__close" id="nav-close">
                    <i className="bx bx-x login__close" id="nav-close"></i>
                </div>
            </div>

            <div className="nav__btns">
                <div className="login__toggle" id="login-button" onClick={toggleLogin}>
                    <i className="bx bxs-user-circle"></i>
                </div>
                <div className="nav__shop" id="cart-shop">
                    <i className='bx bx-shopping-bag'></i>
                    <span className="cart-count">{myCart.length}</span>
                </div>
                <div className="nav__toggle" id="nav-toggle">
                    <i className="bx bx-grid-alt"></i>
                </div>
            </div>
        </nav>
    </header>
    {/* <!--=============== CART ===============--> */}
    <div className="cart" id="cart">
        <i className="bx bx-x cart__close" id="cart-close"></i>
        <h2 className="cart__title-center">My cart</h2>
        <div className="cart__container">
        {myCart.map((i) => (
            <article key={i._id} className="cart__card">
                <div className="cart__box" >
                    <img src={require(`../../assets/img/${i.img}`)} alt="" className="cart__img" />
                </div>

                <div className="cart__details">
                    <h3 className="cart__title">{i.productName}</h3>
                    <span className="cart__price">{i.discountedPrice || i.price}</span>
                </div>

                <div className="cart__amount">
                    <div className="cart__amount-content">
                        <span className="cart__amount-box" onClick={() => decreaseQty(i._id)}>
                            <i className="bx bx-minus"></i>
                        </span>
                        <span className="cart__amount-number">{i.qty}</span>
                        <span className="cart__amount-box" onClick={() => increaseQty(i._id)}>
                            <i className="bx bx-plus"></i>
                        </span>
                    </div>
                    <span className="bx bx-trash-alt cart__amount-trash" onClick={() => removeItem(i._id)}></span>
                </div>
            </article>
        ))}
        </div>

        <div className="cart__price">
            <span className="cart__prices-item"></span>
            <span className="cart__prices-total">${total.toFixed(2)}</span>
        </div>
    </div>
    {/* <!--=============== LOGIN ===============--> */}
    <div className={`login ${isloginOpen?'show-login':''}`} id="login">
        {!user ? 
            <div>
                <i className="bx bx-x login__close" id="login-close" onClick={toggleLogin}></i>
                <h2 className="login__title-center">Login</h2>

                <form onSubmit={submitForm} className="login__form grid">
                    <div className={`login__content ${!validEmail ? 'invalid' : ''}`}>
                        <label htmlFor="email" className="login__label">Email</label>
                        <input 
                        type="email" 
                        id="email" 
                        className="login__input" 
                        value={ email } 
                        onChange={(e) => handleOnChange( e, "email", e.target.value)}/>
                        { (!validEmail && email) && <small style={invalid}>Email is not valid!</small>}
                    </div>
                    <div className="login__content">
                        <label htmlFor="password" password="password" className="login__label">Password</label>
                        <input 
                        type="password" 
                        id="password" 
                        className="login__input" 
                        onChange={(e) => handleOnChange(e, "password", e.target.value)}/>
                        { (!validPassword && password) && <small style={invalid}>Password must be at least 6+ characters</small>}
                    </div>
                    {/* <div style={note}>
                        <p>Email: john_rico123@gmail.com</p>
                        <p>Password: qwe123</p>
                    </div> */}
                    <div>
                        <button type="submit" className="button" style={submitted ? disabled : enabled} disabled={submitted}>Sign in</button>
                    </div>
                    <div>
                        <p className="signup">Not a memeber? <a href="/">Sign up now</a></p>
                    </div>
                </form>
            </div>
        :   <div>
                <i className="bx bx-x login__close" id="login-close" onClick={toggleLogin}></i>
                <h2 className="login__title-center">Hello, {user.email}</h2>
                <div className="login__title-center">
                    <button className="button" onClick={logout}>Logout</button>
                </div>
        </div>
        }
    </div>
    </>
  )
}
export const useScrollHandler = () => {
    // setting initial value to true
    const [scroll, setScroll] = useState(1)
    
    // running on mount
    useEffect(() => {
      const onScroll = () => {
        const scrollCheck = window.scrollY < 10
        if (scrollCheck !== scroll) {
          setScroll(scrollCheck)
        }
      }
    
    // setting the event handler from web API
    document.addEventListener("scroll", onScroll)
    
    // cleaning up from the web API
     return () => {
       document.removeEventListener("scroll", onScroll)
      }
    }, [scroll, setScroll])
    
    return scroll
    
}

export default Header;
