import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {Stack, Button } from '@mui/material';

export default class Header extends Component {
	render() {
		return (
			<div>
				Header...
				<Stack spacing={2} direction="row">
					<Link to="/login">Login</Link>
					<Link to="/register">Sign up</Link>
				</Stack>
			</div>
		)
	}
}
