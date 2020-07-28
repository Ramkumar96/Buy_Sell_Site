import React, { Component } from 'react';
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


class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      showHeader: true
    }
  }

  hideNavigation = () => {
    this.setState({
      showHeader: false
    })
  }


  render(){

  return (
    <>
      <Router>
      <div>
        
        {this.state.showHeader && <Header/>}

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/signup' exact component={SignupPage} />
          <Route path='/product' exact component={ProductViewPage} />
          <Route path='/category' exact component={CategoryPage} />
          <Route path='/add-product' exact component={AddProductPage} />
          <Route render={(props) => (
            <CheckOutPage
            hideNavigation={this.hideNavigation}  
            path='/checkout'/>
          )}
          />
          <Home />
        </Switch>
        <Footer />
      </div>
      </Router>

    </>
  )
}
}

export default App;
