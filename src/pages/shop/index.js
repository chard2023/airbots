import React from "react";
import { useState, useEffect } from "react";

import product_list from "../../assets/products.json";

function Shop() {
    const [myCart, setCart] = useState(JSON.parse(localStorage.getItem('myCart')) || []);
    var [products, setProducts] = useState(product_list);
    var [neww, setNeww] = useState(false);
    var [sale, setSale] = useState(false);
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
    
    function checkCartUpdates() {
        console.log("Check Updates")
        setCart(JSON.parse(localStorage.getItem('myCart')))
    };
    var newCount = 0;
    var saleCount = 0;
    for (let i = 0; i < product_list.length; i++) {
        if(product_list[i].newArrival) {
            newCount++;
        }
        if(product_list[i].discountedPrice != undefined && !product_list[i].featured) {
            saleCount++
        }
    }
    const handleFilters = (e, type) => {
        switch (type) {
            case "new":
                setNeww(neww = !neww);
                break;
            case "sale":
                setSale(sale = !sale);
                break;
            default:
                break;
        }
        console.log("New: ",neww, "Sale: ",sale)
        let newList = [];
        if (neww && sale) {
            console.log("1","New", neww, "Sale", sale)
            newList = product_list.filter(product => product.newArrival && product.discountedPrice);
            setProducts(product_list);
        } else if (neww && !sale) {
            console.log("2","New", neww, "Sale", sale)
            newList = product_list.filter(product => product.newArrival && !product.discountedPrice);
            setProducts(newList);
        } else if (!neww && sale) {
            console.log("3","New", neww, "Sale", sale)
            newList = product_list.filter(product => product.discountedPrice != undefined);
            setProducts(newList);
        } else {
            console.log("4","New", neww, "Sale", sale)
            setProducts(product_list);
        }
    }
    useEffect(() => {
        window.addEventListener('updateMyCart', checkCartUpdates);
    }, []);
    const origPrice = {
        marginLeft: "8px"
    }
  return (
    <main className="main">
        <section className="shop section container">
            <h2 className="breadcrumb__title">Shop Page</h2>
            <h3 className="breadcrumb__subtitle">Home {'>'} <span>Shop</span></h3>

            <div className="shop__container grid">
                <div className="sidebar">
                    <h3 className="filter__title">Select Filters</h3>
                    <div className="filter__content">
                        <h3 className="filter__subtitle">Condition</h3>
                        <div className="filter">
                        
                            <input type="checkbox" name="new" id="new" checked={neww} onChange={(e) => handleFilters(e, "new")} />
                            <p>New</p> <span>({newCount})</span>
                        </div>
                        <div className="filter">
                            <input type="checkbox" name="sale" id="sale" checked={sale} onChange={(e) => handleFilters(e, "sale")} />
                            <p>Sale</p> <span>({saleCount})</span>
                        </div>
                    </div>
                    <div className="filter__content">
                        <h3 className="filter__subtitle">Series</h3>


                        <div className="filter">
                            <input type="checkbox" name="" id="" />
                            <p>X-Series</p> <span>(0)</span>
                        </div>
                        <div className="filter">
                            <input type="checkbox" name="" id="" />
                            <p>Z-Drone</p> <span>(0)</span>
                        </div>
                        <div className="filter">
                            <input type="checkbox" name="" id="" />
                            <p>Legion</p> <span>(0)</span>
                        </div>
                    </div>
                    <div className="filter__content">
                        <h3 className="filter__subtitle">Categories</h3>
                        <div className="filter">
                            <input type="checkbox" name="" id="" />
                            <p>Drone</p> <span>(3)</span>
                        </div>
                        <div className="filter">
                            <input type="checkbox" name="" id="" />
                            <p>Remote</p> <span>(0)</span>
                        </div>
                        <div className="filter">
                            <input type="checkbox" name="" id="" />
                            <p>Series</p> <span>(6)</span>
                        </div>
                        <div className="filter">
                            <input type="checkbox" name="" id="" />
                            <p>Others</p> <span>(0)</span>
                        </div>
                    </div>
                    <div className="filter__content">
                        <h3 className="filter__subtitle">Color</h3>
                        <div className="filter">
                            <input type="checkbox" name="" id="" />
                            <p>Black</p> <span>(1)</span>
                        </div>
                        <div className="filter">
                            <input type="checkbox" name="" id="" />
                            <p>White</p> <span>(3)</span>
                        </div>
                        <div className="filter">
                            <input type="checkbox" name="" id="" />
                            <p>Camo</p> <span>(0)</span>
                        </div>
                    </div>
                </div>
                
                <div className="shop__items grid">
                    {products.map((i, index) => ( !i.featured && 
                        <div key={index} className="shop__content" data-condition="new">
                            <div className="shop__tag">{i.discountedPrice ? "Sale": i.newArrival ? "New": ""}</div>
                            <a href={`/product/${i._id}`}>
                                <img src={require(`../../assets/img/${i.img}`)} alt="" className="shop__img" />
                            </a>
                            <h3 className="shop__title">{i.productName}</h3>
                            <span className="shop__subtitle">{i.desc}</span>

                            <span className="new__price">${i.discountedPrice || i.price}</span>
                                {i.discountedPrice ? <span className="new__discount" style={origPrice}>${i.price}</span> : null}

                            {/* <div className="shop__prices">
                                <span className="shop__price">${i.discountedPrice ? i.discountedPrice : i.price}</span>
                            </div> */}
                            <a onClick={() => addToCart(i)} className="button shop__button">
                                <i className="bx bx-cart-alt shop__icon"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pagination">
                <i className="bx bx-chevron-left pagination__icon"></i>

                <span className="current">1</span>
                <span>2</span>
                <span>3</span>
                <span>&middot; &middot; &middot;</span>
                <span>9</span>

                <i className="bx bx-chevron-right pagination__icon"></i>

            </div>
        </section>
    </main>
  );
}

export default Shop;
