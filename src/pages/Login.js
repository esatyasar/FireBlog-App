   
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useHistory} from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import {useState, useContext} from 'react';
import {NavLink} from "react-router-dom";
import {BlogContext} from '../contexts/BlogContext';
import { toastSuccessNotify,toastErrorNotify } from "../helpers/toastNotify";

const theme = createTheme();

export default function Login() {

  const {handleChange} = useContext(BlogContext)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(email, password)
      history.push("/Dashboard")
      toastSuccessNotify("Logged in successfully!");
    } catch {
      /* setError("Failed to log in") */
      
      toastErrorNotify("Failed to log in");
    }

    setLoading(false)
  }

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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
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
                onChange= {(e) => setEmail(e.target.value) }
                required
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
                onChange= {(e) => setPassword(e.target.value) }
                required
              />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading} 
              onClick = {handleChange}
            >
              Log In
            </Button>
           </Box>
           <div className="w-100 text-center mt-3">
            <NavLink to="/ForgotPassword">Forgot Password?</NavLink>
          </div>
        </Box>
        <div className="w-100 text-center mt-2">
              Need an account? <NavLink to ="/Register">Register</NavLink>
        </div>
      </Container>
    </ThemeProvider>
  );
}