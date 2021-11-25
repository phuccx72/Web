/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable prettier/prettier */
import React, { ReactElement } from 'react';
import { AboutStyled } from './styleds/AboutStyleds';

interface Props {}

function About({}: Props): ReactElement{
    return(
        <AboutStyled className="about">
            <span className="about__header">A Canadian Made Mattress With Perfect Firmness, Shipped to Your Door</span>
            <div className = "about__container">
                <div className="about__container__body">
                    <img src="//cdn.shopify.com/s/files/1/0764/8025/t/275/assets/Breathable-Cool-Illustration-93x101.svg?v=13603218546064635373" />
                    <p className="about__container__body__p">Breathable & Cool</p>
                </div>
                <div className="about__container__body">
                    <img src="//cdn.shopify.com/s/files/1/0764/8025/t/275/assets/perfect-firmness-illustration-138x93.svg?v=9248762835696126532" />
                    <p className="about__container__body__p">Perfect Firmness & Support</p>
                </div>
                <div className="about__container__body">
                    <img src="//cdn.shopify.com/s/files/1/0764/8025/t/275/assets/zero-motion-transfer-illustration-92x107.svg?v=15408837139948623241"  />
                    <p className="about__container__body__p">Zero Motion Transfer</p>
                </div>
            
            </div>
            <button className="about__btn">More about the mattress</button>
        </AboutStyled>
    );
}

export default About;