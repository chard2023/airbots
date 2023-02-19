import React from "react";

function About() {
  return (
    <main className="main">
        <section className="about section container">
            <h2 className="breadcrumb__title">About Page</h2>
            <h3 className="breadcrumb__subtitle">Home {'>'} <span>About</span></h3>

            <div className="about__container grid">
                <img src="assets/img/about-img.jpg" alt="" className="about__img" />

                <div className="about__data">
                    <h2 className="section__title about__title">
                        Who We really are & <br /> why choose us
                    </h2>

                    <p className="about__description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                         Reprehenderit qui, atque labore animi fugit excepturi?
                    </p>

                    <div className="about__details">
                        <p className="about__details-description">
                            <i className="bx bxs-check-square about__details-icon"></i>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, fuga.
                        </p>
                        <p className="about__details-description">
                            <i className="bx bxs-check-square about__details-icon"></i>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, fuga.
                        </p>
                        <p className="about__details-description">
                            <i className="bx bxs-check-square about__details-icon"></i>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, fuga.
                        </p>
                        <p className="about__details-description">
                            <i className="bx bxs-check-square about__details-icon"></i>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, fuga.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    </main>
  );
}

export default About;
