import React, { Suspense, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Account from './pages/Account';
import Forum from './pages/Forum';



function App() {
  return (
    <Fragment>
      <Router>

        <Suspense fallback={<div className="route-loading">loading...</div>}>
            <Switch>
              <Route exact path="/" component={Forum}/>
              <Route path="/account" component={Account}/>
              <Redirect to="/"/>
            </Switch>
        </Suspense>


      </Router>
    </Fragment>
  );
}

export default App;
