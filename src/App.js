import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import TopCategories from  './components/CategoriesComponents/TopCategories';
import Header from './components/HomeComponents/Header';
import Footer from './components/HomeComponents/Footer';

const App = () => {
  return (
    <>
    <Header/>
    <HomePage/>
    {/* <TopCategories/> */}
    <Footer/>
    </>
  )
}


export default App;
