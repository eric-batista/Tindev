import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

export default function Routes() {
  return(
    <BrowserRouter>
      <Route path="/Tindev" exact component={Login}/>
      <Route path="/Tindev/devs/:id" component={Main}/>
    </BrowserRouter>
  );
}