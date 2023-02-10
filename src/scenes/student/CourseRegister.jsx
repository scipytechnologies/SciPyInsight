import React from 'react'
import { Box, Breadcrumbs, Card, Checkbox, Container, FormControlLabel, Grid, TextField, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Loader from '../../scenes/main/Loader'
import { toast } from 'react-toastify'

function CourseRegister() {


    const breadcrumbs = [
        { label: 'Home', to: '/student/home' },
        { label: 'Course Register', to: '/student/class' }
    ];

    const [applied, setApplied] = useState(true)

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
        toast.success(`Applied Succesfully`, {
            position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {
            setApplied(false)
        }, 3000)
        console.log(applied)
    }


    // form course dropdown
    const [course, setCourse] = useState()
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
                    <Grid item>
                        {
                            applied ?
                                <Box component="form" sx={{ mt: 1, p: 3, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;' }} onSubmit={onSubmitHandler}>
                                    <Box sx={{ mb: 3 }}><Typography variant="h4" color="secondary">Course Registration</Typography></Box>
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
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="department"
                                                label="department"
                                                name="department"
                                                onChange={onChangeHandler}
                                            />
                                        </Grid>
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
                                                name="place"
                                                label="Place"
                                                type="text"
                                                id="place"
                                                onChange={onChangeHandler}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="College"
                                                label="College"
                                                type="text"
                                                id="College"
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
                                :
                                <div style={{ height: '70vh', width: '95vw', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <lottie-player src="https://lottie.host/344fdb29-6755-436a-b0e2-8b874f61cdec/h7cqKXroFY.json" background="rgba(0, 0, 0, 0)" speed="1" loop autoplay style={{ width: '80%', height: '80%' }}></lottie-player>


                                    <Box  sx={{ mt: -2,textAlign: 'center' }}>
                                        <Typography variant="h3" color="secondary">Your Classroom is under construction</Typography>
                                        <Typography variant="h5" color="secondary">Soon, you will be able to access your classroom</Typography>
                                    </Box>
                                    {/* <iframe src="https://lottie.host/?file=344fdb29-6755-436a-b0e2-8b874f61cdec/h7cqKXroFY.json"></iframe> */}
                                </div>
                        }
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default CourseRegister