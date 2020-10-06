/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import {Provider} from 'react-redux';

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "assets/css/techfully-styles.css"
import {combineReducers} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form'


// Reducers

import  dashboardReducer from 'store/reducers/dashboardReducer'
const reducers =  combineReducers({
  dashboard:dashboardReducer,
  form: reduxFormReducer
});



const hist = createBrowserHistory();

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const initialState = {}
const store = createStore(reducers, initialState, enhancer);


ReactDOM.render(

<Provider store={store}>
<Router history={hist}>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/rtl" render={props => <RTLLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>
</Provider>
  ,
  document.getElementById("root")
);
