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


export interface IState {
  isLoginFalse: boolean
  user: UserDto
  isEmpty: boolean
}

export class Login extends React.Component<IPageProps, IState> {
  constructor(props: IPageProps) {
    super(props)
    this.state = {
      user: UserDto.createObj(),
      isLoginFalse: false,
      isEmpty: false
    }
  }
  componentDidMount() {

  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: "500px"
          }}

        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography typography="h3">
            Welcome to T-Chat
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
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
              value={this.state.user.credentials.password}
              onChange={(e) => this.setState({
                isLoginFalse: false,
                isEmpty: false,
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
            {this.state.isLoginFalse &&
              <MyAlert
                severity='error'
                children='User namr or password false, please again'
              />
            }
            {this.state.isEmpty &&
              <MyAlert
                severity='error'
                children='User name or password is not empty'
              />
            }
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              onClick={(e) => this.onSignin()}
            >
              sign in
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body1" >
                  <Typography typography='h4'>Forgot Password</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1">
                  <Typography typography='h4'>Don't have an account? Sign Up</Typography>
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
    this.props.history.push(ClientRouter.message)


  }
}