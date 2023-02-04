import axios from "axios";
import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, setRole, setStudent, setPublic, setAdmin } from '../../store/auth';
import { MenuItem } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setLoading, unSetLoading } from "../../store/loader";
import { loginRole } from "../../store/loginedUserSlice";


export default function SignIn() {

  const theme = createTheme();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});


  const role = useSelector((state) => state.auth.role)



  // submit function
  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(setLoading())
    axios
      .post("http://localhost:5000/user/signin", form)
      .then((response) => {
        const token = response.data.token;
        const role = response.data.role
        // Save token to localStorage
        localStorage.setItem("user-token", JSON.stringify(token));
        toast.success(`${response.data.message}`, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        console.log(response);       
         window.location.reload(false);
         dispatch(loginRole(role))
        setTimeout(() => {
          // navigate("/student/home");
          
          dispatch(unSetLoading())
        }, 3000);
       
      
      })
      .catch((err) => setErrors(err.response.data));
      setTimeout(() => {
        dispatch(unSetLoading())

      }, 3000);

  }

  // switching routers
  // switch (data.get('roles')) {
  //   case 'student':
  //     navigate('/student/home')
  //     dispatch(setUser(true))
  //     dispatch(setStudent())
  //     console.log(role)
  //     break;


  //   case 'teacher':
  //     navigate('/teacher')
  //     dispatch(setUser(true))
  //     dispatch(setPublic())
  //     break;


  //   case 'admin':
  //     navigate('/admin/home')
  //     dispatch(setUser(true))
  //     dispatch(setAdmin())
  //     break;

  //   default: alert('Enter role')
  // }



  return (

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
        <Avatar sx={{ m: 1, backgroundColor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={onSubmitHandler} noValidate sx={{ mt: 1 }}>


          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChangeHandler}
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
            onChange={onChangeHandler}
          />

          {/* <TextField
              variant="outlined"
              select
              label="Role"
              name='roles'
              sx={{ width: '100%', margin: '1rem 0' }}
            >
              <MenuItem value='student'>Student</MenuItem>
              <MenuItem value='teacher'>Teacher</MenuItem>
              <MenuItem value='admin'>admin</MenuItem>
            </TextField> */}


          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}