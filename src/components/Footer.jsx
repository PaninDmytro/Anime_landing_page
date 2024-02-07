import React from 'react';
import { useMediaQuery } from '../utils/useMediaQuery.ts';
import './Footer.scss';
import logo from '../pictures/logo.png';
import logo__dark from '../pictures/logo__dark.png';
import cn from 'classnames';

export const Footer = ({
  isSwitchedTheme,
}) => {
  const isTablet = useMediaQuery('(min-width: 744px)');
  const isDesctop = useMediaQuery('(min-width: 1260px)');
  const itemsArray = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'];
  const linksArray = ['link', 'link', 'link', 'link', 'link'];

  return (
    <footer
      className={cn("footer", {
        'footer--dark': isSwitchedTheme,
      })}
    >
      <div className="footer__container">
        <section
          className={cn("about__us", {
            "about__us--dark": isSwitchedTheme,
          })}
        >
          <div className='logo__container'>
            {isSwitchedTheme
              ? (
                <img src={logo__dark} alt="logo" className='footer__logo' />
              ) : (
                <img src={logo} alt="logo" className='footer__logo' />
              )}
          </div>

          <div className="footer__info">
            <p
              className={cn('footer__description footer__description--margin', {
                'footer__description--dark': isSwitchedTheme,
              })}
            >
              Lorem Ipsum is simply dummy
            </p>

            <p
              className={cn('footer__description footer__instruction', {
                'footer__description--dark': isSwitchedTheme,
              })}
            >
              when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has
              survived not only five
            </p>
          </div>

          <div className='footer__icons'>
            <a
              href='#'
              className={cn("facebook__footer footer__icon", {
                'facebook__footer--dark': isSwitchedTheme,
              })}
            ></a>
            <a
              href='#'
              className={cn("twitter__footer footer__icon", {
                'twitter__footer--dark': isSwitchedTheme,
              })}
            ></a>
            <a
              href='#'
              className={cn("instagram__footer footer__icon", {
                'instagram__footer--dark': isSwitchedTheme,
              })}
            ></a>
            <a
              href='#'
              className={cn("youtube__footer footer__icon", {
                'youtube__footer--dark': isSwitchedTheme,
              })}
            ></a>
            <a
              href='#'
              className={cn("gmail__footer footer__icon", {
                'gmail__footer--dark': isSwitchedTheme,
              })}
            ></a>
            <a
              href='#'
              className={cn("wifi__footer footer__icon", {
                'wifi__footer--dark': isSwitchedTheme,
              })}
            ></a>
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
                {itemsArray.map(item => (
                  <li className="item"><a href="#" className='item__link'>{item}</a></li>
                ))}
              </ul>
            </div>

            <div className='play__container'>
              <h2 className='categhory'>Play better</h2>

              <ul className="items">
                {itemsArray.map(item => (
                  <li className="item"><a href="#" className='item__link'>{item}</a></li>
                ))}
              </ul>
            </div>

            <div className='useful__container'>
              <h2 className='categhory'>Useful links</h2>

              <ul className="items">
                {linksArray.map(link => (
                  <li className="item"><a href="#" className='item__link'>{link}</a></li>
                ))}
              </ul>
            </div>
          </section>

          <p className='copyright'>Copyright © 2024. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}