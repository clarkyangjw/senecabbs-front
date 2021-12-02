import React, { Component, lazy } from 'react'
import { Route, Switch } from 'react-router-dom';
import {Container } from '@mui/material';
import Footer from '../../components/Footer';
import Header from '../../components/Header';


const Login = lazy(() => import('../Login'))
const Register = lazy(() => import('../Register'))
const ForgetPassword = lazy(() => import('../ForgetPassword'))

export default class Account extends Component {
    render() {
        return (
            <div className="account">
                <Container component="main" maxWidth="false">
                    <Container fixed>
                        <Header/>
                    </Container>
                    <Container fixed>
                        <Switch>
                            <Route path="/account/login" component={Login}/>
                            <Route path="/account/register" component={Register}/>
                            <Route path="/account/forgetPassword" component={ForgetPassword}/>
                        </Switch>
                    </Container>
                    <Container fixed>
                        <Footer/>
                    </Container>
                </Container>
            </div>
        )
    }
}
