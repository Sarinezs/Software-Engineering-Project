import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
import { login } from '../../../Functions/auth'

import { useDispatch } from 'react-redux';
import { keep_user_id } from '../../../store/store_current_user';






// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Login = () => {
  const navi = useNavigate()
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const list_data = {
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      phone: data.get("phone"),
      email: data.get("email"),
      password: data.get("password"),
      role: data.get("role"),
      address: data.get("address")
    }



    login(list_data)
      .then((res) => {
        
        if(res.data === 'password Invalid!!'){
          alert(res.data)
        }
        else if(res.data === 'User not found!!!'){
          alert(res.data)
        }
        else{
          dispatch(keep_user_id(res.data.payload.user))
          roleRedirects(res.data.payload.user.role)
        }
        // console.log(res.data.payload.user)
        // alert(res.data.payload)
        // navi('/Home')
        

      })
      .catch((err) => {
        console.log(err)
      })

  }

  const roleRedirects = (role) => {
    if (role === 'admin') {
      navi('/product')
    } else {
      navi('/Home')
    }
  }

  return (
    <div className='brand' style={{ marginBottom: "100%" }}>
      <nav className='navi'>
        <ul class="menu_left">
          <li>
            <div class="logo">
              <img src="https://i.ibb.co/zxVxxrR/logosketchuw.png" title="" alt="" width="124"></img>
            </div>
          </li>

        </ul>

      </nav>
      <ThemeProvider theme={defaultTheme}>
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

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>

                <Grid item>
                  <Link href="/" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Login