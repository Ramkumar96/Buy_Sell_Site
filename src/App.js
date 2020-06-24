import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import TopCategories from  './components/CategoriesComponents/TopCategories';
import Header from './components/HomeComponents/Header';
import Footer from './components/HomeComponents/Footer';
import ProductViewPage from './pages/ProductViewPage';

const App = () => {
  return (
    <>
    <Header/>
    {/* <HomePage/> */}
    <ProductViewPage/>
    <Footer/>
    </>
  )
}


export default App;
