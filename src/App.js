import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Login from './components/user/Login';
import Register from "./components/user/Register"
import Profile from "./components/user/Profile"
import WebsiteList from './components/website/WebsiteList';

function App() {
  return (
   <Router>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/user/:uid" component={Profile}></Route>
      <Route exact path="/user/:uid/website" component={WebsiteList}></Route>
   </Router>
  );
}

export default App;