import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import reducers from './reducers';
import ListBlockItems from './components/ListBlockItems/ListBlockItems';
import ViewBlock from './components/ViewBlock/ViewBlock';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';
import Navbar from '../src/components/Navbar/Navbar';
import * as serviceWorker from './serviceWorker';
//import 'bootstrap/dist/css/bootstrap.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
        <div className="container">        
          <Header />
          <div className="navbar-sticky"><Navbar /></div>
          <Switch>
            <Route path="/blocks" component={ListBlockItems}/>
            <Route path="/block/:id" component={ViewBlock}/>
            <Route path="/" component={App}/>
          </Switch>
          <Footer />
        </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
