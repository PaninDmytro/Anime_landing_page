import React from 'react';
import { useMediaQuery } from '../utils/useMediaQuery.ts';
import './Main.scss';
// import arrow from '../icons/right__arrow.png'
import card__picture from '../pictures/card__picture.png'


export const Main = () => {
  const isTablet = useMediaQuery('(min-width: 744px)');
  const isDesctop = useMediaQuery('(min-width: 1260px)');

  return (
    <main className="main container">
      <div className='main__header__wrapper'>
        <section className="main__header">
          <div className='main__title'>
            <div className='main__navigation'>
              <div className='nav__item'>
                <p className=' nav__text'>Home {'>'} Lorem Ipsum is {'>'} <span className='nav__active'>Lorem Ipsum is simply dummy</span></p>
              </div>
            </div>

            <h1 className='main__lorem'>
              Lorem Ipsum is simply dummy
            </h1>
          </div>

          <article>
            <p className='main__description'>
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </article>
        </section>

        <section className='main__content'>
          <div className='similar'>
            <h3 className='similar__articles'>Similar articles</h3>
            <div className='similar__block'></div>
          </div>

          <article className='main__cards'>
            <div className='main__card'>
              <img src={card__picture} alt='card__picture' className='card__image'></img>

              <div>
                <h2 className='card__description'>Lorem Ipsum is simply dummy</h2>

                <div className='data__container'>
                  <div className='data data__user'>
                    <div className='user'></div>
                    <p className='icon__text'>alco</p>
                  </div>

                  <div className='data'>
                    <div className='clock'></div>
                    <p className='icon__text'>26 janvier 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='main__card'>
              <img src={card__picture} alt='card__picture' className='card__image'></img>

              <div>
                <h2 className='card__description'>Lorem Ipsum is simply dummy</h2>

                <div className='data__container'>
                  <div className='data data__user'>
                    <div className='user'></div>
                    <p className='icon__text'>alco</p>
                  </div>

                  <div className='data'>
                    <div className='clock'></div>
                    <p className='icon__text'>26 janvier 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='main__card'>
              <img src={card__picture} alt='card__picture' className='card__image'></img>

              <div>
                <h2 className='card__description'>Lorem Ipsum is simply dummy</h2>

                <div className='data__container'>
                  <div className='data data__user'>
                    <div className='user'></div>
                    <p className='icon__text'>alco</p>
                  </div>

                  <div className='data'>
                    <div className='clock'></div>
                    <p className='icon__text'>26 janvier 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='main__card'>
              <img src={card__picture} alt='card__picture' className='card__image'></img>

              <div>
                <h2 className='card__description'>Lorem Ipsum is simply dummy</h2>

                <div className='data__container'>
                  <div className='data data__user'>
                    <div className='user'></div>
                    <p className='icon__text'>alco</p>
                  </div>

                  <div className='data'>
                    <div className='clock'></div>
                    <p className='icon__text'>26 janvier 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>

      {isDesctop && (
        <div className='main__ads'>
          <div className='ads__block'>
            <div className='ads__content'>
              <p className='ads__text'>ads</p>
              <p className='ads__size'>300x600</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}