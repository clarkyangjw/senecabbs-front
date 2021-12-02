import React, { Component } from 'react'
import {connect} from 'react-redux'

import {Container } from '@mui/material';
import Footer from '../../components/Footer';
import Header from '../../components/Header';



class Forum extends Component {

    render() {
        // console.log(this.props)
        return (
            <div className="forum">
                <Container component="main" maxWidth="false">
                    <Container fixed>
                        <Header userInfo={this.props.userInfo}/>
                    </Container>
                    <Container fixed>
                        Forum....
                    </Container>
                    <Container fixed>
                        <Footer/>
                    </Container>

                </Container>
            </div>
        )
    }
}



export default connect(
    state => ({
      userInfo: state.userInfo
    })
)(Forum)