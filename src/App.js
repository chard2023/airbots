import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from 'react-router';
// Header nav layout
import Header from './components/header';
// Footer layout
import Footer from './components/footer';
// Pages
import Home from './pages/home';
import Shop from './pages/shop';
import Blog from './pages/blog';
import FQA from './pages/fqa';
import Contact from './pages/contact';
import Product from './pages/product';
import About from './pages/about';
import './App.css';
function App() {
  const styleSwitcher = useRef(null);
  const [isActive, switcher] = useState(false);
  const toggSwitcher = () => {
    switcher((prevState) => !prevState);
  };
  function handleScroll() {
    switcher(false)
  }
  window.addEventListener('scroll', handleScroll);

  const [color, setColor] = useState('color-1');

  const handleColorChange = async (color) => {
    setColor(color);
    await require(`./assets/css/colors/${color}.css`);
  };
  useEffect(() => {
    handleColorChange('color-1')
  }, []);
  return (
    <>
      <link rel="stylesheet" href={`./assets/css/colors/${color}.css`} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/fqa" element={<FQA />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/product/:id" element={<Product />}/>
      </Routes>
      <Footer/>
      <div className={`style__switcher ${isActive?'open':''}`} >
        <div className="style__switcher-toggler s__icon" ref={styleSwitcher} onClick={toggSwitcher}>
            <i className="bx bxs-cog bx-spin"></i>
        </div>
        <h4>Theme Colors</h4>
        <div className="theme__colors js-theme-colors">
            <button type="button" data-js-theme-color="color-1" className={`js-theme-color-item theme__button color-1 ${color === 'color-1'? 'active': ''}`} onClick={() => handleColorChange('color-1')}><i className="bx bx-check"></i></button>
            <button type="button" data-js-theme-color="color-2" className={`js-theme-color-item theme__button color-2 ${color === 'color-2'? 'active': ''}`} onClick={() => handleColorChange('color-2')}><i className="bx bx-check"></i></button>
            <button type="button" data-js-theme-color="color-3" className={`js-theme-color-item theme__button color-3 ${color === 'color-3'? 'active': ''}`} onClick={() => handleColorChange('color-3')}><i className="bx bx-check"></i></button>
            <button type="button" data-js-theme-color="color-4" className={`js-theme-color-item theme__button color-4 ${color === 'color-4'? 'active': ''}`} onClick={() => handleColorChange('color-4')}><i className="bx bx-check"></i></button>
            <button type="button" data-js-theme-color="color-5" className={`js-theme-color-item theme__button color-5 ${color === 'color-5'? 'active': ''}`} onClick={() => handleColorChange('color-5')}><i className="bx bx-check"></i></button>
        </div>
    </div>
    </>
  )
}

export default App;
