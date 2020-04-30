import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, HashRouter, Switch, Redirect } from "react-router-dom";

import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";
import "./scss/material-kit-pro-react.scss?v=1.8.0";


// pages for this product
import Components from "views/PresentationPage/PresentationPage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import SignUpPage from "views/SignupPage/SignupPage.jsx";
import Login from "views/LoginPage/Login.js";
import AddObject from "views/ObjectPage/Object.jsx";
import ListObject from "views/ObjectPage/ObjectList.jsx";
import PersonAdd from "views/PersonAddPage/PersonAddPage.jsx"
import PersonList from "views/PersonsListPage/PersonsListPage.jsx"
import PersonDetail from "views/PersonDetails/PersonDetailsPage.jsx"
import DetailObject from "views/ObjectPage/ObjectDetail.jsx"
import AllComponents from "views/ComponentsPage/ComponentsPage.jsx"
import ProductPage from "views/ProductPage/ProductPage.jsx"


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/add_object" component={AddObject} />
    <Route path="/list_object" component={ListObject} />
    <Route path="/detail_object" component={DetailObject} />


      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />

      <Redirect from="/ad" to="/admin/dashboard" />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/allComponents" component={AllComponents} />
      <Route path="/product_page" component={ProductPage} />

      <Route path="/login" component={Login} />
      <Route path="/person_add" component={PersonAdd} />
      <Route path="/person_list" component={PersonList} />
      <Route path="/person_detail" component={PersonDetail} />


      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
