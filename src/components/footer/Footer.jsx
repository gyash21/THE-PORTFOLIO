import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">
                Yash Gupta
            </h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>


            <div className="footer__social">

            <a href="https://yashgupta.blog" className="footer__social-link" target="_blank"><i class="bx bxl-facebook"></i></a>

            <a href="https://instagram.com/decode.yash" className="footer__social-link" target="_blank"><i class="bx bxl-instagram"></i></a>

            <a href="https://twitter.com/gyash21" className="footer__social-link" target="_blank"><i class="bx bxl-twitter"></i></a>
            </div>

        </div>
    </footer>
  )
}

export default Footer