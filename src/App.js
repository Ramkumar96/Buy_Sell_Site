import React from 'react';
import './App.css';
// import HomePage from './pages/HomePage';
// import TopCategories from  './components/CategoriesComponents/TopCategories';


// import ProductViewPage from './pages/ProductViewPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home'

const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    {/* <ProductViewPage/> */}
    <Footer/>
    </>
  )
}


export default App;
