import React, { useRef } from "react";

function FQA_Item({ header, content, isOpen, onToggle }) {
    const contentRef = useRef(null);
    const toggleItem = () => {
        onToggle();
    };
  return (
    <div className={`questions__item ${isOpen ? 'accordion-open' : ''}`}>
        <header className="questions__header" onClick={toggleItem}>
            <i className="bx bx-plus questions__icon"></i>
            <h3 className="questions__item-title">{header}</h3>
        </header>
        <div className="questions__content" ref={contentRef} style={{ height: isOpen ? contentRef.current.scrollHeight + 'px'  : 0 }}>
            <p className="questions__description">{content}</p>
        </div>
    </div>
  );
}

export default FQA_Item;