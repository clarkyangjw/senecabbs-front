import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import Home from './pages/Home'
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="route-loading">loading...</div>}>
        <div className="App">



          <Switch>
            {/* 配置默认跳转到home的路由 */}
            <Route exact path="/" render={()=> <Redirect to="/home"/>}/>
            <Route path="/home" component={Home}/>

            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>

            <Redirect to="/home"/>
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
