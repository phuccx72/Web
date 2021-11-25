/* eslint-disable prettier/prettier */
import React, { ReactElement } from 'react';
import { MenuStyled } from './styleds/MenuStyled';

interface Props {}

function Menus({}: Props): ReactElement {
  return (
    <MenuStyled className="menu">
      <ul className="menu__items">
        <span className="uppercase">The Mattress</span>
        <span className="menu__hightline" />
        <li className="menu__items__container">
          <div >
            <a href="#" className="menu__items__container__text">The Endy Mattress</a>
            <a href="#" className="menu__items__container__text">RV Mattress</a>
            <a href="#" className="menu__items__container__text">Discover the Mattres</a>
          </div>
          <div >
            <img className="menu__items__container__img" src="https://cdn.shopify.com/s/files/1/0764/8025/files/Endy-couple-on-mattress-nav-517-142.jpg?v=1637075089" alt="" />
          </div>
        </li>
        
      </ul>
      <ul className="menu__items">
        <span className="uppercase">Pillows</span>
        <span className="menu__hightline" />
      </ul>
      <ul className="menu__items">
        <span className="uppercase">Bed Frames</span>
        <span className="menu__hightline" />
      </ul>
      <ul className="menu__items">
        <span className="uppercase">Bedding</span>
        <span className="menu__hightline" />
      </ul>
      <ul className="menu__items">
        <span className="uppercase">Sofa</span>
        <span className="menu__hightline" />
      </ul>
      <ul className="menu__items">
        <span className="uppercase">Rugs</span>
        <span className="menu__hightline" />
      </ul>
    </MenuStyled>
  );
}

export default Menus;
