import React, { useState } from 'react';
import { useMediaQuery } from '../utils/useMediaQuery.ts';
import './Banner__menu.scss';
import cn from 'classnames';

export const Banner__menu = () => {
  const [activeLink, setActiveLink] = useState(0);
  const isTablet = useMediaQuery('(min-width: 744px)');
  const itemsArray = [
    { id: 1, text: 'Item' },
    { id: 2, text: 'Item' },
    { id: 3, text: 'Item' },
    { id: 4, text: 'Item' }
  ];

  return (
    <ul className='banner__items'>
      {isTablet ? (
        <li
          className={cn('banner__item', {
            'is-active': activeLink === 0,
          })}
          onClick={() => setActiveLink(0)}
        >
          <a href='#' className='banner__link'>Item</a>
        </li>
      ) : (
        <li
        className={cn('banner__item', {
          'is-active': activeLink === 0,
        })}
        onClick={() => setActiveLink(0)}
        >
          <a href='#' className='banner__link'>Lorem Ipsum is simply dummy</a>
        </li>
      )}
      {itemsArray.map(item => (
        <li
          className={cn('banner__item', {
            'is-active': item.id === activeLink,
          })}
          key={item}
          onClick={() => setActiveLink(item.id)}
        >
          <a href='#' className='banner__link'>{item.text}</a>
        </li>
      ))}
    </ul>
  );
};