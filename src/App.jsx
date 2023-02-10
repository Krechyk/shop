import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import BuySection from './component/BuySection/BuySection';
import Brands from './component/Brands/Brands';
import Categories from './component/Categories/Categories';
import WhyChoose from './component/Why Choose/WhyChoose';
import Products from './component/Products/Products';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="flex flex-col">
      <Header/>
      <BuySection/>
      <Brands/>
      <Categories/>
      <WhyChoose/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
