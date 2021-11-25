/* eslint-disable prettier/prettier */
import React,{ReactElement} from 'react';
import {ItemStyled} from './styleds/ItemStyleds'

interface Props {}
 
function Item ({} : Props):ReactElement{
    return(
        <ItemStyled className = "item">
            <span className ="item__title" > Complete Your Endy Collection</span>
            <div className="item__container">
                <div className="item__container__items">
                    <h1 className="item__container__items__name">The Solid Wood Bed</h1>
                    <p className="item__container__items__price">Starting from $1,125</p>
                    <img className="item__container__items__img" src="//cdn.shopify.com/s/files/1/0764/8025/files/Endy-Wood-Bed-Cross-Sell-Homepage-378x245.png?v=1634746572"/>
                    <br />
                    <button className="item__container__items__btn">Shop</button>
                </div>
                <div className="item__container__items">
                    <h1 className="item__container__items__name">The Endy Mattress Protector</h1>
                    <p className="item__container__items__price">Starting from $76.50</p>
                    <img className="item__container__items__img" src="//cdn.shopify.com/s/files/1/0764/8025/files/endy-mattress-protector-homepage-cross-sell-364x255.png?v=1617113468"/>
                    <br />
                    
                    <button className="item__container__items__btn">Shop</button>
                </div>
                <div className="item__container__items">
                    <h1 className="item__container__items__name">The Customizable Pillow</h1>
                    <p className="item__container__items__price">Starting from $72</p>
                    <img className="item__container__items__img" src="//cdn.shopify.com/s/files/1/0764/8025/files/endy-pillow-homepage-cross-sell-364x255.png?v=1617133690"/>
                    <br />
                    <button className="item__container__items__btn">Shop</button>
                </div>

            </div>
            
        </ItemStyled> 
    );
}

export default Item