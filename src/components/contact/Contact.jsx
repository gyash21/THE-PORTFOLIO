import React from 'react'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in Touch</h2>
        <span className="section__subtitle">Contact Me</span>


        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">
                  Write me your queries
                </h3>
            </div>


            <div className="contact__info">

              <div className="contact__card">
                <i className="bx bx contact__card-icon"></i>

                <h3 className="contact__card-title">Email</h3>
                  <span className="contact__card-data"></span>

                  <a href="" className="contact__data">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                
              </div>

              <div className="contact__card">
                <i className="bx bx contact__card-icon"></i>

                <h3 className="contact__card-title">Whatsapp</h3>
                  <span className="contact__card-data"></span>

                  <a href="" className="contact__data">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                
              </div>

              <div className="contact__card">
                <i className="bx bx contact__card-icon"></i>

                <h3 className="contact__card-title">Messenger</h3>
                  <span className="contact__card-data"></span>

                  <a href="" className="contact__data">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                
              </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">
                    Let's talk about your project.
                </h3>
            </div>
        </div>

    </section>
  )
}

export default Contact