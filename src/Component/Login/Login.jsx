import React, { useState } from 'react';
import { Box, Button, Container, Grid, Paper, TextField, Typography, Avatar } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';

const BackgroundImage = styled(Box)({
  backgroundImage: 'url(login.png)', // Replace with your image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
});

const LoginPaper = styled(Paper)({
  padding: '40px',
  display: 'flex',
  marginTop: '50px',
  flexDirection: 'column',
  alignItems: 'center',
});

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('https://heraklean-api.vercel.app/api/auth/login', {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        login(); // Update authentication state
        navigate('/');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during login');
    }
  };
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Container maxWidth="xs">
          <LoginPaper>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
              Access back to your account
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link href="#" variant="body2" sx={{ display: 'block', textAlign: 'right', mt: 1 }}>
                Forgot Password?
              </Link>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              {error && (
                <Typography color="error" align="center">
                  {error}
                </Typography>
              )}
              <Grid container>
                <Grid item xs>
                  <Link to="/Registration">
                  New User ? Register Account
</Link>
</Grid>
</Grid>
<Typography variant="body2" align="center" sx={{ mt: 3, mb: 1 }}>
Or login with
</Typography>
<Grid container justifyContent="center" spacing={2}>
<Grid item>

{/* // startIcon={<GoogleIcon />} */}
<img src="logo.webp" alt="" className='w-25' style={{marginLeft:"34%"}} onClick={() => alert('Google login')} />

</Grid>
<Grid item>
{/* <Button
variant="outlined"
startIcon={<FacebookIcon />}
onClick={() => alert('Facebook login')}
>
Facebook
</Button> */}
</Grid>
</Grid>
</Box>
</LoginPaper>
</Container>
</Grid>
<Grid item xs={false} sm={4} md={7}>
<BackgroundImage />
</Grid>
</Grid>
);
};

export default Login;