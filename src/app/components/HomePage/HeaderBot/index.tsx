/* eslint-disable prettier/prettier */
import React, { ReactElement } from 'react';
import { HeaderBotStyled } from './styleds/HeaderBotStyled';

interface Props {}

function HeaderBot({}: Props): ReactElement {
  return (
    <HeaderBotStyled className="headerbot">
      
      <div className="headerbot__container">
        <span >Award-Winning Sleep Has Arrived</span>
        <img className = "headerbot__container__img" src="https://cdn.shopify.com/s/files/1/0764/8025/t/275/assets/maple-leaf-red.png?v=8342203473736130500" alt=""/>
      </div>
      <div>
        <button className="headerbot__btn bg-purple white">Shop the mattress</button>
        <button className="headerbot__btn">Discover the Mattress</button>
      </div>
      
    </HeaderBotStyled>
  ); 
}

export default HeaderBot;
