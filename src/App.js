import React from 'react';
import './App.css';
// import HomePage from './pages/HomePage';
// import TopCategories from  './components/CategoriesComponents/TopCategories';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import ProductViewPage from './pages/ProductViewPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home'
import CheckOutPage from './pages/CheckOutPage';
import AddProductPage from './pages/AddProductPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CategoryPage from './pages/CategoryPage';


const App = () => {
  return (
    <>

      <Router>
        <Header />
        <Switch>
          <Route path='/login' exact component={LoginPage} />
          <Route path='/signup' exact component={SignupPage} />
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/product' exact component={ProductViewPage} />
          <Route path='/checkout' exact component={CheckOutPage} />
          <Route path='/category' exact component={CategoryPage} />
          <Route path='/add-product' exact component={AddProductPage} />
          <Home />
        </Switch>


        
        <Footer />
      </Router>

    </>
  )
}

export default App;
