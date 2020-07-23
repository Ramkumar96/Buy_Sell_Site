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

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/product' exact component={ProductViewPage} />
          <Route path='/checkout' exact component={CheckOutPage} />
          <Home />
        </Switch>


        <Footer />
      </Router>
    </>
  )
}


export default App;
