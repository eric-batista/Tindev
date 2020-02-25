import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

export default function Routes() {
  return(
    <HashRouter>
      <Route path="/Tindev/" exact component={Login}/>
      <Route path="/Tindev/main" component={Main}/>
    </HashRouter>
  );
}