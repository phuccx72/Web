/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable prettier/prettier */
import React,{  Component, ReactElement, useEffect } from 'react';
import { useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';

import { CartStyled } from './styleds/CartStyled';

interface Props {}

function Cart(this: any, {}:Props): ReactElement {

    // const [show, setShow] = useState(true)
    
    
    
    return(
        <CartStyled className="cart" id ="cart">
            

        <div className="cart__header">
            <span className="cart__header__text">Your Cart - 0 Items</span>
            <button className = "cart__header__exit"  >
                <img src="//cdn.shopify.com/s/files/1/0764/8025/t/275/assets/close_circle_48x48_white_hollow.svg?v=2598678825295316511" alt="" />
            </button>
            {/* {show && <Cart />} */}
        </div>
        <div className="cart__notice">
            <p>Orders typically ship from our Canadian warehouses in 1-3 business days.</p>
        </div>
        <div className="cart__store">
            <h1 className="cart__store__h1">Your cart is empty.</h1>
            <img src="//cdn.shopify.com/s/files/1/0764/8025/t/275/assets/empty-cart-face-64x64.svg?v=14936374552125436746" alt="" />
            <h2 className="cart__store__h2">
            Let's change that.
            <br />Start here:
            </h2>
        </div>
        <div className="cart__item">
            <a className = "cart__item__text" href="">The Endy Mattress</a>
            <img className="cart__item__img" src="https://cdn.shopify.com/s/files/1/1621/2873/files/Endy-Side-Cart-Empty-mattresses-303x176-2x.jpg" alt="" />
        </div>
        <div className="cart__item">
            <a className = "cart__item__text" href="">The Solid Wood Bed</a>
            <img className="cart__item__img1" src="https://cdn.shopify.com/s/files/1/0764/8025/files/Empty-Cart-endy-solid-wood-bed-148x136.jpg?v=1634747351" alt="" />
        
        
            <a className = "cart__item__text" href="">The Customizable Pillow</a>
            <img className="cart__item__img1" src="https://cdn.shopify.com/s/files/1/1621/2873/files/Endy-Side-Cart-Empty-pillows-148x136-2x.jpg" alt="" />
        </div>
        </CartStyled>
    );
}



export default Cart;

