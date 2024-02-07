import React, { useState } from 'react';
import './Header.scss';
import logo from '../pictures/logo.png';
import game__foto from '../pictures/game__photo.png';
import logo__dark from '../pictures/logo__dark.png';
import rate from '../pictures/rate.png';
import { useMediaQuery } from '../utils/useMediaQuery.ts';
import { Burger__menu } from './Burger__menu.tsx';
import cn from 'classnames';
import { Banner__menu } from './Banner__menu.jsx';

export const Header = ({
  setIsSwitchedTheme,
  isSwitchedTheme,
  setIsOpen,
  isOpen,
}) => {
  const [isMoreInfo, setIsMoreInfo] = useState(false);
  const [selectedRating, setSelectedRating] = useState(7);
  const isTablet = useMediaQuery('(min-width: 744px)');
  const isDesctop = useMediaQuery('(min-width: 1260px)');
  const ratingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const itemsArray = ['Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item'];

  return (
    <header className="header">
      <div className="header__icons">
        <div className='header__icons__wrapper'>
          <div className='menu__items'>
            {(isTablet || isDesctop) && (
              <>
                <div className='menu'>
                  <a href='#' className='menu__link'>
                    <div className='menu__icon phone__icon'></div>
                    <p className='menu__item'>Menu item 1</p>
                  </a>
                </div >

                <div className='menu'>
                  <a href='#' className='menu__link'>
                    <div className='menu__icon filter__icon'></div>
                    <p className='menu__item'>Menu item 2</p>
                  </a>
                </div>

                <div className='menu'>
                  <a href='#' className='menu__link'>
                    <div className='menu__icon android__icon'></div>
                    <p className='menu__item'>Menu item 3</p>
                  </a>
                </div>
              </>
            )}

            {isDesctop && (
              <div className='menu'>
                <a href='#' className='menu__link'>
                  <div className='menu__icon apple__icon'></div>
                  <p className='menu__item'>Menu item 4</p>
                </a>
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

            <div
              className={cn("header__theme", {
                'header__theme__dark': isSwitchedTheme,
              })}
              onClick={() => setIsSwitchedTheme(!isSwitchedTheme)}
            >
              <div
                className={cn('header__switch', {
                  'dark__theme': isSwitchedTheme,
                })}
              >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn('header__banner__menu', {
          'header__banner__menu--dark': isSwitchedTheme,
        })}
      >
        <div className='header__logo'>
          <div className='header__menu'>
            {isSwitchedTheme
              ? (
                <img src={logo__dark} alt="logo" className='logo' />
              ) : (
                <img src={logo} alt="logo" className='logo' />
              )}

            {isDesctop && (
              <ul className='burger__items'>
                {itemsArray.map(item => (
                  <li className='burger__item' key={item}>
                    <a
                      href='#'
                      className={cn('burger__link', {
                        'burger__link--dark': isSwitchedTheme,
                      })}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {isDesctop
            ? (
              <div
                className={cn('search', {
                  'search--dark': isSwitchedTheme,
                })}
              >
                <input
                  type='text'
                  className={cn('search__input', {
                    'search__input--dark': isSwitchedTheme,
                  })}
                  placeholder='Search for...'
                ></input>
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
          <Burger__menu
            setIsOpen={setIsOpen}
          />
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
                      {ratingArray.map(rate => (
                        <li
                          className={cn('number__item', {
                            'selected__rate': rate <= selectedRating,
                            'number__item--dark': isSwitchedTheme,
                          })}
                          onClick={() => setSelectedRating(rate)}
                        >
                          {rate}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {!isDesctop && (
                  <div className='header__more__info'>
                    <p className='more__info'>More info</p>
                    <div className='burger__info' onClick={() => setIsMoreInfo(!isMoreInfo)}></div>
                  </div>
                )}
              </div>

              {(isMoreInfo && !isDesctop) && (
                <Banner__menu />
              )}
            </div>
          </div>
        )}
      </div>
    </header >
  )
}