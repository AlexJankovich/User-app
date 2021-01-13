import gif from './loading.gif'
import React from 'react';
import {Loading} from './Styled';

export const Preloader = () => {
  return (
    <Loading>
    <img src={gif} alt=""/>
  </Loading>)
}