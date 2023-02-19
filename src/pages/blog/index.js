import React from "react";

import blogs from "./blogs.json";
function Blog() {
    const blogImg = {
        width: "100%",
        display: "block",
        height: "100%",
        margin: "0px"
    }
  return (
    <main className="main">
        <section className="blog section container">
            <h2 className="breadcrumb__title">Blog Page</h2>
            <h3 className="breadcrumb__subtitle">Home {'>'} <span>Blog</span></h3>

            <div className="blog__container grid">
                {blogs.map((i) => (
                    <div className="blog__post grid" key={i._id}>
                        <img src={require(`../../assets/img/${i.img}`)} style={blogImg} alt="" className="blog__img" />

                        <div className="blog__info">
                            <p className="blog__details">{i.desc}</p>
                            <h3 className="blog__title">{i.topic}</h3>
                            <p className="blog__date">By {i.author} / {i.date}</p>
                            <div className="read__more">
                                <a href="/" className="button--link button--flex">Read More <i
                                        className="bx bx-right-arrow-alt button__icon"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div> 

            <div className="pagination">
                <i className="bx bx-chevron-left pagination__icon"></i>

                <span className="current">1</span>
                <span>2</span>
                <span>3</span>
                <span>&middot; &middot; &middot;</span>
                <span>9</span>

                <i className="bx bx-chevron-left pagination__icon"></i>

            </div>
        </section>
    </main>
  );
}

export default Blog;
