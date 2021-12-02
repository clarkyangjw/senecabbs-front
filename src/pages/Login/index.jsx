import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {addUserInfo} from '../../redux/actions/loginUser'

// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
// import CardMedia from '@mui/material/CardMedia';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { API } from '../../utils/api'
import { UUID } from '../../utils/uuid'

const theme = createTheme();

class Login extends Component{
  state = {
    captcha: '',
    username:'',
    password:'',
    key:'',
    code:'',
    error:'',
  }

  addUserInfo = (userInfoObj) =>{
    this.props.addUserInfo(userInfoObj)
  }

  saveFormData = (dataType) => {
    return (event) => {
      this.setState({[dataType]:event.target.value})
    }
  }

  handleSubmit = async (event) => {
    // console.log(event)
    event.preventDefault();
    //  const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const result = await API.post('/api/auth/anno/login',{
      username: this.state.username,
      password: this.state.password,
      key: this.state.key,
      code: this.state.code
    })
    // console.log(result)
    // console.log(this.props)
    const {isSuccess, data} = result.data
    if(isSuccess === true){
      this.addUserInfo(data)
      // console.log(this.props)
      // console.log(this.props.location.state.from.pathname)
      if(this.props.location.state === undefined){
        this.props.history.replace("/")
      }else{
        this.props.history.replace(this.props.location.state.from.pathname)
      }
    }
    else{
      this.setState({
        password:'',
        code:'',
        error: result.data.msg
      })
      this.refreshCaptcha()
      
    }
    
  };

  async refreshCaptcha(){
    let uuid = UUID()
    this.setState({key:uuid})
    const result = await API.get('/api/auth/anno/captcha',{
      params:{
        key: uuid,
      },
      responseType: 'arraybuffer'
    })
    // console.log(result)
    this.setState({
      captcha: result.data
    })
  }

  async componentDidMount(){
    this.refreshCaptcha()
  }

  render(){
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ mt: 1, mb: 3}}>
              Sign in to Seneca BBS
            </Typography>
            <Card elevation={0} sx={{height: 50, mt: 1}} >
              {this.state.error === ""? "":<Alert severity="error">{this.state.error}</Alert>}
            </Card>
            <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                onChange={this.saveFormData('username')}
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={this.state.username}
                autoFocus
              />
              <TextField
                onChange={this.saveFormData('password')}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={this.state.password}
                autoComplete="current-password"
              />
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={4}>
                  <img src={`data:image/png;base64,${btoa(new Uint8Array(this.state.captcha).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`} alt="Verify code"/>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    onChange={this.saveFormData('code')}
                    required
                    fullWidth
                    id="code"
                    label="Verify Code"
                    name="code"
                    value={this.state.code}
                  />
                </Grid>
              </Grid>
              {/* <FormControlLabel
                sx={{ mt: 1 }}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/account/forgetPassword">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/account/register">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
  
}


export default connect(
  state => ({
    userInfo: state.userInfo
  }),
  {addUserInfo}
)(Login)