import React from 'react'

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>



      <section__container className="container grid">
        <div className="services__content">
          <div>
            <i className="uil uil services__icon"></i>
             <h3 className="services__title">
              
              </h3> 
            
          </div>

          <span className="services__button"> View More {" "} <i className="uil uil-arrow-right services__button-icon"></i></span>


          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil times services__modal-close">

              </i>

              <h3 className="services__modal-title">

              </h3>
              <p className="services__modal-description">Providing quality and exceptional work to clients and companies</p>

              <ul className="service__modal services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Develops UX/UI Interface</p>
                </li>


                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web App Development</p>
                </li>


                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Design and Mockup</p>
                </li>


                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Brand Identity</p>
                </li>


                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Content Marketing</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section__container>

    </section>
  )
}

export default Services