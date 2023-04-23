import React from "react";
import { IPageProps } from "../../ContainerBase";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ButtonBase } from "@mui/material";

export interface IState {
  email: string;
  pass: string;
  loading: boolean;

}

export class Login extends React.Component<IPageProps, IState> {
  constructor(props: IPageProps) {
    super(props)
    this.state = {
      email: "",
      pass: "",
      loading: false,
    }
  }
  componentDidMount() {

  }

  render() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };
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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={<Typography typography='h3'>Email Address</Typography>}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={<Typography typography='h3'>Password</Typography>}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={<Typography typography='h4'>Remember Me</Typography>}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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
}