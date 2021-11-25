/* eslint-disable prettier/prettier */
import React,{ReactElement} from 'react';
import {TextStyleds} from './styleds/TextStyleds'

interface Props {}

function Text1( {}:Props):ReactElement{
    return(
        <TextStyleds className="text">
            <h1 className="text__h1">Endy boasts 
            <span className="text__span" > 'perfect firmness' </span>
                which I found entirely accurate.</h1>
            <img className="text__img" src="//cdn.shopify.com/s/files/1/0764/8025/t/275/assets/chatelaine-logo.svg?v=8850608086948258744" alt="" />
        </TextStyleds>
    );
}

export default Text1