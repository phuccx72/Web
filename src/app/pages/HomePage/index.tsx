import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from 'app/components/HomePage/Header';
import HeaderBot from 'app/components/HomePage/HeaderBot';
import Achivement from 'app/components/HomePage/Achivement';
import About from 'app/components/HomePage/About';
import Item from 'app/components/HomePage/Items';
import Text1 from 'app/components/HomePage/Text';
import Review from 'app/components/HomePage/Review';
import Cart from 'app/components/HomePage/Cart';
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <HeaderBot />
      <Achivement />
      <About />
      <Item />
      <Text1 />
      <Review />
      {/* <Cart />  */}
    </>
  );
}
