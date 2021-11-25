/* eslint-disable prettier/prettier */
import React,{ReactElement} from 'react';
import { ReviewStyleds } from "./styleds/ReviewStyleds";

interface Props {}

function Review( {}:Props):ReactElement{
    return(
        <ReviewStyleds className="review">
            <h1 className="review__text">See What Our 300,000+ Customers Are Saying</h1>
            <div className="review__container">
                <div className="review__container__frames">
                    <h2 className="review__container__frames__title">Endy Love!</h2>
                    <p className="review__container__frames__content">We’ve had our Endy for a couple years now and we LOVE it. It’s so comfortable. We’ve had many friends come try it and then end up buying their own!</p>
                    <h3 className="review__container__frames__signature">Skyler G.</h3>
                    <span className="review__container__frames__location">
                        <img width="12" height="12" src="//cdn.shopify.com/s/files/1/0764/8025/t/275/assets/location-gravy-16x16.svg?v=7363649576123155728" alt="" />
                        Toronto, ON
                    </span>
                </div>
                <div className="review__container__frames">
                    <h2 className="review__container__frames__title">Amazing Sleep.</h2>
                    <p className="review__container__frames__content">Best sleep I've had on any mattress. Keeps you cool at night and has just the right amount of support.</p>
                    <h3 className="review__container__frames__signature">Shona M.</h3>
                    <span className="review__container__frames__location">
                        <img width="12" height="12" src="//cdn.shopify.com/s/files/1/0764/8025/t/275/assets/location-gravy-16x16.svg?v=7363649576123155728" alt="" />
                        Victoria, BC
                    </span>
                </div>
                <div className="review__container__frames">
                    <h2 className="review__container__frames__title">World Class Comfort</h2>
                    <p className="review__container__frames__content">I bought [another mattress-in-a-box] initially after doing my research, but it was too firm… Endy has been perfection for me and is only getting better every day.</p>
                    <h3 className="review__container__frames__signature">Kyle S.</h3>
                    <span className="review__container__frames__location">
                        <img width="12" height="12" src="//cdn.shopify.com/s/files/1/0764/8025/t/275/assets/location-gravy-16x16.svg?v=7363649576123155728" alt="" />
                        Victoria, BC
                    </span>
                </div>
            </div>
            <button className = "review__btn">MORE REVIEWS</button>
            
        </ReviewStyleds> 
    );
}

export default Review