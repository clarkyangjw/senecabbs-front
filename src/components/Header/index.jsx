import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {Stack } from '@mui/material';

export default class Header extends Component {
	render() {
		// console.log(this.props)
		return (
			<div>
				Header...
				
				<Stack spacing={2} direction="row">
					<Link to="/account/login">Login</Link>
					<Link to="/account/register">Sign up</Link>
				</Stack>
			</div>
		)
	}
}
