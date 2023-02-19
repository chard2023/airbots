import React from "react";

function Contact() {
  return (
    <main className="main">
        <section className="contact section container">
            <h2 className="breadcrumb__title">Contact Page</h2>
            <h3 className="breadcrumb__subtitle">Home {'>'} <span>Contact us</span></h3>

            <div className="contact__container grid">
                <div>
                    <div className="contact__information">
                        <i className="bx bx-phone contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Call us</h3>
                            <span className="contact__subtitle">0999999</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i class="bx bx-mail-send contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">airbot.support@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i class="bx bxs-location-plus contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">1992 Cebu Philippines</span>
                        </div>
                    </div>
                </div>

                <form action="" className="contact__form grid">
                    <div className="contact__input grid">
                        <div className="contact__content">
                            <label  className="contact__label">Name</label>
                            <input type="text" className="contact__input" />
                        </div>
                        <div className="contact__content">
                            <label  className="contact__label">Email</label>
                            <input type="email" className="contact__input" />
                        </div>
                    </div> 

                    <div className="contact__content">
                        <label  className="contact__label">Subject</label>
                        <input type="text" className="contact__input" />
                    </div>

                    <div className="contact__content">
                        <label  className="contact__label">Message</label>
                        <textarea name="" id="" cols="0" rows="7" className="contact__input" ></textarea>
                    </div>

                    <div>
                        <a href="#" className="button">Send Message</a>
                    </div>
                </form>
            </div>
        </section>
    </main>
  );
}

export default Contact;
