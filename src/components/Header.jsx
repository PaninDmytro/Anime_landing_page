import React, { useState } from 'react';
import './Header.scss';
import logo from '../pictures/logo.png';
import game__foto from '../pictures/game__photo.png';
import rate from '../pictures/rate.png';
import { useMediaQuery } from '../utils/useMediaQuery.ts';
import { Burger__menu } from './Burger__menu.tsx';
import cn from 'classnames';
import { Banner__menu } from './Banner__menu.jsx';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreInfo, setIsMoreInfo] = useState(false);
  const isTablet = useMediaQuery('(min-width: 744px)');
  const isDesctop = useMediaQuery('(min-width: 1260px)');

  return (
    <header className="header">
      <div className="header__icons">
        <div className='menu__items'>
          {(isTablet || isDesctop) && (
            <>
              <div className='menu'>
                <div className='menu__icon phone__icon'></div>
                <p className='menu__item'>Menu item 1</p>
              </div >

              <div className='menu'>
                <div className='menu__icon filter__icon'></div>
                <p className='menu__item'>Menu item 2</p>
              </div>

              <div className='menu'>
                <div className='menu__icon android__icon'></div>
                <p className='menu__item'>Menu item 3</p>
              </div>
            </>
          )}

          {isDesctop && (
            <div className='menu'>
              <div className='menu__icon apple__icon'></div>
              <p className='menu__item'>Menu item 4</p>
            </div>
          )}
        </div >

        <div className="header__add">
          <div className="header__icon__container">
            <a href='#' className="facebook__icon header__icon"></a>
            <a href='#' className="twitter__icon header__icon"></a>
            <a href='#' className="instagram__icon header__icon"></a>
            <a href='#' className="youtube__icon header__icon"></a>
            <a href='#' className="gmail__icon header__icon"></a>
            <a href='#' className="wifi__icon header__icon"></a>
          </div>

          <div className="header__theme">
            <div className='header__switch'></div>
          </div>
        </div>
      </div>

      <div className='header__banner__menu'>
        <div className='header__logo'>
          <div className='header__menu'>
            <img src={logo} alt="logo" className='logo' />

            {isDesctop && (
              <ul className='burger__items'>
                <li className='burger__item'><a href='#' className='burger__link'>Item</a></li>
                <li className='burger__item'><a href='#' className='burger__link'>Item</a></li>
                <li className='burger__item'><a href='#' className='burger__link'>Item</a></li>
                <li className='burger__item'><a href='#' className='burger__link'>Item</a></li>
                <li className='burger__item'><a href='#' className='burger__link'>Item</a></li>
                <li className='burger__item'><a href='#' className='burger__link'>Item</a></li>
                <li className='burger__item'><a href='#' className='burger__link'>Item</a></li>
                <li className='burger__item'><a href='#' className='burger__link'>Item</a></li>
              </ul>
            )}
          </div>

          {isDesctop
            ? (
              <div className='search'>
                <input type='text' className='search__input' placeholder='Search for...'></input>
                <div className='search__icon'></div>
              </div>
            ) : (
              <div
                className={cn({
                  'burger__menu': isOpen === false,
                  'close': isOpen === true,
                })}
                onClick={() => setIsOpen(!isOpen)}></div>
            )
          }
        </div>

        {(isOpen && !isDesctop) ? (
          <Burger__menu />
        ) : (
          <div className='header__info'>
            <div className='header__info__wrapper'>
              <div className='header__banner'>
                <div className='header__block'>
                  <div className='header__banner__content'>
                    <img src={game__foto} alt='game__foto' className='header__game__photo'></img>

                    <div className='header__version'>
                      <p className='header__content__text'>Lorem Ipsum is simply dummy</p>

                      {isDesctop && (
                        <div className='header__download'>
                          <div className='brand android'>
                            <div className='barand__icon android__icon'></div>
                            <p className='brand__text'>Android</p>
                          </div>

                          <div className='brand ios'>
                            <div className='barand__icon ios__icon'></div>
                            <p className='brand__text'>iOS</p>
                          </div>

                          <div className='brand ps'>
                            <div className='download__icon'></div>
                            <p className='brand__text'>Download on PC</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {isDesctop && (
                    <div className='rate'>
                      <img src={rate} alt='rate' className='rate__image'></img>

                      <div>
                        <p className='players'>Players</p>
                        <p className='votes'>12 votes</p>
                        <div className='your__rating'>
                          <p className='rating'>Your rating:</p>
                          <p className='number'>5.2</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className='rate__info'>
                {isDesctop && (
                  <>
                    <ul className='rate__items'>
                      <li className='rate__item'><a href='#' className='rate__link'>Lorem Ipsum is simply dummy</a></li>
                      <li className='rate__item'><a href='#' className='rate__link'>item</a></li>
                      <li className='rate__item'><a href='#' className='rate__link'>item</a></li>
                      <li className='rate__item'><a href='#' className='rate__link'>item</a></li>
                      <li className='rate__item'><a href='#' className='rate__link'>item</a></li>
                    </ul>

                    <ul className='number__items'>
                      <li className='number__item note'>Note</li>
                      <li className='number__item'>1</li>
                      <li className='number__item'>2</li>
                      <li className='number__item'>3</li>
                      <li className='number__item'>4</li>
                      <li className='number__item'>5</li>
                      <li className='number__item'>6</li>
                      <li className='number__item'>8</li>
                      <li className='number__item'>9</li>
                      <li className='number__item'>10</li>
                    </ul>
                  </>
                )}

                {!isDesctop && (
                  <>
                    <div className='header__more__info'>
                      <p className='more__info'>More info</p>
                      <div className='burger__info' onClick={() => setIsMoreInfo(!isMoreInfo)}></div>
                    </div>

                    {isMoreInfo && (
                      <Banner__menu />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header >
  )
}