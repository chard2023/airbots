import React, { useState } from "react";

import FQA_Item from "./fqa";
import faqData from "./faq.json";
function FQA() {
    const [openItemIndex, setOpenItemIndex] = useState(null);

    const toggleItem = (index) => {
        if (openItemIndex === index) {
        setOpenItemIndex(null);
        } else {
        setOpenItemIndex(index);
        }
    };
  return (
    <main className="main">
        <section className="questions section container">
            <h2 className="breadcrumb__title">FAQs Page</h2>
            <h3 className="breadcrumb__subtitle">Home {'>'} <span>FAQs</span></h3>

            <div className="questions__container grid">
                {faqData.map((item, index) => (
                    <FQA_Item
                    key={index}
                    header={item.header}
                    content={item.content}
                    isOpen={index === openItemIndex}
                    onToggle={() => toggleItem(index)}
                    />
                ))}
            </div>
        </section>
    </main>
  );
}

export default FQA;
