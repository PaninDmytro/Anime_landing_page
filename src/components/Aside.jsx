import React from 'react';
import { useMediaQuery } from '../utils/useMediaQuery.ts';
import './Aside.scss';

export const Aside = () => {
  const isDesctop = useMediaQuery('(min-width: 1260px)');

  return (
    <>
      {isDesctop && (
        <ul className='aside__media'>
          <li><a href='#' className='aside__icon aside__facebook'></a></li>
          <li><a href='#' className='aside__icon aside__twitter'></a></li>
          <li><a href='#' className='aside__icon aside__telegram'></a></li>
          <li><a href='#' className='aside__icon aside__pinterest'></a></li>
          <li><a href='#' className='aside__icon aside__robot'></a></li>
          <li><a href='#' className='aside__icon aside__like'></a></li>
        </ul>
      )}
    </>
  );
};