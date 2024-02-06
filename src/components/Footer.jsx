import React from 'react';
import { useMediaQuery } from '../utils/useMediaQuery.ts';
import './Footer.scss';
import logo from '../pictures/logo.png'

export const Footer = () => {
  const isTablet = useMediaQuery('(min-width: 744px)');
  const isDesctop = useMediaQuery('(min-width: 1260px)');

  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="about__us">
          <div className='logo__container'>
            <img src={logo} alt="logo" className='logo' />
          </div>

          <div className="footer__info">
            <p className='footer__description footer__description--margin'>Lorem Ipsum is simply dummy</p>

            <p className='footer__description footer__instruction'>
              when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has
              survived not only five
            </p>
          </div>

          <div className='footer__icons'>
            <a href='#' className="facebook__footer footer__icon"></a>
            <a href='#' className="twitter__footer footer__icon"></a>
            <a href='#' className="instagram__footer footer__icon"></a>
            <a href='#' className="youtube__footer footer__icon"></a>
            <a href='#' className="gmail__footer footer__icon"></a>
            <a href='#' className="wifi__footer footer__icon"></a>
          </div>
        </section>

        <div className='footer__links__wrapper'>
          <section className='footer__links'>
            <div className='categhory__container'>
              {(isTablet && !isDesctop)
                ? (
                  <h2 className='categhory'>Guides and Tips</h2>
                ) : (
                  <h2 className='categhory'>Categhory</h2>
                )}

              <ul className="items">
                <li className="item"><a href="#" className='item__link'>item 1</a></li>
                <li className="item"><a href="#" className='item__link'>item 2</a></li>
                <li className="item"><a href="#" className='item__link'>item 3</a></li>
                <li className="item"><a href="#" className='item__link'>item 4</a></li>
                <li className="item"><a href="#" className='item__link'>item 5</a></li>
                <li className="item"><a href="#" className='item__link'>item 6</a></li>
              </ul>
            </div>

            <div className='play__container'>
              <h2 className='categhory'>Play better</h2>

              <ul className="items">
                <li className="item"><a href="#" className='item__link'>item 1</a></li>
                <li className="item"><a href="#" className='item__link'>item 2</a></li>
                <li className="item"><a href="#" className='item__link'>item 3</a></li>
                <li className="item"><a href="#" className='item__link'>item 4</a></li>
                <li className="item"><a href="#" className='item__link'>item 5</a></li>
                <li className="item"><a href="#" className='item__link'>item 6</a></li>
              </ul>
            </div>

            <div className='useful__container'>
              <h2 className='categhory'>Useful links</h2>

              <ul className="items">
                <li className="item"><a href="#" className='item__link'>link</a></li>
                <li className="item"><a href="#" className='item__link'>link</a></li>
                <li className="item"><a href="#" className='item__link'>link</a></li>
                <li className="item"><a href="#" className='item__link'>link</a></li>
                <li className="item"><a href="#" className='item__link'>link</a></li>
              </ul>
            </div>
          </section>

          <p className='copyright'>Copyright © 2024. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}