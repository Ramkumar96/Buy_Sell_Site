import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import TopCategories from  './components/CategoriesComponents/TopCategories';
import Header from './components/Header';
import Footer from './components/Footer';

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
