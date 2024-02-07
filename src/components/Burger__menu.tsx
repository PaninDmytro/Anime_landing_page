import React from 'react';
import './Burger__menu.scss';

export const Burger__menu = ({
  setIsOpen,
}) => {
  const itemArrays = ['Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item'];
  const handleSetLink = () => {
    setIsOpen(false);
  }

  return (
    <>
      <div className='burger__container'>
        <div className='search__container'>
          <div className='search__block'>
            <input type='text' className='input__search' placeholder='Search for...'></input>
            <div className='search__icon'></div>
          </div>

          <ul className='items__burger'>
            {itemArrays.map(item => (
              <li
                className='item__burger'
                onClick={handleSetLink}
              >
                <a href='#' className='link__burger'>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className='item__burgers'>
          <div className='burger'>
            <div className='burger__icon phone__burger'></div>
            <p className='item__menu'>Menu item 1</p>
          </div >

          <div className='burger'>
            <div className='burger__icon filter__burger'></div>
            <p className='item__menu'>Menu item 2</p>
          </div>

          <div className='burger'>
            <div className='burger__icon android__burger'></div>
            <p className='item__menu'>Menu item 3</p>
          </div>

          <div className='burger'>
            <div className='burger__icon apple__burger'></div>
            <p className='item__menu'>Menu item 4</p>
          </div>
        </div >
      </div>
    </>
  );
};