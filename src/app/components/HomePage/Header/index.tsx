/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement } from 'react';
import { useState } from 'react';
import Cart from '../Cart';
import Menus from '../Menus';
import { HeaderStyled } from './styleds/HeaderStyled';

interface Props {}

function Header({}: Props): ReactElement {
  const [show,setShow ] = useState(false)

  return (
    <HeaderStyled className="header">
      <div className="header__items">
        <img
          src="https://cdn.shopify.com/s/files/1/0764/8025/t/275/assets/endy_logo_tab_pink_RGB.svg?v=16802075288150995064"
          alt="logo"
          height="60px"
          width="132px"
          className="header__logo"
        />
      </div>
      <div className="header__items">
        <Menus />
      </div>
      <div className="header__items">
        <span className="uppercase mr-15">support</span>
        <span>
         <button className ="header__btn" onClick={() => setShow(!show)}>
            <img
            src="https://cdn.shopify.com/s/files/1/0764/8025/t/275/assets/endy-cart-48x48.svg?v=15396146161102881870"
            alt="cart"
            />
          
          </button>
          {show && <Cart />}
          
        </span>
      </div>
      
    </HeaderStyled>
  );
}

export default Header;
