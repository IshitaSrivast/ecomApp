import './App.css';
import Header from './components/Header';

import Home from './components/Home'
import Search from './components/Search'
import Explore from './components/Explore'

import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path= "/search" component={Search}/>
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        

        <Redirect to="/" />
      </Switch>
    
    </>
  );
}

export default App;
