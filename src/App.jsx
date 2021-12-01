import React, { Suspense, lazy, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import {Container, Grid } from '@mui/material';
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'

const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const ForgetPassword = lazy(() => import('./pages/ForgetPassword'))

function App() {
  return (

    <dev className="App">
      <Router>
        <Container component="main" maxWidth="false">
          <Container fixed>
              <Header/>
          </Container>

          <Container fixed>
            <Suspense fallback={<div className="route-loading">loading...</div>}>
                <Switch>
                  <Route exact path="/" component={Home}/>

                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/forgetPassword" component={ForgetPassword}/>

                  <Redirect to="/"/>
                </Switch>
            </Suspense>
          </Container>

          <Container fixed>
              <Footer/>
          </Container>
        </Container>
      </Router>
    </dev>
    
  );
}

export default App;
