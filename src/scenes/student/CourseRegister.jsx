import React from 'react'
import { Box, Breadcrumbs, Card, Checkbox, Container, FormControlLabel, Grid, TextField, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CourseRegister() {


    const breadcrumbs = [
        { label: 'Home', to: '/student/home' },
        { label: 'Course Register', to: '/student/class' }
    ];


    // form onchange handler
    const [form, setForm] = useState({});
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(form)
    }


    // form course dropdown
    const  [course, setCourse] = useState()
    const handleChange = (event) => {
        setCourse(event.target.value);
      };
    

    return (
        <>
            {/* Breadcrumbs */}
            <Container>
                <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mt: 2 }}>
                    {breadcrumbs.map((breadcrumb, index) => (
                        <Link color="inherit" to={breadcrumb.to} key={index} aria-current={index.currentPage} underline="hover">
                            <p style={{ fontSize: '12px' }}>{breadcrumb.label}</p>
                        </Link>
                    ))}
                </Breadcrumbs>

                <Grid container spacing={3} sx={{ width: '95vw' }}>
                    <Grid item sx={{mt:1}}>
                        <Typography variant="h4" color="secondary">Course Registration</Typography>
                    </Grid>

                    <Grid item>
                        <Box component="form" sx={{ mt: 1, p:3,  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;' }} onSubmit={onSubmitHandler}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={course}
                                            label="Select Course"
                                            onChange={handleChange}
              
                                        >
                                            <MenuItem value={1}>Artificial Intellgence</MenuItem>
                                            <MenuItem value={2}>MERN Stack</MenuItem>
                                            <MenuItem value={3}>Python Machine Learning</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="whatsappNo"
                                        label="Whatsapp No"
                                        name="whatsappNo"
                                        onChange={onChangeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={onChangeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        onChange={onChangeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I want to subscribe for pdf learning material."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                // fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Apply
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default CourseRegister