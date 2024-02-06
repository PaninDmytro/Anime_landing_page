import React from 'react';
import { useMediaQuery } from '../utils/useMediaQuery.ts';
import './Burger__menu.scss';

export const Burger__menu = () => {
  return (
    <>
      <div className='burger__container'>
        <div className='search__container'>
          <div className='search__block'>
            <input type='text' className='search__input' placeholder='Search for...'></input>
            <div className='search__icon'></div>
          </div>

          <ul className='items__burger'>
            <li className='item__burger'><a href='#' className='link__burger'>Item</a></li>
            <li className='item__burger'><a href='#' className='link__burger'>Item</a></li>
            <li className='item__burger'><a href='#' className='link__burger'>Item</a></li>
            <li className='item__burger'><a href='#' className='link__burger'>Item</a></li>
            <li className='item__burger'><a href='#' className='link__burger'>Item</a></li>
            <li className='item__burger'><a href='#' className='link__burger'>Item</a></li>
            <li className='item__burger'><a href='#' className='link__burger'>Item</a></li>
            <li className='item__burger'><a href='#' className='link__burger'>Item</a></li>
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