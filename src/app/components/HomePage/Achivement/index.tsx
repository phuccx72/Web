/* eslint-disable jsx-a11y/alt-text */
import React, { ReactElement } from 'react';
import { AchivementStyled } from './styleds/AchivementStyled';

interface Props {}

function Achivement({}: Props): ReactElement {
  return (
    <AchivementStyled className="achive">
      <div className="achive__logo">
        <img
          src="//cdn.shopify.com/s/files/1/0764/8025/t/275/assets/endy-award-product-innovator-105x48.svg?v=14469375302068181298"
          height="48"
        />
        <p className="achive__logo__p">Winner of the Product</p>
        <br /> Innovator Award
      </div>
      <div className="achive__logo">
        <img
          src="//cdn.shopify.com/s/files/1/0764/8025/t/275/assets/endy-award-most-trusted-105x48.svg?v=17937351354509754895"
          height="48"
        />
        <p className="achive__logo__p">#1 Most Trusted Mattress</p>
        <br /> Brand in Canada
      </div>
      <div className="achive__logo">
        <img
          src="//cdn.shopify.com/s/files/1/0764/8025/t/275/assets/endy-award-rating-82x48.svg?v=8697631285293815240"
          height="48"
        />
        <p className="achive__logo__p">Average rating based on </p>
        <br /> customer reviews
      </div>
      <div className="achive__logo">
        <img
          src="//cdn.shopify.com/s/files/1/0764/8025/t/275/assets/endy-award-product-of-the-year-105x48.svg?v=4411891374346081424"
          height="48"
        />
        <p className="achive__logo__p">2020 Product of the Year</p>
        <br />
        Award Winner
      </div>
      <div className="achive__logo">
        <img
          src="//cdn.shopify.com/s/files/1/0764/8025/t/275/assets/endy-award-canadian-flag-82x48.svg?v=9736924602889716365"
          height="48"
        />
        <p className="achive__logo__p">Made in Canada</p>
      </div>
    </AchivementStyled>
  );
}

export default Achivement;
