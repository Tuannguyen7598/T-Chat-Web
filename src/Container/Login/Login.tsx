import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Axios from "axios";
import React from "react";
import { MyAlert } from '../../Component/Alert';
import { IPageProps } from "../../ContainerBase";
import { ClientRouter, ServerRouter } from "../../Routers";
import { UserActonTypeAccount, UserDto } from "../../type";
import { DraphonyToast } from '../../Component/Toast';
import { toastError, toastSuccess } from '../../Component/ToastMessage';


export interface IState {
  isLoginFalse: boolean
  isRegisterFales: boolean
  user: UserDto
  isEmpty: boolean
  isSignUp: boolean
  isConfirm: boolean
  passWordConfirm: string
  
}

export class Login extends React.Component<IPageProps, IState> {
  constructor(props: IPageProps) {
    super(props)
    this.state = {
      user: UserDto.createObj(),
      isLoginFalse: false,
      isEmpty: false,
      isSignUp: false,
      passWordConfirm: '',
      isConfirm: true,
      isRegisterFales:false
    }
  }
  componentDidMount() {

  }

  render() {
    let state = ''
    let state2 = ''
    if (!this.state.isSignUp) {
      state = 'Sign in'
      state2 = `Don't have an account? Sign Up`
    } else {
      state = 'Register'
      state2 = 'Sign in'
    }
    console.log(this.state.user.credentials)
    return (
      <Container component="main" maxWidth="xs" onKeyPress={(e) => {
        if (e.key === "Enter" && !this.state.isSignUp) {
          this.onSignin()
          return
        }
        if (e.key === "Enter") {
          this.onSignUp()
        }

      }}>
        
        <DraphonyToast/>
       
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', width: "500px" }} >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography typography="h3">
            Welcome to T-Chat
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              error={this.state.isEmpty}
              label={<Typography typography='h3'>User name</Typography>}
              name="email"
              onChange={(e) => this.setState({
                isLoginFalse: false,
                isEmpty: false,
                isRegisterFales:false,
                user: {
                  ...this.state.user,
                  username: e.currentTarget.value
                }
              })}
              value={this.state.user.username}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              error={this.state.isEmpty}
              label={<Typography typography='h3'>Password</Typography>}
              type="password"
              value={this.state.user.credentials.password ?? ''}
              onChange={(e) => this.setState({
                isLoginFalse: false,
                isEmpty: false,
                isRegisterFales:false,
                user: {
                  ...this.state.user,
                  credentials: {
                    password: e.currentTarget.value,
                    salt: ""
                  }
                }
              })}
              id="password"
              autoComplete="current-password"
            />
            {this.state.isSignUp &&
              <TextField
                margin="normal"
                fullWidth
                name="password"
                error={this.state.isEmpty}
                label={<Typography typography='h3'>Confirm Password</Typography>}
                type="password"
                value={this.state.passWordConfirm}
                onChange={(e) => this.setState({
                  isLoginFalse: false,
                  isEmpty: false,
                  isRegisterFales:false,
                  passWordConfirm: e.currentTarget.value
                })}
                id="password"
                autoComplete="current-password"
              />
            }
            {this.state.isLoginFalse &&
              <MyAlert
                severity='error'
                children='Login false, please again'
              />
            }
            {this.state.isRegisterFales &&
              <MyAlert
                severity='error'
                children='Register false, please again'
              />
            }
            {this.state.isEmpty &&
              <MyAlert
                severity='error'
                children='User name or password is not empty'
              />
            }
            {this.state.isSignUp && !this.state.isConfirm &&
              <MyAlert
                severity='error'
                children='Passworf incorect'
              />
            }
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              onClick={(e) => {
                if (!this.state.isSignUp) {
                  this.onSignin()
                  return
                }
                this.onSignUp()
              }}
            >
              {state}
            </Button>

            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" onClick={() => {
                  if (this.state.isSignUp) {
                    this.setState({
                      isSignUp: false,
                      user: UserDto.createObj(),
                      isEmpty: false,
                      isLoginFalse: false,
                      isRegisterFales:false
                    })
                    return
                  }
                  this.setState({
                    isSignUp: true,
                    user: UserDto.createObj(),
                    isEmpty: false,
                    isLoginFalse: false,
                    isRegisterFales:false
                  })
                }
                }
                >
                  <Typography style={{ marginRight: 20 }} typography='h4'>{state2}</Typography>
                </Link>
              </Grid>
            </Grid>


          </Box>
        </Box>
      </Container>

    )

  }
  private onSignin = async () => {
    const user = this.state.user
    
    if (user.username === "" || user.credentials.password === "") {
      this.setState({
        isEmpty: true
      })
      return
    }
    const login = await Axios.post(ServerRouter.login, user)
    if (login.data === UserActonTypeAccount.loginFalse) {
      this.setState({
        isLoginFalse: true
      })
      return
    }
    toastSuccess("Login Successfuly")
    this.props.history.push(ClientRouter.message)
  }

  private onSignUp = async () => {
    const user = this.state.user
    if (user.username === "" || user.credentials.password === "") {
      this.setState({
        isEmpty: true
      })
      return
    }
    if (user.credentials.password !== this.state.passWordConfirm) {
      this.setState({
        isConfirm: false
      })
      return
    }
    const register = await Axios.post(ServerRouter.register, user)
    if (register.data === UserActonTypeAccount.registerFalse) {
      this.setState({
        isRegisterFales:true
      })
      return
    }
    toastSuccess("Register Successfuly")
    this.props.history.push(ClientRouter.message)
  }
}